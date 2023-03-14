import { useState } from 'react';

const Post = () => {
  const [message, setMessage] = useState('');
  const [ListingID, setListingID] = useState('');
  const [AC, setAC] = useState(null);
  const [Basement, setBasement] = useState(null);
  const [BathsFull, setBathsFull] = useState(null);
  const [BathsHalf, setBathsHalf] = useState(null);
  const [Remarks, setRemarks] = useState('');


  const cleanUp = () => {
    setMessage('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('ListingID:', ListingID);
    console.log(typeof(ListingID));
    console.log('AC:', AC);
    console.log(typeof(AC));
    console.log('Basement:', Basement);
    console.log(typeof(Basement));
    console.log('BathsFull:', BathsFull);
    console.log(typeof(BathsFull));
    console.log('Remarks:', Remarks);
    console.log(typeof(Remarks));
    setListingID('');
    setRemarks('');
    try {
      const response = await fetch(`https://lnfppvwcta.execute-api.us-east-1.amazonaws.com/v1/invoke`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ListingID: parseInt(ListingID), Remarks: Remarks})
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
      <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
              <label htmlFor="ListingID" className="me-2">ListingID</label>
              <input
                  id="ListingID"
                  type="text"
                  value={ListingID}
                  onChange={(e) => setListingID(e.target.value)}
              />
          </div>
          <div className="col-md-6">
              <label htmlFor="AC" className="me-2">AC</label>
              <input
                  id="AC"
                  type="text"
                  value={AC}
                  onChange={(e) => setAC(e.target.value)}
              />
          </div>
          <div className="col-md-6">
              <label htmlFor="Basement" className="me-2">Basement</label>
              <input
                  id="Basement"
                  type="text"
                  value={Basement}
                  onChange={(e) => setBasement(e.target.value)}
              />
          </div>
          <div className="col-md-6">
              <label htmlFor="BathsFull" className="me-2">BathsFull</label>
              <input
                  id="BathsFull"
                  type="text"
                  value={BathsFull}
                  onChange={(e) => setBathsFull(e.target.value)}
              />
          </div>
          <div className="col-md-6">
              <label htmlFor="Remarks" className="me-2">Remarks</label>
              <textarea
                  id="Remarks"
                  value={Remarks}
                  onChange={(e) => setRemarks(e.target.value)}
              />
          </div>
          <div className="col-12">
            <button className="btn btn-success me-2" type="submit">Submit</button>
            <button className="btn btn-secondary" onClick={cleanUp}>Clean</button>
          </div>
      </form>
      <p>{message}</p>

    </div>
  );
}

export default Post