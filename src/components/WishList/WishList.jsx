import { useState, useEffect } from 'react';
import styled from 'styled-components';
import WishItem from './WishItem';
import axios from 'axios';
import AuthService from '../services/auth.service';

const Box = styled.div`
  float: left;
  padding: 0px;
  width: 28.95vw;
  height: 675px;
`;
const CardPlace = styled.div`
  overflow: auto;
  float: left;
  margin-top: -15px;
  padding: 10px;
  width: 39.8vw;
  height: 470px;
  margin-left: -56px;
`;

const DIV = styled.div`
  z-index: 100;
`;
const currentUser = AuthService.getCurrentUser();

const WishList = () => {
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //async 를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8080/places/likes/list/${currentUser.id}`,
        );
        setPlace(response.data);
        console.log(response.data);
        console.log(currentUser.id);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
  }
  //아직 item 값이 설정되지 않았을 때
  if (!place) {
    return null;
  }
  // item 값이 유효할 때
  return (
    <>
      <DIV>
        <Box>
          <CardPlace>
            {place.map((place) => (
              <WishItem key={place.contentid} place={place} />
            ))}
          </CardPlace>
        </Box>
      </DIV>
    </>
  );
};

export default WishList;
