import { useState } from 'react';

const ButtonClick = () => {
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([])

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }
  return (
    <div>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
      />

      <button onClick={fetchData}>Update</button>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ButtonClick