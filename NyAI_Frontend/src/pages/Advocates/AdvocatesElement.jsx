import "../Css/AdvocatesElement.css";

const advocatesElement = (props) => {
  const { img,title,address,phone,types ,rating} = props;

  console.log(img, title, address, phone,types);

  return (
    <div className="advocateElement">
        <center><h5 className="pt-md-2 pb-md-4"><b>{title}</b></h5></center>
        <div className="row">
      <div className="col-7">
        <img className="ps-md-2" src={img} alt="img1.png" />
        {/* <div>{email}</div> */}
      </div>
      <div className="col-5 d-flex flex-column justify-content-between">
       <div>
        <h5><b>Types of Cases: </b></h5>
        <ul>
          {types.map((sk)=>(<li key={sk}>{sk}</li>))}
        </ul>
        </div> 
      </div>
      <div className="ps-md-5 pt-md-3">
        <h5><b>Details: </b></h5>
        <div className="phone">Ratings: {rating}</div>
        <div className="phone">Phone Number: {phone}</div>
        <div className="phone">Address: {address}</div>
      </div>
      </div>
    </div>
  );
};

export default advocatesElement;