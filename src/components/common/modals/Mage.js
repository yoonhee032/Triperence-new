import React from "react";
import styled from "styled-components";
import lll from "../../../icons/x.svg";
import "components/common/Modal.css";

const Mage = (props) => {
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
                <input onChange={onchange} style={{display:'none'}} value="20" type="radio" name="age"/>
                <div style={{marginLeft:"-16px", marginRight:"12px",width:'78px'}}>Male </div>
            </label>
            <label>
                <input onChange={onchange} style={{display:'none'}} value="30" type="radio" name="age"/>
                <div style={{ width:'78px'}}>Male </div>
            </label>
            <label>
                <input onChange={onchange} style={{display:'none'}} value="40" type="radio" name="age"/>
                <div style={{marginLeft:"12px", width:'78px'}}>Female </div>
            </label>
            <label>
                <input  onChange={onchange} style={{ display:'none'}} value="50" type="radio" name="age"/>
                <div style={{marginLeft:"12px",width:'78px'}}>Other</div>
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


export default Mage;