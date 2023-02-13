import styled from 'styled-components';
import p from 'icons/plus.svg';
import { Link } from 'react-router-dom';
import HeartButton from 'components/common/HeartButton';
import { useState, useEffect } from 'react';

const Heart = styled.div`
  width: 100px;
  position: absolute;
  top: -5px;
  right: 5px;
`;

const C = styled.div`
  float: left;
  margin-left: -4px;
  width: 21vw;
  margin-top: 20px;
  /* margin-bottom: 10px;
  background: blue; */
  position: relative;
`;
const CardImage = styled.img`
  width: 378px;
  height: 215px;
  position: relative;
  border-radius: 20px;
  z-index: -1;
  /* background: red; */
  top: -220px;
`;
const Cardbox = styled.div`
  float: left;
  position: relative;
  border-radius: 20px;
  width: 378px;
  height: 215px;
  /* background-color: green; */
  /* border: 1px solid #77aefc; */
  margin-left: 10px;
  /* display: flex; */
  z-index: 5;

  //transparent 투명
`;
const H = styled.div`
  float: left;
  border-radius: 20px;
  width: 222px;
  height: 197px;
  margin-bottom: 20px;
`;
const Cardtitle = styled.div`
  float: left;
  margin-left: 10px;
  margin-right: 80px;
  margin-top: 12px;
  width: 132px;
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
  width: 339px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  color: white;
  margin-top: 136px;
  margin-left: 10px;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  line-height: 1.2;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const Cardclass = styled.div`
  float: left;
  width: 222px;
  font-family: 'Pretendard';
  font-weight: 50;
  font-size: 16px;
  color: #999999;
`;

const PlaceOne = ( props ) => {
  const { title, addr1, cat1, cat2, tel, firstimage, contentid, areacode } = props.place;
  const typename = props.name ;
  const [value, setValue] = useState(['null']);

  console.log('타입네임', typename);


  return (
    <div className="contents">
      <C>
          <Cardbox>
            <Heart>
              <HeartButton contentid={contentid} />
            </Heart>
            <Link to="/detail" state={{ contentid }}>
            <H> 
              <Cardtitle>
                {areacode === 1
                  ? 'Seoul'
                  : areacode === 2
                  ? 'Incheon'
                  : areacode === 3
                  ? 'Daejeon'
                  : areacode === 4
                  ? 'Daegu'
                  : areacode === 5
                  ? 'Gwangju'
                  : areacode === 6
                  ? 'Busan'
                  : areacode === 7
                  ? 'Ulsan'
                  : areacode === 8
                  ? 'Sejong'
                  : areacode === 31
                  ? 'Gyeonggi'
                  : areacode === 32
                  ? 'Gangwon'
                  : areacode === 33
                  ? 'Chungbuk'
                  : areacode === 34
                  ? 'Chungnam'
                  : areacode === 35
                  ? 'Gyeongbuk'
                  : areacode === 36
                  ? 'GyeongNam'
                  : areacode === 37
                  ? 'JeonBuk'
                  : areacode === 38
                  ? 'Jeonnam'
                  : 'Jeju'}
              </Cardtitle>
              <Cardname>{title}</Cardname>
            </H>
            {/* <Cardname>{title}</Cardname> */}
            <CardImage img src={firstimage}></CardImage>
            {/* <Cardname>{title}</Cardname> */}
            </Link>
          </Cardbox>
      </C>
    </div>

  );
};

export default PlaceOne;
