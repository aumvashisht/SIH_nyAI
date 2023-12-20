import Layout from "../components/layout/Layout"
import "./Css/Help.css"
import Images from "../assets/Images";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import { useEffect } from "react";
=======
>>>>>>> origin


const Help = () => {
  const navigate = useNavigate();
  const [auth] = useAuth();
  useEffect(()=>{
    if(!auth.user){
      navigate('/login')
    }
  },[]);
  return (
    <Layout title={"NyAI - help"}>
      <div className="FirstDiv"><h1>NyAI Help Center</h1></div>
      <div className="h">
        <h2>
          <b>Frequently Asked Questions</b>
        </h2></div>
      <div className="accordianDiv Help">

        <div className="accordion accordion-flush" id="accordionExample">

          <div className="accordion-item border-bottom border-5" style={{ border: "none" }}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What is NyAI, and how does it work? 
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
              NyAI is a website designed to simplify legal documentation for individuals and small businesses in India. It utilizes AI technology to automatically generate legal documents in plain language, making them easy to understand.
              </div>
            </div>
          </div>

          <div className="accordion-item border-bottom border-5">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How can NyAI help me with legal document creation? 
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
              NyAI uses AI-powered algorithms to draft legal documents based on your specific needs. It simplifies legal jargon, making the documents more accessible to users without legal expertise.
              </div>
            </div>
          </div>

          <div className="accordion-item border-bottom border-5">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What types of legal documents can NyAI help generate? 
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
              NyAI can assist in creating a variety of legal documents, including contracts, agreements, wills, and more. The platform aims to cover a wide range of common legal needs for individuals and small businesses who may not have access to legal resources.
              </div>
            </div>
          </div>

          <div className="accordion-item border-bottom border-5">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Can I customize the generated legal documents? 
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
              Yes, NyAI allows users to customize the generated documents to suit their specific requirements. You can input relevant details to tailor the documents to your unique situation.
              </div>
            </div>
          </div>

          <div className="accordion-item border-bottom border-5">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Is there a text-to-speech option available? 
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
              Yes, NyAI provides a text-to-speech option for users who prefer to listen to the content instead of reading it. This feature enhances accessibility for users with different preferences.
              </div>
            </div>
          </div>

          <div className="accordion-item border-bottom border-5">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                 Are the legal documents created by nyAI legally binding? 
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
              While NyAI aims to simplify legal documentation, it's essential to consult with a legal professional to ensure the documents meet all legal requirements and are binding in the specific jurisdiction which is also provided by NyAI itself.
              </div>
            </div>
          </div>

          <div className="accordion-item border-bottom border-5">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  How can I seek legal advice from an expert through NyAI? 
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                Users can connect with local legal experts through NyAI for more complex legal issues. The platform facilitates communication between users and legal professionals, providing a convenient way to seek guidance.
                </div>
              </div>
            </div>
            
            <div className="accordion-item border-bottom border-5">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                   Is NyAI only available in English?
                </button>
              </h2>
              <div
                id="collapseEight"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                No, NyAI offers multilingual options to cater to a diverse user base. The platform aims to be accessible to individuals who speak different languages across India.
                </div>
              </div>
            </div>
            
            <div className="accordion-item border-bottom border-5">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNine"
                  aria-expanded="false"
                  aria-controls="collapseNine"
                >
                   What impact can nyAI have on individuals and small businesses? 
                </button>
              </h2>
              <div
                id="collapseNine"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                NyAI can significantly save time and reduce errors in legal documentation for users who may not have access to extensive legal resources. It empowers individuals and small businesses by providing a cost-effective and efficient solution for their legal needs.
                </div>
              </div>
            </div>
            
            <div className="accordion-item border-bottom border-5">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTen"
                  aria-expanded="false"
                  aria-controls="collapseTen"
                >
                  What techniques does nyAI use for creating and simplifying legal documents? 
                </button>
              </h2>
              <div
                id="collapseTen"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                NyAI employs advanced natural language processing (NLP) and machine learning algorithms to understand legal content and generate documents in plain language. The platform is continuously updated to improve its accuracy and effectiveness.
                </div>
              </div>
            </div>
        </div>
      </div>

      <div className="h01"><h2>
          <b>Extra help and resources</b>
        </h2></div>

<<<<<<< HEAD
      <center><img className="helpImg" src={Images.help} alt="help.png"/></center>
=======
      <center><img src={Images.help} alt="help.png"/></center>
>>>>>>> origin

      <div className="FinalHead"><h4>We have a variety of popular legal documents for you to choose from.<br/>
            Find what you need and get started.</h4></div>
    </Layout>
  )
}

export default Help;