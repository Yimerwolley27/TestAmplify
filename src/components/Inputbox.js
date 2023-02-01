import { useState } from 'react';

const ButtonClick = () => {
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([])

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://lnfppvwcta.execute-api.us-east-1.amazonaws.com/v1", {
        method: "POST",
        body: JSON.stringify({
          listingId: listingId,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setMessage("ListingId correct");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
 
  return (
    <div>
      <form onSubmit={{handleSubmit}}>
        <input
          type="text"
          id="message"
          name="message"
          onChange={handleChange}
          value={message}
        />
      </form>
      <button type ="Submit"> Create</button>
      <div className="message">{message ? <p>{message}</p> : null}</div>
    </div>
  );

  }
  export default ButtonClick;