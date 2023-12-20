import Layout from "../components/layout/Layout";
import "./Css/Drafting.css";
import Images from "../assets/Images";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../context/auth";

const Drafting = () => {
  const navigate = useNavigate();
  const [auth] = useAuth();
  useEffect(()=>{
    if(!auth.user){
      navigate('/login')
    }
  },[]);
  return (
    <Layout title={"NyAi - Drafting"}>
      <div className="Drafting">
        <div className="firstDiv">
          <p className="p">
            <b>Build documents</b>
            <br />
            that speak your
            <br />
            language with{" "}
            <b>
              <span style={{ color: "#EB934F" }}>Ny</span>AI
            </b>
          </p>
          <h4>All your document needs, all in one place</h4>
        </div>
        <div className="imgBox">
          <img src={Images.progress} alt="Progress.png" />
        </div>
      </div>

      <div className="choice">
        <div className="row">
          <div className="col SecDiv">
            <h2>
              <b>Create Document</b>
            </h2>
            <p>
              Craft legally sound documents effortlessly with our intuitive
              platform. Tailor agreements and legal paperwork to your
              specifications with ease and precision. Create professional-grade
              documents that meet your exact needs in just a few clicks.
            </p>
            <button className="btn btn-warning">
              <NavLink className={"link"} to={"/drafting/browse"}>Browse Template</NavLink>
            </button>
          </div>

          <div className="col">
            <h2>
              <b>Simplify Document</b>
            </h2>
            <p>
              Simplify complex legal jargon into clear, understandable language.
              Our service streamlines intricate documents, making them
              accessible and easy to comprehend for all parties involved.
              Experience the clarity of simplified legal documents.
            </p>
            <button className="btn btn-warning"><NavLink className={"link"} to={"/drafting/upload"}>Upload File</NavLink></button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Drafting;
