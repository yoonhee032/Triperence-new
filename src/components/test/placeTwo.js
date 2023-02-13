import styled from 'styled-components';
import p from 'icons/plus.svg';
import { Link } from 'react-router-dom';
import HeartButton from 'components/common/HeartButton';
import { useState, useEffect } from 'react';

const Heart = styled.div`
  width: 100px;
  position: absolute;
  top: 50px;
  right: -45px;
`;

const C = styled.div`
  //전체 큰 틀
  align-items: center;
  margin-left: 10px;
  margin-right: 65px;
  width: 222px;
  margin-bottom: 24px;
  position: relative;
  /* display: flex; */
`;
const CardImage = styled.img`
  position: relative;
  width: 282px;
  height: 282px;
  border-radius: 20px;
  z-index: -1;
  top: -200px;
`;
const Cardbox = styled.div`
  float: left;
  position: relative;
  border-radius: 20px;
  width: 265px;
  height: 265px;
  border-radius: 20px;
  margin-bottom: 4px;
  background-color: transparent;
  background-color: black;
  z-index: 5;
`;
const H = styled.div`
  float: left;
  border-radius: 20px;
  width: 240px;
  height: 197px;
`;
const Cardtitle = styled.div`
  float: left;
  z-index: -1;
  margin-left: 10px;
  margin-right: 80px;
  margin-top: 12px;
  width: 10px;
  height: 26px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  text-align: center;
  line-height: 25px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  color: #222222;
  word-break: break-all;
`;

const Cardname = styled.div`
  float: left;
  width: 240px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  color: #222222;
  margin-top: 8px;
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

const PlaceTwo = ({ place }) => {
  const { title, addr1, cat3 ,cat1, tel, firstimage, contentid, areacode } = place;

  console.log('캣쓰리', cat3);
  return (
    <div className="contents">
    
    <C>
      <Heart>
        <HeartButton contentid={contentid} />
      </Heart>
      <Link to="/detail" state={{ contentid }}>
        <Cardbox>
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
          </H>
          <CardImage img src={firstimage} onerror="this.src='images/default.jpg'"></CardImage>
        </Cardbox>
        <Cardname>{title}</Cardname>
      </Link>
    </C>
    </div>
  );
};

export default PlaceTwo;
