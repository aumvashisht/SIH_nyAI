import Layout from "../components/layout/Layout"
import "./Css/aboutUs.css"
import Images from "../assets/Images";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import { useEffect } from "react";
=======
>>>>>>> origin

const AboutUs = () => {
  const navigate = useNavigate();
  const [auth] = useAuth();
  useEffect(()=>{
    if(!auth.user){
      navigate('/login')
    }
  },[]);
  return (
    <Layout title={"NyAi - About Us"}>
      <div className="About">
        <div className="choose">
          <h1><b>About NyAI</b></h1>
          <h4 className="heading">The leading publisher of do-it-yourself legal documents, forms, and contracts.</h4>
        </div>

        <div>
<<<<<<< HEAD
          <img className="img00" src={Images.bannerImg} alt="BannerImg.png" />
=======
          <img className="img" src={Images.bannerImg} alt="BannerImg.png" />
>>>>>>> origin
          <h4 className="heading">Welcome to nyAI, where legal simplicity meets technological innovation. We are Courtroom Cartel, proud grand finalists of the esteemed Smart India Hackathon 2023 (SIH 2023).</h4>
        </div>

        <div className="heading02"><h2><b>Our Vision</b></h2></div>

        <div className="choose">
        <div className="row">
          <div className="col">
          <img className="img01" src={Images.vision} alt="Vision.jpg"/>
          </div>

          <div className="col">
            <p>
            Nyai is revolutionizing how legal documents are understood. Our mission is to simplify complex legal jargon, providing user-friendly documents for individuals and businesses. We've reimagined legal content for everyone's comprehension, emphasizing accessibility and inclusivity. Our goal is to bridge the gap between law and everyday life, empowering through knowledge and understanding.
            </p>
            <p>
            Nyai breaks through legal barriers by simplifying document access, eliminating jargon and complexities. Our passionate team of legal experts translates legalese into plain language, turning complexity into clarity and uncertainty into confidence. Whether it's a rental agreement or business contract, we prioritize simplicity without sacrificing accuracy. Through technology and human expertise, Nyai transforms legal comprehension, ensuring it's not just accessible but truly understandable for all.            </p>
            <p>
            Nyai goes beyond simplifying legal documents; it's about empowering informed decision-making for everyone. We envision a world where legal understanding is accessible to all, not just experts. Through meticulously simplified documents, we enable confident navigation of legalities. Our commitment to transparency and simplicity fosters a community where legal literacy thrives, allowing individuals to make informed choices. This dedication ensures a more equitable and accessible legal landscape for all.            </p>
            </div>
          </div>
        </div>

        <div className="heading03"><h2><b>Meet Our Team</b></h2></div>

          <div className="choose">
          <div className="row">
            <div className="col">
            <img className="img01" src={Images.team} alt="Vision.jpg"/>
            </div>

            <div className="col">
              <p>
              <b>Team Leader: Alankar Dutta</b><br/>
                Leading the charge with a vision for accessible legal solutions.<br/>
                <br/>
              <b>Team Members:</b><br/>
                  1. Aum Vashisht<br/>
                  2. Shruti Singh<br/>
                  3. Sidharth Bhardwaj<br/>
                  4. Pallavi Sinha<br/>
                  5. Vedant Arora<br/>
                  <br/>
                  All six of us hail from Maharaja Surajmal Institute of Technology (MSIT) in Janakpuri, New Delhi. Currently, we're in our third year, pursuing degrees in Electronics and Communication Engineering (ECE).
                  <br/>
                  As grand finalists at SIH 2023, we embarked on a mission to revolutionize legal documentation for individuals and small businesses in India.
              </p>
            </div>
            </div>
      <div className="heading03"><h2><b>Our Commitment</b></h2></div>

      <div><h4 className="head">At Courtroom Cartel, we are committed to simplifying legal processes through technology, making legal resources accessible to all. nyAI is our testament to the belief that legal solutions should be clear, efficient, and within reach.<br/>
      <br/>Join Nyai on this transformative journey where legal empowerment meets simplicity. Together, let's redefine the way legal documents are perceived, understood, and utilized to pave the way for a more accessible and inclusive future.</h4></div>
      </div>
      <img src={Images.join} alt="Vision.jpg"/>
      <div><h4>We have a variety of popular legal documents for you to choose from.<br/>
            Find what you need and get started.</h4></div>
      </div>       
    </Layout>
  )
}

export default AboutUs