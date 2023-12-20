import jsPDF from "jspdf";
import Layout from "../../components/layout/Layout";
import { CounsumerCourtComplaint } from "../SampleHtml/CounsumerCourtComplaint";
import { RentAggrement } from "../SampleHtml/rentAggrement";
import "../css/Drafting3.css";
import { useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import { useState } from "react";
import html2pdf from "html-to-pdf-js";
// import Tooltip from "../../components/Tooltip"

const Drafting3 = () => {
  const params = useParams();
  const localData = JSON.parse(localStorage.getItem("Details"));
  const [loader, setLoader] = useState(false);

  // const downloadPDF = ()=>{
  //   const capture = document.querySelector('.sampleComponents');
  //   setLoader(true);
  //   html2canvas(capture).then((canvas)=>{
  //     const imgData = canvas.toDataURL('img/png');
  //     const doc = new jsPDF('p', 'mm', 'a4');
  //     const componentWidth = doc.internal.pageSize.getWidth();
  //     const componentHeight = doc.internal.pageSize.getHeight();
  //     doc.addImage(imgData, 'PNG', 0,0,componentWidth,componentHeight);
  //     setLoader(false);
  //     doc.save('document.pdf');
  //   })
  // }

  const downloadPDF = () => {
    setLoader(true);
    const element = document.getElementById("sampleComponents");
    html2pdf(element);
    setLoader(false);
  };

  const sampleComponent = () => {
    switch (params.id) {
      case "1":
        return <RentAggrement formData={localData} />;
      case "2":
        return <CounsumerCourtComplaint formData={localData} />;
    }
  };
  return (
    <Layout title={"Drafting-3"}>
      <div className="drafting3 container-md">
        <div className="row">
          <div className="col-7 sampleDiv pe-3 d-flex flex-column">
            <h1 className="text-center mb-3">GENERATED DOCUMENT</h1>
            <div
              className="sampleComponents"
              id="sampleComponents"
              style={{ width: "100%", height: "100%" }}
            >
              {sampleComponent()}
            </div>
          </div>
          <div className="col-5 buttons d-flex flex-column">
            <div className="">
              To Download this Generated Document
              <br />
              Click Here
              <button onClick={downloadPDF} disabled={!(loader === false)}>
                {loader ? "Downloading" : "Download"}
              </button>
            </div>
            <div className="">
              For more detailed Simplification of this Generated Document .
              <br />
              Click Here
              <button>Download</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Drafting3;
