// import { useEffect } from "react";
import Images from "../../assets/Images";
import Layout from "../../components/layout/Layout.jsx";
import "../Css/CardRegisterView.css"
import { useNavigate } from "react-router-dom";
// import { Personal,CardRegister } from "./cardRegister.jsx";

const CardRegisterView = () => {
    const navigate = useNavigate();

  const pager = (card)=>{
    if(card===1){
        navigate("/register/1");
    }else{
        navigate("/register/2");
    }
  }

  return (
    <Layout>
        <div style={{width:"100vw",height: "70vh",display: "flex",justifyContent: "center",alignItems: "center"}}>
      <div className="validationDiv">
        <h1 className="title text-dark">Validation </h1>
        <div className="validation">
          <img src={Images.panCard} alt="pan" onClick={() => pager(1)} />
          <b style={{ fontSize: "24px" }}>---or---</b>
          <img
            src={Images.voterId}
            alt="voterId"
            onClick={() => pager(2)}
          />
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default CardRegisterView;
