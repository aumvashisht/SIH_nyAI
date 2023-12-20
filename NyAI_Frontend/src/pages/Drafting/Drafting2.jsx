import { useState } from "react";
import Layout from "../../components/layout/Layout.jsx";
import "../css/Drafting2.css";
import { useNavigate, useParams } from "react-router-dom";
import { First, Second } from "../MultistepperForm/Form.jsx";
// import axios from "axios";


// this if for samples
import {RentAggrement} from "../SampleHtml/RentAggrement.jsx";
import {CounsumerCourtComplaint} from "../SampleHtml/CounsumerCourtComplaint.jsx"

const Drafting2 = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const [formData, setFormData] = useState({
    date: "",
    name: "",
    fatherName: "",
    address: "",
    rentAmount: "",
    proposedCompany: "",
    directorName: "",
    property: "",
    period: "",
    rentDate: "",
    aggrementPlace: "",
    aggrementDate: "",
    witness1: "",
    witness2: "",
  });

  const sampleComponent = ()=>{
    switch(params.id){
      case "1": return(<RentAggrement formData={formData} />);
      case "2": return(<CounsumerCourtComplaint formData={formData} />);
      default: return(<RentAggrement/>)
    }
  }

  const component = () => {
    switch (page) {
      case 1:
        return (
          <First
            page={page}
            setPage={setPage}
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            onChange={onChange}
          />
        );
      case 2:
        return (
          <Second
            page={page}
            setPage={setPage}
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            onChange={onChange}
          />
        );
      default:
        return (
          <First
            page={page}
            setPage={setPage}
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            onChange={onChange}
          />
        );
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data= formData
      localStorage.setItem("Details", JSON.stringify(data) );
      navigate(`/drafting/upload/${params.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"Drafting-2"}>
      <div className="drafting2 container-sm">
        <div className="row  d-md-flex flex-md-row flex-column-reverse">
          <div className="col sampleDiv pe-5">
            {sampleComponent()}
          </div>

          <div className="col mb-5 wid">
                <h2 className="h2">Give Details :-</h2>
                {component()}
              </div>
            </div>
          </div>
    </Layout>
  );
};

export default Drafting2;
