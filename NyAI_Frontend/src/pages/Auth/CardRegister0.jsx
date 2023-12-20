import { useState } from "react";
import { CardRegister, Personal } from "./cardRegister";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Layout from "../../components/layout/Layout";

const CardRegister0 = () => {
    const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const params = useParams();
  console.log(params);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    answer: ""
  });
  const [idType , setIdType] = useState("");
  const [idNumber, setIdNumber] =useState("");

  const component = () => {
    switch (page) {
      case 1:
        return (
          <CardRegister
            page={page}
            setPage={setPage}
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            idtype={`${params.idType === '1' ? "panCard" : "voterId"}`}
            title={`${params.idType === '1'? "Pan Card Details": "VoterID Card Details"}`}
            idType = {idType}
            setIdType = {setIdType}
            setIdNumber={setIdNumber}
            idNumber = {idNumber}
          />
        );
      case 2:
        return (
          <Personal
            page={page}
            setPage={setPage}
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
          />
        );
    }
  };

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        phone,
        address,
        answer,
      } = formData;
      const res = await axios.post(`https://nyai-jr54.onrender.com/api/v1/auth/register`, {
        firstName,
        lastName,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somethind went wrong");
    }
  };
  return (
    <Layout title={"NyAI - Register"}>
    <div className="form-container">
      <h1 className="title text-dark"></h1>
      {component()}
    </div>
    </Layout>
  );
};

export default CardRegister0;
