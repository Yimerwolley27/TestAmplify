import { useState } from 'react';

const Post = () => {
  const [message, setMessage] = useState('');
  const [ListingID, setListingID] = useState('');
  const [Beds, setBeds] = useState(null);
  const [BathsHalf, setBathsHalf] = useState(null);
  const [BathsFull, setBathsFull] = useState(null);
  const [StreetName, setStreetName] = useState(null);
  const [City, setCity] = useState(null);
  const [State, setState] = useState(null);
  const [Zip, setZip] = useState(null);
  const [CurrentPrice, setCurrentPrice] = useState(null);
  const [Remarks, setRemarks] = useState('');

  // modal
  const [showModal, setShowModal] = useState(false);

  const stateVariables = [ setListingID,  setBeds, setBathsHalf, setBathsFull, setStreetName,
    setCity,  setState,  setZip,  setCurrentPrice, setRemarks
  ];

  const cleanUp = () => {
    setMessage('');
  };

  const resetStateVariables = () => {
    stateVariables.forEach((setState) => setState(''));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('ListingID:', ListingID);
    console.log(typeof(ListingID));
    console.log('BathsFull:', BathsFull);
    console.log(typeof(BathsFull));
    console.log('Remarks:', Remarks);
    console.log(typeof(Remarks));
    
    resetStateVariables();

    try {
      const response = await fetch(`https://lnfppvwcta.execute-api.us-east-1.amazonaws.com/v1/invoke`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ListingID: parseInt(ListingID), 
          Beds: Beds,
          BathsHalf: BathsHalf,
          BathsFull: BathsFull,
          StreetName: StreetName,
          City: City,
          State: State,
          Zip: Zip,
          CurrentPrice: CurrentPrice,
          Remarks: Remarks
        })
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log('result is: ', JSON.stringify(result, null, 4));

      console.log(JSON.stringify(result))
      
      if (result){
        setMessage('message successful')
      }      

      setShowModal(true);

    } catch (error) {
      console.log(error);
      setMessage('message fails')
    }
  };
  
  return (
    <div style={{textAlign: "left"}}>
      <h2>Post</h2>
      <form onSubmit={handleSubmit} className="text-justify">
          <div className="form-group pt-4">
              <label for="ListingID" className="text-justify">ListingID</label>
              <input
                  id="ListingID"
                  type="text"
                  className="form-control"
                  value={ListingID}
                  onChange={(e) => setListingID(e.target.value)}
              />
          </div>
          <div className="form-group pt-4">
              <label for="Beds" className="">Beds</label>
              <input
                  id="Beds"
                  type="text"
                  className="form-control"
                  value={Beds}
                  onChange={(e) => setBeds(e.target.value)}
              />
          </div> 
          <div className="form-group pt-4">
              <label for="BathsHalf" className="">BathsHalf</label>
              <input
                  id="BathsHalf"
                  type="text"
                  className="form-control"
                  value={BathsHalf}
                  onChange={(e) => setBathsHalf(e.target.value)}
              />
          </div>
          <div className="form-group pt-4">
              <label for="BathsFull" className="">BathsFull</label>
              <input
                  id="BathsFull"
                  type="text"
                  className="form-control"
                  value={BathsFull}
                  onChange={(e) => setBathsFull(e.target.value)}
              />
          </div>
          <div className="form-group pt-4">
              <label for="StreetName" className="">StreetName</label>
              <input
                  id="StreetName"
                  type="text"
                  className="form-control"
                  value={StreetName}
                  onChange={(e) => setStreetName(e.target.value)}
              />
          </div>
          <div className="form-group pt-4">
              <label for="City" className="">City</label>
              <input
                  id="City"
                  type="text"
                  className="form-control"
                  value={City}
                  onChange={(e) => setCity(e.target.value)}
              />
          </div>
          <div className="form-group pt-4">
              <label for="State" className="">State</label>
              <input
                  id="State"
                  type="text"
                  className="form-control"
                  value={State}
                  onChange={(e) => setState(e.target.value)}
              />
          </div>
          <div className="form-group pt-4">
              <label for="Zip" className="">Zip</label>
              <input
                  id="Zip"
                  type="text"
                  className="form-control"
                  value={Zip}
                  onChange={(e) => setZip(e.target.value)}
              />
          </div>
          <div className="form-group pt-4">
              <label for="CurrentPrice" className="">CurrentPrice</label>
              <input
                  id="CurrentPrice"
                  type="text"
                  className="form-control"
                  value={CurrentPrice}
                  onChange={(e) => setCurrentPrice(e.target.value)}
              />
          </div>
          <div className="form-group pt-4">
              <label for="Remarks" className="">Remarks</label>
              <textarea
                  id="Remarks"
                  className="form-control"
                  value={Remarks}
                  onChange={(e) => setRemarks(e.target.value)}
              />
          </div>
          <div className="col-12 pt-4">
            <button className="btn btn-success me-2" type="submit">Submit</button>
            <button className="btn btn-secondary" onClick={cleanUp}>Clean</button>
          </div>
      </form>
      {/* <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Post Submitted</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleModalClose}></button>
            </div>
            <div className="modal-body">
              <p>{message}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleModalClose}>Close</button>
            </div>
          </div>
        </div>
      </div> */}
      <p>{message}</p>

    </div>
  );
}

export default Post