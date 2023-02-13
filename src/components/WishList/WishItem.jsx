import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReverseHeartButton from 'components/common/ReverseHeartButton';

const C = styled.div`
  float: left;
  margin-left: 20px;
  width: 222px;
  margin-bottom: 24px;
  position: relative;
`;
const CardImage = styled.img`
  position: relative;
  width: 222px;
  height: 222px;
  border-radius: 20px;
  z-index: -1;
  top: -200px;
`;
const Cardbox = styled.div`
  float: left;
  position: relative;
  border-radius: 20px;
  width: 222px;
  height: 222px;
  border-radius: 20px;
  margin-bottom: 4px;
  background-color: transparent;
  z-index: 5;
`;
const H = styled.div`
  float: left;
  border-radius: 20px;
  width: 222px;
  height: 197px;
`;
const Cardtitle = styled.div`
  float: left;
  z-index=-1;
  margin-left: 10px;
  margin-right: 80px;
  margin-top: 12px;
  width: 80px;
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
  width: 222px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
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

const WishItem = ({ place }) => {
  const { title, addr1, cat1, tel, firstimage, contentid, areacode } = place;

  return (
    <div className="contents">
      <C>
        <ReverseHeartButton contentid={contentid} />
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

          {/* <HeartButton like={like} onClick={toggleLike}/> */}
          <Cardclass>
            {cat1 === 'A01'
              ? 'Nauture'
              : cat1 === 'A02'
              ? 'Culture/Art/History'
              : cat1 === 'A03'
              ? 'Leisure/Sports'
              : cat1}
          </Cardclass>
        </Link>
      </C>
    </div>
  );
};

export default WishItem;
