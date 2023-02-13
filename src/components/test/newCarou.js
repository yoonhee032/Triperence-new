import React, { Component, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import HeartButton from 'components/common/HeartButton';
import 'components/Pages/newCarou.css';
import './carousel.css';
import SecondPlace from 'pages/secondPlace';
import styled from 'styled-components';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import {
  TiChevronLeftOutline,
  TiChevronRightOutline,
} from 'https://cdn.skypack.dev/react-icons/ti';

const Heart = styled.div`
  width: 100px;
  top: -165px;
  right: 20px;
  position: absolute;
`;

const C = styled.div`
  float: left;
  /* margin-left: -4px; */
  width: 21vw;
  margin-top: 20px;
  /* margin-bottom: 10px;
  background: blue; */
  position: relative;
`;
const CardImage = styled.img`
  width: 378px;
  height: 378px;
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
  height: 378px;
  /* background-color: green; */
  /* border: 1px solid #77aefc; */
  /* margin-left: 10px; */
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
  float: center;
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

const Cardname = styled.div`
  float: left;
  width: 250px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: white;
  margin-top: 289px;
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
// <style component>------------------------------------------------------

function NewCarou() {
  const CARDS = 10;
  const MAX_VISIBILITY = 3;

  // const { title, addr1, cat2, tel, firstimage, contentid, areacode } = place;

  //리스트 안에 들어있는 것들을 빼자


  const Carousel = ({ children }) => {
    const [active, setActive] = useState(2);
    const count = React.Children.count(children);

    return (
      <div className="carousel-a">
        {active > 0 && (
          <div className="nav left slid-btn" onClick={() => setActive((i) => i - 1)}>
            <TiChevronLeftOutline />
          </div>
        )}
        {React.Children.map(children, (child, i) => (
          <div
            className="card-container"
            style={{
              '--active': i === active ? 1 : 0,
              '--offset': (active - i) / 3,
              '--direction': Math.sign(active - i),
              '--abs-offset': Math.abs(active - i) / 3,
              'pointer-events': active === i ? 'auto' : 'none',
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
              display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
            }}
          >
            {child}
          </div>
        ))}
        {active < count - 1 && (
          <div className="nav right slid-btn" onClick={() => setActive((i) => i + 1)}>
            <TiChevronRightOutline />
          </div>
        )}
      </div>
    );
  };

  // const Mmm = ({ areacode }) => (
  //   <>
  //     {areacode === 1
  //       ? 'Seoul'
  //       : areacode === 2
  //       ? 'Incheon'
  //       : areacode === 3
  //       ? 'Daejeon'
  //       : areacode === 4
  //       ? 'Daegu'
  //       : areacode === 5
  //       ? 'Gwangju'
  //       : areacode === 6
  //       ? 'Busan'
  //       : areacode === 7
  //       ? 'Ulsan'
  //       : areacode === 8
  //       ? 'Sejong'
  //       : areacode === 31
  //       ? 'Gyeonggi'
  //       : areacode === 32
  //       ? 'Gangwon'
  //       : areacode === 33
  //       ? 'Chungbuk'
  //       : areacode === 34
  //       ? 'Chungnam'
  //       : areacode === 35
  //       ? 'Gyeongbuk'
  //       : areacode === 36
  //       ? 'GyeongNam'
  //       : areacode === 37
  //       ? 'JeonBuk'
  //       : areacode === 38
  //       ? 'Jeonnam'
  //       : 'Jeju'}
  //   </>
  // );

  // cat3 === 'A02020600'   > 힘찬

  const Card = ({ title, cat2, cat3, firstimage, areacode, contentid }) => (
    <div className="contents">
      {cat2 === 'K0101' ? (
        <C>
          <Cardbox>
            <Heart>
              <HeartButton contentid={contentid} />
            </Heart>
            <Link to="/detail" state={{ contentid }}>
              <H>
                <Cardtitle>
                  {/* <Mmm areacode={areacode} /> */}
                </Cardtitle>
                <Cardname>{title}</Cardname>
              </H>
              <CardImage
                className="slider-img"
                img
                src={firstimage}
                onerror="this.src='images/default.jpg'"
              ></CardImage>
            </Link>
          </Cardbox>
        </C>
      ) : (
        <C>
          <Heart>
            <HeartButton contentid={contentid} />
          </Heart>
          <Cardbox>
            <Link to="/detail" state={{ contentid }}>
              <H>
                <Cardtitle>
                  {/* <Mmm areacode={areacode} /> */}
                </Cardtitle>
                <Cardname>{title}</Cardname>
              </H>
              <CardImage
                className="slider-img"
                img
                src={firstimage}
                onerror="this.src='images/default.jpg'"
              ></CardImage>
            </Link>
          </Cardbox>
        </C>
      )}
    </div>
  );

  return (
    <div className="slider">
      <Carousel>
        {/* {place.map((_, i) => (
          <Card
            title={_.title + (i + 1)}
            firstimage={_.firstimage}
            areacode={_.areacode}
            contentid={_.contentid}
            cat2={_.cat2}
            cat3={_.cat3}
            key={i}
          />
        ))} */}
      </Carousel>
    </div>
  );
}
export default NewCarou;
