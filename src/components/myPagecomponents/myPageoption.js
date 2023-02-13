import React from "react"
import styled from "styled-components"
import AuthService from "../Header/services/auth.service";
const SS = styled.div`
width:336px;
height:50px;
margin-left: 24px;
margin-bottom: 24px;
line-height: 2vw;
font-family: 'Pretendard';
font-style: normal;
font-weight: 700;
font-size: 20px;
color: #222222;
`
export default class MyPageoption extends React.Component {
    render() {
        return (               
                <SS>
                    <img style={{float:'left', marginRight:'15px'}} src={require("icons/defaultprofile.svg").default} alt=""/>
                    <div>
                    {AuthService.getCurrentUser().nickname}
                    </div>
                </SS>
            
            
        )
    }

}
