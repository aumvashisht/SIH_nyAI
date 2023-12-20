import { useState } from "react";
// import Layout from "../../components/layout/Layout";
import axios from "axios";
import "../Css/CardRegister.css";
import { NavLink } from "react-router-dom";

export const CardRegister = ({page,setPage, title, idtype,idNumber,setIdType,setIdNumber }) => {
  const [result, setResult] = useState("");

  const handleValidate = async (e) => {
    e.preventDefault();
    try {
        setIdType(idtype);
      const response = await axios.post(
        `https://nyai-jr54.onrender.com/validate-id/${idtype}`,
        {
          idType: idtype,
          idNumber,
        }
      );
      setResult(response.data);
      console.log(response.data);
      alert(`${response.data.result===true?`Success : you have successfully login with ${title}`:`Error : Error in login with ${title}`}`);
      setPage(page+1);
    } catch (error) {
      setResult({ error: "Error validating ID." });
    }
  };

  return (
    // <Layout title={`register - ${title}`}>
      <div className="regiDiv">
        <div className="container">
          <form onSubmit={handleValidate}>
            <div className="mb-3">
              <center><label className="text">Enter Your {title} details</label></center>
              <input
                type="text"
                className="form-control"
                name="idNumber"
                id="idNumber"
                value={idNumber}
                onChange={(e)=>setIdNumber(e.target.value)}
                placeholder={`Enter Your ${title} Number`}
                required
              />
            </div>
            <div className="row">
            {page > 1 && <button onClick={() => setPage(page - 1)}>Back</button>}
      <button
        className="btn btn-primary mt-3"
        style={{ width: "100px" }}
        onClick={handleValidate}
      >
        {page === 1 ? "Next" : "Submit"}
      </button>
          </div>
          </form>
        </div>
      </div> 
    // </Layout>
  );
};

export const Personal = ({ page, setPage, handleSubmit, formData, setFormData }) => {
    const { firstName, lastName, email, password, phone, address,answer} = formData;
  
      const onChange = (e)=>{
        const {name, value} = e.target;
        // console.log(...formData) 
        setFormData({...formData,[name]:value});
      }
    return (
      <>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={onChange}
              placeholder="Enter Your First Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={onChange}
              placeholder="Enter Your Last Name"
              required
            />
          </div>
  
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Enter Your Email"
              required
            />
          </div>
  
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              value={password}
              onChange={onChange}
              placeholder="Enter Your Password"
              required
            />
          </div>
  
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              name="phone"
              id="phone"
              value={phone}
              onChange={onChange}
              placeholder="Enter Your Phone No."
              required
            />
          </div>
  
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="address"
              id="address"
              value={address}
              onChange={onChange}
              placeholder="Enter Your Address"
              required
            />
          </div>
  
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="answer"
              id="answer"
              value={answer}
              onChange={onChange}
              placeholder="What is Your Favorite Sports ?"
            />
          </div>
  
          <div className="row">
            <button
              type="submit"
              className="btn btn-primary mt-2 col-md-6"
              // onClick={handleSubmit}
              >
              {page === 1 ? "Next" : "Submit"}
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
      </>
    );
  };
