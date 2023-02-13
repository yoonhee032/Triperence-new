import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'components/Pages/test.css';
import Img from 'components/test/Img';
import TourItem from 'components/common/place';
import NewCarou from 'components/common/newCarou';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const B = styled.button`
  width: 18vw;
  height: 3vw;

  margin-top: 3vw;
  margin-bottom: 1.25vw;

  background: #77aefc;
  border-radius: 30px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 2.604166666666667vw;

  text-align: center;

  color: #ffffff;
`;

function HimachnShow() {
  return (
    <div>
      <Img />
      <div className="wrap-t">
        <div className="carousel">
          <h1>Place</h1>
          {/* <Carousel /> */}
          <NewCarou />
          <h1>Place</h1>
          <TourItem />
          <div className="wrap-b">
            <Link to="/">
              <B>Recommended Trip Place</B>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HimachnShow;
