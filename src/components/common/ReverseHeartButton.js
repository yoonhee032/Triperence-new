import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HeartImg from 'icons/heart.svg';
import EmptyHeartImg from 'icons/EmptyHeart.svg';
import axios from 'axios';

import AuthService from '../services/auth.service';

const currentUser = AuthService.getCurrentUser();

// const EmptyHeart = styled.img`
//   float: right;
//   width: 38px;
//   height: 31px;
//   margin-right: 20px;
//   margin-bottom: 20px;

//   background-image: url(${EmptyHeartImg});
//   background-repeat: no-repeat;
//   background-size: contain;
// `;

const Heart = styled.img`
    height: 31px;
    position: absolute;
    top: 178px;
    z-index: 6;
    right: 10px;

  /* background-image: url(${HeartImg});
  background-repeat: no-repeat;
  background-size: contain; */
`;

const HeartButton = ( {contentid} ) => {
  const [isLikes, setIsLikes] = useState(false);
  const [LikesCount, setLikesCount] = useState(100);

  const isLikesHandler = () => {
    setIsLikes(!isLikes); //클릭시 상태 변환
    if (isLikes) {
      setLikesCount(LikesCount + 1);
      axios({
        url: '/places/likes',
        method: 'post',
        data: {
          "user_id": currentUser.id,
          "like_cno" : contentid,
        },
        baseURL: 'http://localhost:8080',
      })
      console.log(currentUser.id);
      console.log(contentid);
      console.log('찜기능');

    } else if(!isLikes) {
      setLikesCount(LikesCount - 1);
      axios({
        url: '/places/likes/delete',
        method: 'delete',
        data: {
          "user_id": currentUser.id,
          "like_cno" : contentid,
        },
        baseURL: 'http://localhost:8080',
      })
      console.log('찜해제');
    }
  };

  return <Heart name="heart" src={isLikes ? EmptyHeartImg : HeartImg} onClick={isLikesHandler}></Heart>;
};

// const Heart = styled.img`
//   float: right;
//   margin-right: 12px;
// `;

// const HeartButton = () => {};

export default HeartButton;
