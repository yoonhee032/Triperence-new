import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import 'components/Pages/detail.css';
import palette from '../../lib/styles/palette';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const D = styled.button`
  width: 156px;
  height: 48px;
  margin-top:24px;
  border: 1px solid #77aefc;
  border-radius: 30px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  background: #ffffff;
  text-align: center;
  color: #77aefc;
  margin-left: 24px;
  &:hover {
    background: #ffffff;
  }
`;
const R = styled.div`
width: 17.5vw;
  height: 2.5vw;
  margin-left: 1.25vw;

  margin-top: 1.875vw;
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
`
const L = styled.div`
  float: bottom;
  z-index: 10;
  padding-top:12px;
  padding-bottom:36px;
  position: sticky;
  box-sizing: border-box;

  border-radius: 30px;
  @media (max-width: 1200px) {
    .B {
      display: none;
    }
  }
  width: 20vw;
  height: 10vw;

  left: 1176px;

  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 2;
`;
const B = styled.div`
  float: bottom;
  z-index: 10;
  height: 0px;
  position: sticky;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    .B {
      display: none;
    }
  }

  left: 1176px;

  ${`top: calc(100vh - 460px);`}
`;

const Box = ({place}) => {
  return (
    <B>
      <L>
        <a className="homepagebtn" dangerouslySetInnerHTML={{ __html: place.homepage }}></a>
        <CopyToClipboard text={place.title}>
          <a href="https://www.google.co.kr/maps" target="_blank">
            <D>Directions</D>
          </a>
        </CopyToClipboard>
        <Link to="/">
          <D>Call</D>
        </Link>
      </L>
    </B>
  );
};

export default Box;
