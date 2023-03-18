import { useState } from 'react';

const Post = () => {
  const [message, setMessage] = useState('');
  const [ListingID, setListingID] = useState('');
  const [AC, setAC] = useState(null);
  const [Basement, setBasement] = useState(null);
  const [BathsFull, setBathsFull] = useState(null);
  const [BathsHalf, setBathsHalf] = useState(null);
  const [Beds, setBeds] = useState(null);
  const [City, setCity] = useState(null);
  const [CityID, setCityID] = useState(null);
  const [CountyID, setCountyID] = useState(null);
  const [CurrentPrice, setCurrentPrice] = useState(null);
  const [DoNotDisplayFlags, setDoNotDisplayFlags] = useState(null);
  const [ElementarySchoolRating, setElementarySchoolRating] = useState(null);
  const [Elevator, setElevator] = useState(null);
  const [Fireplaces, setFireplaces] = useState(null);
  // const [ForSale, setForSale] = useState(false);
  const [Heating, setHeating] = useState(null);
  const [Remarks, setRemarks] = useState('');

  // modal
  const [showModal, setShowModal] = useState(false);

  const stateVariables = [ setListingID,  setAC,  setBasement,  setBathsFull,  setBathsHalf,  
    setBeds,  setCity,  setCityID,  setCountyID,  setCurrentPrice,  setDoNotDisplayFlags,  
    setElementarySchoolRating,  setElevator,  setFireplaces,  setHeating,  setRemarks
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
    console.log('AC:', AC);
    console.log(typeof(AC));
    console.log('Basement:', Basement);
    console.log(typeof(Basement));
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
          AC: AC, 
          Basement: Basement,
          BathsFull: BathsFull,
          BathsHalf: BathsHalf,
          Beds: Beds,
          City: City,
          CityID: CityID,
          CountyID: CountyID,
          CurrentPrice: CurrentPrice,
          DoNotDisplayFlags: DoNotDisplayFlags,
          ElementarySchoolRating: ElementarySchoolRating,
          Elevator: Elevator,
          Fireplaces: Fireplaces,
          // ForSale: ForSale,
          Heating: Heating,
          Remarks: Remarks
        })
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log('result is: ', JSON.stringify(result, null, 4));

      console.log(JSON.stringify(result))

      setMessage(JSON.stringify(result))

      setShowModal(true);

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
              <label htmlFor="BathsHalf" className="me-2">BathsHalf</label>
              <input
                  id="BathsHalf"
                  type="text"
                  value={BathsHalf}
                  onChange={(e) => setBathsHalf(e.target.value)}
              />
          </div> 
          <div className="col-md-6">
              <label htmlFor="Beds" className="me-2">Beds</label>
              <input
                  id="Beds"
                  type="text"
                  value={Beds}
                  onChange={(e) => setBeds(e.target.value)}
              />
          </div>  
          <div className="col-md-6">
              <label htmlFor="City" className="me-2">City</label>
              <input
                  id="City"
                  type="text"
                  value={City}
                  onChange={(e) => setCity(e.target.value)}
              />
          </div>
          <div className="col-md-6">
              <label htmlFor="CityID" className="me-2">CityID</label>
              <input
                  id="CityID"
                  type="text"
                  value={CityID}
                  onChange={(e) => setCityID(e.target.value)}
              />
          </div>
          <div className="col-md-6">
              <label htmlFor="CountyID" className="me-2">CountyID</label>
              <input
                  id="CountyID"
                  type="text"
                  value={CountyID}
                  onChange={(e) => setCountyID(e.target.value)}
              />
          </div>
          <div className="col-md-6">
              <label htmlFor="CurrentPrice" className="me-2">CurrentPrice</label>
              <input
                  id="CurrentPrice"
                  type="text"
                  value={CurrentPrice}
                  onChange={(e) => setCurrentPrice(e.target.value)}
              />
          </div>
          <div className="col-md-6">
              <label htmlFor="DoNotDisplayFlags" className="me-2">DoNotDisplayFlags</label>
              <input
                  id="DoNotDisplayFlags"
                  type="text"
                  value={DoNotDisplayFlags}
                  onChange={(e) => setDoNotDisplayFlags(e.target.value)}
              />
          </div>
          <div className="col-md-6">
              <label htmlFor="ElementarySchoolRating" className="me-2">ElementarySchoolRating</label>
              <input
                  id="ElementarySchoolRating"
                  type="text"
                  value={ElementarySchoolRating}
                  onChange={(e) => setElementarySchoolRating(e.target.value)}
              />
          </div>
          <div className="col-md-6">
            <label htmlFor="Elevator" className="me-2">Elevator</label>
            <input
                id="Elevator"
                type="text"
                value={Elevator}
                onChange={(e) => setElevator(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="Fireplaces" className="me-2">Fireplaces</label>
            <input
                id="Fireplaces"
                type="text"
                value={Fireplaces}
                onChange={(e) => setFireplaces(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="Heating" className="me-2">Heating</label>
            <input
                id="Heating"
                type="text"
                value={Heating}
                onChange={(e) => setHeating(e.target.value)}
            />
          </div>
          <div className="col-md-12">
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