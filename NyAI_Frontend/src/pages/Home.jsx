import "./Css/Home.css";
import Layout from "../components/layout/Layout.jsx";
import Images from "../assets/Images.jsx";
import Chatbot from "../components/layout/Chatbot";
<<<<<<< HEAD
=======

>>>>>>> origin

const Home = () => {
  return (
    <Layout title={"NyAi - Home"}>
      <div className="homeSlide">
        <img className="blob" src={Images.blob} alt="blob" />
        <img className="humanTech" src={Images.human} alt="Technology-Human" />
        <p className="p">
          <b>Guiding You </b>through
          <br />
          legal complexities with{" "}
          <b>
            <span style={{ color: "#EB934F" }}>Ny</span>AI
          </b>
        </p>
        <div>
          <center><p className="p2">Your AI-powered legal companion</p></center>
          <button to={"/drafting"} className="btn started_btn btn-warning">Get Started</button>
        </div>
      </div>

      {/* ----------------------------------------------other section on home page------------------------------------------- */}
      <div className="expert">
        <h1>
          <span style={{ color: "#EB934f" }}>Expert reviews,</span> Nearby
          Advisors
        </h1>
        <h2>Anytime, Anywhere</h2>
        <div className="container-md mt-5">
          <div className="card p-2 greenCard">
            <img
              src={Images.farmer2}
              alt="farmer2"
              style={{ position: "absolute", right: "-30px", top: "-50px" }}
            />
            <img src={Images.banner} className="card-img-top" alt="banner" />
            <div className="card-body">
              <h5 className="card-title pb-2">Multilingual support</h5>
              <p className="card-text ms-3">
                NyAI is available in 20+ officially recognized Indian languages.
              </p>
            </div>
            <img
              src={Images.farmer}
              alt="farmer"
              style={{ position: "absolute", bottom: "5px", left: "-60px" }}
            />
          </div>

          <div className="card p-2 orangeCard">
            <div className="card-img-top d-flex ">
              <img
                src={Images.digiLocker}
                className="mb-5 firstImg"
                alt="digiLocker"
              />
              <img src={Images.aadhar} className="mt-5 firstImg" alt="aadhar" />
            </div>
            <div className="card-body">
              <h5 className="card-title pb-2">Multilingual support</h5>
              <p className="card-text">
                NyAI is available in 20+ officially recognized Indian languages.
              </p>
            </div>
          </div>

          <div className="circleDiv">
            <span
              className="circle"
              style={{ backgroundColor: "#477769", left: "200px" }}
            ></span>
            <span
              className="circle"
              style={{ backgroundColor: "#eb934f", right: "200px" }}
            ></span>
          </div>

          <div className="card p-2 greenCard">
            <img
              src={Images.lawyer2}
              alt="lawyer2"
              style={{ position: "absolute", bottom: "-20px", left: "2px" }}
            />
            <img
              src={Images.lawyer1}
              alt="lawyer1"
              style={{ position: "absolute", top: "-60px", right: "-60px" }}
            />
            <img src={Images.lawyer} className="card-img-top" alt="lawyer" />
            <div className="card-body">
              <h5 className="card-title pb-2">
                Legal Expert
                <br /> Feedback
              </h5>
              <p className="card-text">
                Your legal compass from draft to counsel – expert-verified
                documents and local legal resources at your fingertips.
              </p>
            </div>
          </div>

          <div className="card p-2 orangeCard">
            <img
              src={Images.obligation}
              className="card-img-top"
              alt="obligation"
            />
            <div className="card-body">
              <h5 className="card-title pb-2">Zero-cost aid</h5>
              <p className="card-text">
                Where excellence meets affordability – superior AI-legal
                services, always complimentary
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------other section on home page------------------------------------------- */}
      <div className="unveiled">
        <h1>
          <span style={{ color: "#EB934f" }}>Ny</span>AI Unveiled :{" "}
          <span style={{ color: "#EB934f" }}>A Legal Odyssey</span>
        </h1>
        <h2>Unveiling the Journey from input to</h2>
        <h2>Verified Document</h2>

        <div className="unveiledBox container">
          <div className="row">
            <div className="col">
              <h2>
                <span style={{ backgroundColor: "#477769" }}>01</span>User Input
              </h2>
              <p>
                The Jaurney begins by selecting the document you want to
                generate. This includes entering your personal details and
                relevent information to the document
              </p>
            </div>
            <div className="col">
              <img src={Images.unveiled1} alt="1unveiled.jpeg" />
            </div>
          </div>

          <img
            src={Images.arrow1}
            alt="arrow1"
            style={{
              position: "relative",
              top: "-50px",
              marginBottom: "-40px",
            }}
          />

          <div className="row">
            <div className="col">
              <img src={Images.unveiled2} alt="unveiled2.jpeg" />
            </div>
            <div className="col">
              <h2>
                <span style={{ backgroundColor: "#eb934f" }}>02</span>
                AI-processing
              </h2>
              <p>
                The Jaurney begins by selecting the document you want to
                generate. This includes entering your personal details and
                relevent information to the document
              </p>
            </div>
          </div>

          <img
            src={Images.arrow2}
            alt="arrow2"
            style={{
              position: "relative",
              top: "-120px",
              marginBottom: "-180px",
            }}
          />

          <div className="row" style={{ marginTop: "-20px" }}>
            <div className="col">
              <h2>
                <span style={{ backgroundColor: "#477769" }}>03</span>Document
                Generation
              </h2>
              <p>
                The Jaurney begins by selecting the document you want to
                generate. This includes entering your personal details and
                relevent information to the document
              </p>
            </div>
            <div className="col">
              <img src={Images.unveiled3} alt="unveiled3.jpeg" />
            </div>
          </div>

          <img
            src={Images.arrow1}
            alt="arrow1"
            style={{
              position: "relative",
              top: "-45px",
              marginBottom: "-40px",
            }}
          />

          <div className="row">
            <div className="col">
              <img src={Images.unveiled4} alt="unveiled4.jpeg" />
            </div>
            <div className="col">
              <h2>
                <span style={{ backgroundColor: "#eb934f" }}>04</span>Legal
                Expert Verification
              </h2>
              <p>
                The Jaurney begins by selecting the document you want to
                generate. This includes entering your personal details and
                relevent information to the document
              </p>
            </div>
          </div>

          <img
            src={Images.arrow2}
            alt="arrow2"
            style={{
              position: "relative",
              top: "-55px",
              marginBottom: "-50px",
            }}
          />

          <div className="row">
            <div className="col">
              <h2>
                <span style={{ backgroundColor: "#477769" }}>05</span>Legal
                resouces and aide
              </h2>
              <p>
                The Jaurney begins by selecting the document you want to
                generate. This inc3ludes entering your personal details and
                relevent information to the document
              </p>
            </div>
            <div className="col">
              <img src={Images.unveiled5} alt="unveiled5.jpeg" />
            </div>
          </div>
        </div>
      </div>

      <div className="seprater" style={{ marginBottom: "-100px" }}>
        <img src={Images.starSeprater} alt="Seprater" />
      </div>

      {/* ----------------------------------------------other section on home page------------------------------------------- */}
      <div className="assist">
        <p className="p">
          <span style={{ color: "#EB934f" }}>Carry Legal Assistance in </span>
          Your Pocket with the NyAi Mobile App
        </p>
        <img src={Images.mockUp} alt="mokeUp" />
      </div>

      {/* ----------------------------------------------other section on home page------------------------------------------- */}
      <div className="metrics container-fluid">
        <div className="row">
          <h2
            className="col ms-5 d-flex align-self-center"
            style={{ fontWeight: 700, fontSize: "32px" }}
          >
            NyAi's dynamic performance metrics
          </h2>

          <div
            className="col"
            style={{
              borderRight: "5px solid #477769",
              textAlign: "center",
              fontSize: "24px",
              fontWeight: 700,
              color: "black",
            }}
          >
            <div style={{ color: "#477769" }}>
              <span style={{ fontSize: "50px" }}>5</span> Seconds
            </div>
            <div>To generate document</div>
          </div>

          <div
            className="col"
            style={{
              borderRight: "5px solid #477769",
              color: "#EB934f",
              textAlign: "center",
              fontWeight: 700,
              fontSize: "24px",
            }}
          >
            <div style={{ fontSize: "50px" }}>100%</div>
            <div>Cost reduction in legal services</div>
          </div>

          <div
            className="col"
            style={{
              textAlign: "center",
              fontWeight: 700,
              fontSize: "24px",
              color: "black",
            }}
          >
            <div style={{ color: "#477769", fontSize: "50px" }}>90%</div>
            <div>
              Time saved:
              <br />
              <span style={{ fontWeight: 500 }}>On routine tasks</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Chatbot/>
      </div>
    </Layout>
  );
};

export default Home;
