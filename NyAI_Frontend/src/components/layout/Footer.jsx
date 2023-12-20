import { NavLink } from "react-router-dom";
import Images from "../../assets/Images";
import "../Css/Footer.css";

const footer = () => {
  return (
    <div className="footerBox container-fluid">
<div className="seprater"><img src={Images.starSeprater} alt="Seprater"/></div>
      <div className="raw">
        <div className="logo col-3">
          <NavLink className={"a"} to={"/"}>
            <img src={Images.logo} alt="logo.png" />
          </NavLink>
        </div>
        <div className="col">
          <h4>
            <b>Company</b>
          </h4>
          <div className="element">Home</div>
          <div className="element">Drafting</div>
          <div className="element">Advocates</div>
        </div>
        <div className="col">
          <h4>
            <b>Product</b>
          </h4>
          <div className="element">Features</div>
          <div className="element">FAQ</div>
        </div>
        <div className="col">
          <h4>
            <b>About Us</b>
          </h4>
          <div className="element">Terms</div>
        </div>
      </div>
    </div>
  );
};

export default footer;
