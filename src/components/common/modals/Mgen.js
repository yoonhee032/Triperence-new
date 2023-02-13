import styled from "styled-components";
import lll from "../../../icons/x.svg";
import React from "react";
import "components/common/Modal.css";

const Mgen = (props) => {
    const handleClose = () => {
        props.onClose?.();
    };
return (
    <>
        <CloseButton onClick={handleClose}>

        </CloseButton>
        <Contents>
        <div className="Mtitle">{props.value}  Change</div>
<div className="gender">

    <label>
        <input onChange={onchange} style={{display:'none'}} value="Male" type="radio" name="gender"/>
        <div style={{marginLeft:"-36px"}}>Male </div>
    </label>
    <label>
        <input onChange={onchange} style={{display:'none'}} value="Male" type="radio" name="gender"/>
        <div style={{marginLeft:"24px", marginRight:"24px"}}>Female </div>
    </label>
    <label>
        <input  onChange={onchange} style={{display:'none'}} value="Male" type="radio" name="gender"/>
        <div style={{}}>Other</div>
    </label>
</div>
    <Button onClick={handleClose}>닫혀라 모달!</Button>
        </Contents>
    </>

)
};

const Contents = styled.div`
  margin: 50px 30px;

  h1 {
    font-size: 30px;
    font-weight: 600;
    matgin-bottom: 60px;
  }
`;


const CloseButton = styled.div`
  float: right;
  width: 21px;
  height: 22px;

  margin: 20px;
  cursor: pointer;
  background-image: url(${lll});
  background-repeat: no-repeat;
    background-size: contain;

`;
const Button = styled.div`
  font-size: 14px;
text-align : center;
  background-color: #ababab;
  border-radiusc: 10px;
  color: white;
  cursor: pointer;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 45px;

  color: #FFFFFF;
margin 40px auto;
width: 384px;
height: 48px;

background: #77AEFC;
border-radius: 30px;

`;

export default Mgen;