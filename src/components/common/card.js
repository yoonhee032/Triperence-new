import styled from "styled-components";
import p from "icons/plus.svg";


const C = styled.div`
float: left;
margin-left: 28px ;
width: 222px;
height: 254px;
margin-top 22px;
`;

const CardImage = styled.img`
  width: 222px;
  height: 222px;
  position: relative;
  margin-top: -222px;
  border-radius: 20px;
  z-index: -1;
`;
const H = styled.div`
  float: left;
  border-radius: 20px;
  width: 222px;
  height: 197px;
`;
const Cardtitle = styled.div`
  float: left;
  margin-left: 10px;
  margin-right: 80px;
  margin-top: 12px;
  width: 80px;
  height: 26px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  text-align: center;
  line-height: 25px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  color: #161616;
`;

const PP = styled.input`
  background-image: url(${p});
  border-radius: 20px;
  border: 0px none;
  clear: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  float: right;
  margin-right: 10px;
  margin-top: 8px;
  width: 28px;
  height: 28px;
`;

const Cardname = styled.div`
  float: left;
  width: 222px;
  height: 18px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #222222;
  margin-bottom: 4px;
`;
const Cardclass = styled.div`
  float: left;
  width: 222px;
  height: 14px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  color: #595959;
`;

const TourItem = ({  }) => {

    return (
        <C>
            <H>
                <Cardtitle></Cardtitle>
                <PP onClick={() => alert("새발예정")} />
            </H>
            <CardImage
            ></CardImage>

            <Cardname></Cardname>
            <Cardclass></Cardclass>
        </C>
    );
};

export default TourItem;
