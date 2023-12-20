import { NavLink } from "react-router-dom";

const First = ({ page, setPage, setFormData, formData,onChange }) => {
    const {date,name,fatherName, address,proposedCompany} = formData
  const handleSubmit=(e) =>{
    console.log()
    setPage(page + 1);
  }

  return (
    <div className="container-fluid">
    <form>
        <label>Date</label>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            name="date"
            id="date"
            value={date}
            onChange={onChange}
            required
          />
        </div>

        <label>Name</label>
        <div className="mb-3">
          <input
            type="name"
            className="form-control"
            name="name"
            id="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>

        <label>Father Name</label>
        <div className="mb-3">
          <input
            type="fatherName"
            className="form-control"
            name="fatherName"
            id="fatherName"
            value={fatherName}
            onChange={onChange}
            required
          />
        </div>  
        <label>Address</label>
        <div className="mb-3">
          <input
            type="address"
            className="form-control"
            name="address"
            id="address"
            value={address}
            onChange={onChange}
            required
          />
        </div>
        <label>Name of the proposed Company</label>
        <div className="mb-3">
          <input
            type="proposedCompany"
            className="form-control"
            name="proposedCompany"
            id="proposedCompany"
            value={proposedCompany}
            onChange={onChange}
            required
          />
        </div>
      
      <div className="d-flex">

      {page > 1 && <button onClick={() => setPage(page - 1)}>Back</button>}
      <button
        className="btn btn-primary mt-3"
        style={{textAlign: 'center',width: "50%",height: "auto",borderRadius: "30px",fontSize: "24px", fontWeight: "800",  backgroundColor: "#477769", color: "white"}}
        onClick={handleSubmit}
        >
        {page === 1 ? "Next" : "Generate Document"}
      </button>
        </div>
    </form>
    </div>
  );
};


const Second = ({ page, setPage, handleSubmit, formData, setFormData, onChange }) => {
  const { directorName, property, rentAmount, period, rentDate, aggrementDate,aggrementPlace ,witness1,witness2 } = formData;

  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmit}>
        <label>Name fo Director</label>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="directorName"
            id="directorName"
            value={directorName}
            onChange={onChange}
            required
            />
        </div>
            <label>Property Number</label>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="property"
            id="property"
            value={property}
            onChange={onChange}
            placeholder="Example- 2049420848734,S-434 Alaknanda
              Road, Alaknand, Kalkaji Tehsil, Delhi, 110019"
            required
            />
        </div>

            <label>Rent Amount</label>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="rentAmount"
            id="rentAmount"
            value={rentAmount}
            onChange={onChange}
            placeholder="Example-Rs. Fifteen Thousand"
            required
            />
        </div>

            <label>Time Period</label>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="period"
            id="period"
            value={period}
            onChange={onChange}
            required
            />
        </div>

            <label>Date of Rent Commencing from</label>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            name="rentDate"
            id="rentDate"
            value={rentDate}
            onChange={onChange}
            required
            />
        </div>

            <label>Place of Agreement</label>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="aggrementPlace"
            id="aggrementPlace"
            value={aggrementPlace}
            onChange={onChange}
            required
            />
        </div>

            <label>Date of Rent Agreement</label>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            name="aggrementDate"
            id="aggrementDate"
            value={aggrementDate}
            onChange={onChange}
            required
          />
        </div>

          <label>First Witness Name</label>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="witness1"
            id="witness1"
            value={witness1}
            onChange={onChange}
            required
          />
        </div>

          <label>Second Witness Name</label>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="witness2"
            id="witness2"
            value={witness2}
            onChange={onChange}
            required
          />
        </div>

        <div className="row">
          <button
            type="submit"
            className="btn btn-primary mt-2 col-md-6"
            // onClick={handleSubmit}
            >
            {page === 1 ? "Next" : "Generate Document"}
          </button>
            {page > 1 && (
              <NavLink
                className="link"
                style={{textDecoration: "none"}}
                onClick={() => setPage(page - 1)}
              >
                Back
              </NavLink>
            )}
        </div>
      </form>
    </div>
  );
};

First.PropTypes
export { First, Second };