import { useState } from 'react';
import MyDataGrid from './KeyPhrasesTable';

const SearchResult = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(null);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const cleanUp = () => {
    setOutput(null);
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

      setOutput(result)

      console.log(result);

    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
      <h2>Search Result</h2>
      <label htmlFor="input" className="me-2">ListingID</label>
      <input
        type="text"
        id="input"
        name="input"
        onChange={handleChange}
        value={input}
        style={{ marginBottom: 10}}
      />
      {output && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 130, paddingRight: 130 }}>
            <h5>ListingID: {output.Item.ListingID.N}</h5>
            <h5>TimeStamp: {output.Item.TimeStamp.S}</h5>
          </div>
          <div className="mb-2" style={{ display: 'flex', justifyContent: 'center' }}>
            <MyDataGrid data={output}/> 
          </div>

        </div>
      )}
      <div>
        <button className="btn btn-info me-2" onClick={handleClick}>Search</button>
        <button className="btn btn-secondary" onClick={cleanUp}>Clean</button>
      </div>
    </div>
  );
}

export default SearchResult