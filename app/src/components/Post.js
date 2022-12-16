import { useState } from 'react';

const Post = () => {

  const [ListingID, setListingID] = useState('');
  const [Remarks, setRemarks] = useState('');
  const [message, setMessage] = useState('');

  const cleanUp = () => {
    setMessage('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('ListingID:', ListingID);
    console.log('Remarks:', Remarks);
    setListingID('');
    setRemarks('');
    try {
      const response = await fetch(`https://lnfppvwcta.execute-api.us-east-1.amazonaws.com/v1/invoke`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ListingID: ListingID, Remarks: Remarks})
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log('result is: ', JSON.stringify(result, null, 4));

      console.log(JSON.stringify(result))

      setMessage(JSON.stringify(result))

    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
      <h2>Post</h2>
      <form onSubmit={handleSubmit}>
          <div className="mb-3">
              <label htmlFor="ListingID" className="me-2">ListingID</label>
              <input
                  id="ListingID"
                  type="text"
                  value={ListingID}
                  onChange={(e) => setListingID(e.target.value)}
              />
          </div>
          <div className="mb-3">
              <label htmlFor="Remarks" className="me-2">Remarks</label>
              <textarea
                  id="Remarks"
                  value={Remarks}
                  onChange={(e) => setRemarks(e.target.value)}
              />
          </div>
          <button className="btn btn-success me-2" type="submit">Submit</button>
          <button className="btn btn-secondary" onClick={cleanUp}>Clean</button>
      </form>
      <p>{message}</p>

    </div>
  );
}

export default Post