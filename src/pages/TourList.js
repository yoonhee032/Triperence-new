import { useState, useEffect } from 'react';
import styled from 'styled-components';
import TourItem from './TourItem';
import axios from 'axios';
import Map from 'components/map/map';
import Mapmodalper from 'components/common/mapmodalper';
import Categories from 'components/categoriescom/Categories';
import ManageEvents from 'components/Container';
import MapModal from 'components/common/mapmodal';

const Box = styled.div`
  float: left;
  padding: 0px;
  width: 28.95vw;
  height: 675px;
`;
// const CardPlace = styled.div`
//   overflow-y: auto;
//   float: left;
//   padding: 10px;
//   width: 28.5vw;
//   height: 850px;
// `;

const CardPlace = styled.div`
  overflow-y: auto;
  float: left;
  padding: 10px;
  width: 28.5vw;
  height: 850px;
  &::-webkit-scrollbar {
    width: 12px;
    height: 10px;
    border-radius: 6px;
    background: #d1d1d1;
  }
  &::-webkit-scrollbar-thumb {
    width: 10px;
    background: #77aefc;
    border-radius: 6px;
  }
`;

const TourListBlock = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const TourList = ({ category, accomparam, restaurparam, cat2param }) => {
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //async 를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? 'all' : `${category}`;
        const response = await axios.get(`http://localhost:8080/places/category=${query}`, {
          params: {
            accom: accomparam,
            restaur: restaurparam,
            cat2: cat2param,
          },
        });
        setPlace(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    fetchData();
  }, [category]);

  if (loading) {
  }
  //아직 item 값이 설정되지 않았을 때
  if (!place) {
    return null;
  }
  //item 값이 유효할 때
  return (
    <>
      <Box>
        <CardPlace>
          {place.map((place) => (
            <TourItem key={place.contentid} place={place} />
          ))}
        </CardPlace>
      </Box>
      <Map place={place} />
    </>
  );
};

export default TourList;
