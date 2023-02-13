import styled from 'styled-components';
import p from 'icons/plus.svg';
import HeartButton from 'components/common/HeartButton';

// const C = styled.div`
//   float: left;
//   margin-left: 28px;
//   width: 222px;
//   height: 254px;
//   margin-top: 22px;
//   background: blue;
// `;
const CardImage = styled.img`
  width: 384px;
  height: 180px;
  position: relative;
  border-radius: 20px;
  z-index: -1;
`;
const Cardbox = styled.div`
  float: left;
  border-radius: 20px;
  width: 384px;
  height: 384px;
  border-radius: 20px;
  margin-bottom: 4px;
  background-color: green;
  border: 1px solid #77aefc;
  margin-left: 10px;

  //transparent 투명
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

  font-family: 'Roboto';
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
  width: 0px;
  height: 0px;
`;
const Cardname = styled.div`
  float: left;
  width: 222px;
  height: 18px;
  font-family: 'Roboto';
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
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  color: #595959;
`;

const SecondPlace = () => {
  // const { } = item1;
  const formPlaceOne = [
    {
      id: 1,
      imageSrc: require('../images/exhibition.jpg'),
    },
    { id: 2, imageSrc: require('../images/musical.webp') },
  ];
  return (
    <>
      <Cardbox>
        <Cardtitle>ssssssssss</Cardtitle>
        <CardImage
        // img
        // // src={firstimage}
        // alt="http://api.visitkorea.or.kr/openapi/service/rest/EngService/areaBasedList?ServiceKey=F1LcZ87c0l9gGNr9E%2BajujQ00xwYZ59b%2FQx5pgzcWJQIrKyyiAII7gOSAJsz99GhLsCTGLUQ2xpdoqxEC3FY7g%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=TestApp&_type=json"
        ></CardImage>
        {/* <HeartButton like={like} onClick={toggleLike}/> */}
      </Cardbox>
    </>
  );
};

export default SecondPlace;
