import { useState } from "react";
import toast from "react-hot-toast";
import axios from "../../context/axios.jsx";
import { useNavigate } from "react-router-dom";
import "../Css/AuthStyle.css";
import Layout from "../../components/layout/Layout.jsx";

const ForgotPassword = () => {

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/api/v1/auth/forgot-password`, {
        email,
        newPassword,
        answer
      });
      if (res && res.data.success) {
        toast.success(res.data.message,{duration: 3000});
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somethind went wrong",{duration: 3000});
    }
  };

  return (
    <Layout title={"NyAI - Forgot Password"}>
        <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1 className="title text-dark">Forgot Password</h1>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              required
            />
          </div>
          
          <div className="mb-3">
            <input
              type="answer"
              className="form-control"
              id="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Enter your favorite Sport Name"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="newPassword"
              className="form-control"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter Your Password"
              required
            />
          </div>
            
          <button type="submit" className="btn btn-success" onSubmit={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
        </Layout>
  )
}

export default ForgotPassword;