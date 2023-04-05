import { useState } from 'react';
import MyDataGrid from './KeyPhrasesTable';
import OAIDataGrid from './OAIKeyTable';

const SearchResult = () => {
  const [input, setInput] = useState('');
  const [AWSoutput, setAWSOutput] = useState(null);
  const [OAIoutput, setOAIOutput] = useState(null);
  const [remarks, setRemarks] = useState(null);
  const [Mode, setMode] = useState('aws');
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleRadioChange = (event) => {
    setMode(event.target.value);
  };
  
  const cleanUp = () => {
    setAWSOutput(null);
    setOAIOutput(null);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    setInput('');
    setError(null);

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

      setRemarks(result.Item.Remarks.S);
    }
    catch (error) {
      console.log(error);
      setError(error);
    }

    try {
      const response = await fetch(`https://lnfppvwcta.execute-api.us-east-1.amazonaws.com/v1/invoke/?ListingID=${input}&Mode=aws`, {
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

      setAWSOutput(result)

      console.log(result);

      // console.log(result.Item.Result.S);

    } catch (error) {
      console.log(error);
      setError(error);
    }

    try {
      const response = await fetch(`https://lnfppvwcta.execute-api.us-east-1.amazonaws.com/v1/invoke/?ListingID=${input}&Mode=openai`, {
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

      setOAIOutput(result)

      console.log(result);

      // console.log(result.Item.Result.S);

    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  
  const renderResult = () => {
    return <div>
      {AWSoutput && OAIoutput && (
          <div>
            <div style={{ width: '80%', margin: '0 auto', paddingTop: 20, paddingBottom: 20 }}>
              <h6>Remarks:</h6>
              <p>{remarks}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 130, paddingRight: 130 }}>
              <h5>ListingID: {AWSoutput.Item.ListingID.N}</h5>
              <h5>TimeStamp: {AWSoutput.Item.TimeStamp.S}</h5>
            </div>
            {Mode === 'aws' && (
              <div className="mb-2" style={{ display: 'flex', justifyContent: 'center' }}>
                <MyDataGrid data={AWSoutput}/> 
              </div>
            )}
            {Mode === 'openai' && (
              <div className="mb-2" style={{ display: 'flex', justifyContent: 'center' }}>
                <OAIDataGrid data={OAIoutput}/>
              </div>
            )}
          </div>
        )}
    </div>;
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

      <div>
        <input
          type="radio"
          id="aws-radio"
          name="service"
          value="aws"
          className="me-2"
          checked={Mode === 'aws'}
          onChange={handleRadioChange}
        />
        <label htmlFor="aws-radio">AWS</label>
        <input
          type="radio"
          id="openai-radio"
          name="service"
          value="openai"
          className="ms-4 me-2"
          checked={Mode === 'openai'}
          onChange={handleRadioChange}
        />
        <label htmlFor="openai-radio">OpenAI</label>
      </div>

      {error ? (
        <h4 style={{ margin: 20}}>Something went wrong</h4>
      ) : (
        renderResult()
      )}

      {/* {AWSoutput && OAIoutput && (
          <div>
            <div style={{ width: '80%', margin: '0 auto', paddingTop: 20, paddingBottom: 20 }}>
              <h6>Remarks:</h6>
              <p>{remarks}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 130, paddingRight: 130 }}>
              <h5>ListingID: {AWSoutput.Item.ListingID.N}</h5>
              <h5>TimeStamp: {AWSoutput.Item.TimeStamp.S}</h5>
            </div>
            {Mode === 'aws' && (
              <div className="mb-2" style={{ display: 'flex', justifyContent: 'center' }}>
                <MyDataGrid data={AWSoutput}/> 
              </div>
            )}
            {Mode === 'openai' && (
              <div className="mb-2" style={{ display: 'flex', justifyContent: 'center' }}>
                <OAIDataGrid data={OAIoutput}/>
              </div>
            )}
          </div>
        )} */}

      <div style={{ marginTop: 10}}>
        <button className="btn btn-info me-2" onClick={handleClick}>Search</button>
        <button className="btn btn-secondary" onClick={cleanUp}>Clean</button>
      </div>
    </div>
  );
}

export default SearchResult