import Layout from "../components/layout/Layout";
import AdvocatesElement from "./Advocates/AdvocatesElement.jsx";
import "./Css/advocates.css";
import { useEffect, useState } from "react";
import axios from "axios";
<<<<<<< HEAD
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/auth.jsx";

const Advocates = () => {
  const navigate = useNavigate();
  const [auth] = useAuth();
  useEffect(()=>{
    if(!auth.user){
      navigate('/login')
    }
  },[])
=======
import {useParams} from "react-router-dom";

const Advocates = () => {
>>>>>>> origin
  const params = useParams();
  const [advocates, setAdvocates] = useState([]);
  const [location, setLocation] = useState(null);

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }
  
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    lawyersNearby(location.latitude, location.longitude);
    // console.log(Latitude: ${latitude}, Longitude: ${longitude});
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  const lawyersNearby = async (latitude,longitude) => {
    try {
<<<<<<< HEAD
      const response = await axios.post("https://nyai-jr54.onrender.com/api/v1/lawyersNearby",
=======
      const response = await axios.post("http://localhost:7000/api/v1/lawyersNearby",
>>>>>>> origin
          {"coordinates": {
            latitude,
            longitude
          }}
      );
       setAdvocates(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  handleLocationClick();
<<<<<<< HEAD
  // useEffect(()=>{
  //   console.log(params)
  // })
=======
  useEffect(()=>{
    console.log(params)
  })
>>>>>>> origin
  return (
    <Layout title={"NyAi - Advocates"}>
      <div className="advocates container-fluid">
        
        <div className="firstDiv">
          <p className="p">
            <b>Advocates </b>
            Nearby You With 
            <b>
              <span style={{ color: "#EB934F" }}> Ny</span>AI
            </b>
          </p>
          <h4 style={{ color: "rgba(71,119,105,0.6)" }}>Empowering voices, championing justice – advocating for you.</h4>
        </div>

          {/* <p>{JSON.stringify(advocates)}</p> */}
        <div className="elements row">
          {advocates.map((data) => (
            <div className="advocateElements col-5"  key={data.position}>
              <AdvocatesElement
                img={data.thumbnail}
                title={data.title}
                phone={data.phone}
                // email={data.email}
                address={data.address}
                types={data.types.slice(0,3)}
                rating={data.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Advocates;
