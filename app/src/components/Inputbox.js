import { useState } from 'react';

const ButtonClick = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const cleanUp = () => {
    setOutput('');
  };

  const handleClick = async (event) => {
    event.preventDefault();
    setInput('');
    try {
      const response = await fetch(`https://lnfppvwcta.execute-api.us-east-1.amazonaws.com/v1/invoke/?ListingID=${input}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log(JSON.stringify(result))

      setOutput(JSON.stringify(result))

    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
      <h2>Search</h2>
      <label htmlFor="input" className="me-2">ListingID</label>
      <input
        type="text"
        id="input"
        name="input"
        onChange={handleChange}
        value={input}
      />
      <p>{output}</p>
      <button className="btn btn-info me-2" onClick={handleClick}>Search</button>
      <button className="btn btn-secondary" onClick={cleanUp}>Clean</button>
    </div>
  );
}

export default ButtonClick