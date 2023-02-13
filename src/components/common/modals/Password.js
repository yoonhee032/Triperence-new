import { useState } from "react";
import styled from "styled-components";
import lll from "../../../icons/x.svg";
import React from "react";


const Password = (props) => {
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
<Input type="text" placeholder = "Current Password"/>
                    <Input  type="text" placeholder = "Set Password"/>
                    <Input type="text" placeholder = "Confirm Password"/>

                </div>
                <Button onClick={handleClose}>닫혀라 모달!</Button>
            </Contents>
        </>

    )
};

const Input = styled.input`

width: 384px;
margin-left:-100px;

background: #FFFFFF;
border: 1px solid #D8D8D8;
border-radius: 4px;
font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;

color: #D5D5D5;
`
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
margin-top:150px;
width: 384px;
height: 48px;

background: #77AEFC;
border-radius: 30px;

`;
export default Password;