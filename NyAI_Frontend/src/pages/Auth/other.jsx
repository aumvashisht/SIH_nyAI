// import { useEffect, useState } from "react";
// import Images from "../../assets/Images.jsx";
// import CardRegi from "./PanCard.jsx";

// const Regis = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     phone: "",
//     address: "",
//     answer: "",
//     idNumber: "",
//   });
//   const [cardId,setCardId] = useState(0);

// const pager = ()=>{
//   switch(cardId){
//     case 1:return <CardRegi cardId={cardId} name= "Pan Card" idType="panCard" formData={formData} setFormData={setFormData}/>
//     case 2:return <CardRegi cardId={cardId} name= "VoterID Card" idType="voterId" formData={formData} setFormData={setFormData}/>
//     default: return <CardRegi cardId={cardId} name= "Pan Card" formData={formData} setFormData={setFormData}/>
//   }
// }

// useEffect(()=>{
//   pager();
//   //eslint-disable-next-line
// },[cardId])


// return (
//   <div className="form-container">
//       <h1 className="title text-dark">Validation </h1>
//       <div className="form">
//         <img src={Images.panCard} alt="pan" onClick={setCardId(1)}/>
//         <b style={{fontSize: "24px"}}>---or---</b>
//         <img src={Images.aadhar} alt="aadhar" onClick={setCardId(2)}/>
//       </div>
//     </div>
//   );
// };

// export default Regis;



import { Layout } from "antd"

const CardRegi = ({cardId, name}) => {
  const handleValidate = async () => {
    try {
      const response = await axios.post('https://adjoining-fantastic-grass.glitch.me/validate-id', {
        idType,
        idNumber,
      });

      setResult(response.data);
    } catch (error) {
      setResult({ error: 'Error validating ID.'});
}};

  return (
    <Layout>
      <center><h1>{name}</h1></center>
      <form>
        <label>Card Number</label>
        <input type="text" name="idNumber"/>
        <button>Submit</button>
      </form>
    </Layout>
  )
}

export default CardRegi
