import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PlaceOne from 'components/test/placeOne';
import NewCarou from 'components/test/newCarou';
import axios from 'axios';
import Map from 'components/map/map';
import Categories from 'components/categoriescom/Categories';
import ManageEvents from 'components/Container';

const Box = styled.div`
  padding: 0px;
  width: 63vw;
  height: 400px;
`;
const CardPlace = styled.div`
  overflow: auto;
  float: left;
  width: 60vw;
  height: 0px;
  display: flex;
  text-align: center; //안에 글씨 센터
`; //리스트 틀

const TourListBlock = styled.div`
  @media screen and (max-width: 1920px) {
    width: 30%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const DIV = styled.div`
  z-index: 100;
`;
const CarouList = ({ place }) => {
  const { title, addr1, cat2, tel, firstimage, contentid, areacode } = place;

  console.log('이건 캐로우에 플레이스', place);


  return <div>{ cat2 === 'K0101' ? <NewCarou place={place} />: ''}</div>;
};

export default CarouList;
