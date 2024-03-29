import { useState } from 'react';
import AttributesDataGrid from './AttributesTable';

const SearchData = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(null);

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
      const response = await fetch(`https://pfg796gf56.execute-api.us-east-1.amazonaws.com/v1?ListingID=${input}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log(JSON.stringify(result));

      setOutput(result);

      // setOutput(JSON.stringify(result, null, 4));

      console.log(result.Item);

      const item = result.Item;

      const entries = Object.entries(item);

      console.log(entries);



    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
      <h2>Search Data</h2>
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
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h5>ListingID: {output.Item.ListingID.N}</h5>
          </div>
          <div className="mb-2" style={{ display: 'flex', justifyContent: 'center' }}>
            <AttributesDataGrid data={output}/> 
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

export default SearchData