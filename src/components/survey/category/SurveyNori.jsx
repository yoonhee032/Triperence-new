import React, { Component, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SecondHeader from 'components/Header/secondHeader';
import 'components/Pages/surveyFirst.css';
import Button from 'components/common/Button';
import CustomButton from 'components/common/CustomButton';
import axios from 'axios';

const SurveyNori = (props) => {
  let { checkArray, setCheckArray, pageCount, setPageCount } = props;

  const [values, setValues] = useState([]);

  const formPlaceOne = [
    {
      id: 1,
      name: 'placeOne',
      value: 'Sight',
      imageSrc: require('../../../images/exhibition.jpg'),
    },
    {
      id: 2,
      name: 'placeOne',
      value: 'Hearing',
      imageSrc: require('../../../images/musical.webp'),
    },
  ];

  const formPlaceTwo = [
    {
      id: 1,
      name: 'placeTwo',
      value: 'Dynamic',
      imageSrc: require('../../../images/festival.jpg'),
    },
    {
      id: 2,
      name: 'placeTwo',
      value: 'Static',
      imageSrc: require('../../../images/theater.jpg'),
    },
  ];

  //일반 체크
  const onChange = (e) => {
    setCheckArray({ ...checkArray, [e.target.name]: e.target.value });
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (Object.keys(values).length !== 2) {
      alert('설문지를 체크해주세요');
    } else {
      setPageCount(pageCount + 1);
    }
  };

  console.log('놀이 취향 : ', values);

  return (
    <div>
      <SecondHeader />
      <div className="testChoa">
        <form>
          <div className="new-gabox">
            <div>
              <label className="bd">Which sense do you prefer when you experience?</label>
              {formPlaceOne.map((item) => (
                <label key={item.id} className="nori-map">
                  <input type="radio" name={item.name} value={item.value} onChange={onChange} />
                  <div>
                    {<img src={item.imageSrc} />}
                    {item.value}
                  </div>
                </label>
              ))}
              <span className="boderSpan"></span>
            </div>
          </div>

          <div className="new-gabox">
            <div>
              <label className="bd">Which type do you prefer when you spend free time?</label>
              {formPlaceTwo.map((item) => (
                <label key={item.id} className="nori-map">
                  <input type="radio" name={item.name} value={item.value} onChange={onChange} />
                  <div>
                    {<img src={item.imageSrc} />}
                    {item.value}
                  </div>
                </label>
              ))}
            </div>
          </div>
          <span className="boderSpan"></span>
          <div className="fsbtn">
            <Button type="button" onClick={handleClick}>
              Finish
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SurveyNori;
