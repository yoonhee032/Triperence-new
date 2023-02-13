// import React, { Component, useState } from "react";
// import { Link } from "react-router-dom";
// import SecondHeader from "../Header/secondHeader";
// import "./checkout.css";
// import Button from "../common/Button";

// const CheckLayout = () =>  {
//     const [values, setValues] = useState({
//         gender: "",
//         age: "",
//     });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//     };

//     const onChange = (e) => {
//         setValues({ ...values, [e.target.name]: e.target.value });
//     };

//     const showData = () => {
//         console.log("value:", values);
//     };

//     return (
//         <div>
//             <SecondHeader/>

//             <div className="check-wr">
//                 <form onSubmit={handleSubmit}>
//                     <label> Where do you like to stay?</label>
//                     <span className="boderSpan"></span>
//                 <Link to="/">
//                     <Button onClick={showData}>Finish!-></Button>
//                 </Link>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default CheckLayout;
