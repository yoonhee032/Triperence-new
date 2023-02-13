import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PlaceOne from 'components/test/placeOne';
import PlaceTwo from 'components/test/placeTwo';
import NewCarou from 'components/test/newCarou';
import axios from 'axios';
import Map from 'components/map/map';
import Categories from 'components/categoriescom/Categories';
import ManageEvents from 'components/Container';

const titlebox = styled.div`
  display: iflex;
  margin-bottom: 20px;
`;



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
const NoLoginList = ({ place }) => {
  const { title, addr1, cat2, cat3, tel, firstimage, contentid, areacode } = place;

  console.log('이건 플레이스 리스트', cat2);
  console.log('쓰리', cat3);


  return (
    <div>
      {cat2 === 'A0201' ? (
        <>
          <PlaceOne place={place} />
        </>
      ) : cat2 === 'A0207' ? (
          <PlaceOne place={place} />
      )  : '' }
    </div>
  );

  // ------------------힘찬------------------
  return (
    <div>
      {cat3 === 'A05020900' ? (
        <>
          <PlaceOne place={place} />
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default NoLoginList;
