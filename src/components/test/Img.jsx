import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SecondHeader from 'components/Header/secondHeader';
import 'components/Pages/testShow.css';
import styled from 'styled-components';
import CustomButton from '../common/CustomButton';

const MyB = styled.button`
  border: 1px solid #77aefc;
  color: #77aefc;
  border-radius: 30px;
  width: 150px;
  background: none;
  text-align: center;
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 1200px) {
    .MyB {
      font-size: 10px;
    }
  }
`;

const character = [
  {
    id: 1,
    name: 'choa',
    value: 'Choa who loves Korean culture!',
    type: 'K-Culture',
    category: 'Entertainment',
    imageSrc: require('images/character/choa.jpg'),
  },
  {
    id: 2,
    name: 'MIR',
    value: 'Mir who loves Korea history!',
    type: 'K-History',
    category: 'History',
    imageSrc: require('images/character/mir.jpg'),
  },
  {
    id: 3,
    name: 'HIMCHAN',
    value: 'Himchan who loves taking photos!',
    type: 'Photo/Film',
    category: 'Photo Spot',
    imageSrc: require('images/character/himchan.jpg'),
  },
  {
    id: 4,
    name: 'PUREUM',
    value: 'Pureum who loves Korean Nature!',
    type: 'K-Nature',
    category: 'Natures',
    imageSrc: require('images/character/pureum.jpg'),
  },
  {
    id: 5,
    name: 'SODAM',
    value: 'Sodam who loves Korean culture',
    type: 'K-Food',
    category: 'Food',
    imageSrc: require('images/character/sodam.jpg'),
  },
  {
    id: 6,
    name: 'NORI',
    value: 'Nori who loves Korean entertainments!',
    type: 'K-entertain',
    category: 'Like Festial',
    imageSrc: require('images/character/nori.jpg'),
  },
];

const Img = (props) => {
  return (
    <div>
      {character
        .filter((data) => data.category === props.aboutUser.category)
        .map((data) => (
          <div className="card__container">
            <div className="cards__wrapper">
              <label className="text"> Dear.{data.name}</label>
              <label className="text">
                <div>
                  You are <span>{data.value}</span>
                </div>
              </label>
              <img src={data.imageSrc} />
              <MyB>{data.type}Lover</MyB>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Img;
