import React, { Component, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SecondHeader from 'components/Header/secondHeader';
import 'components/Pages/surveyFirst.css';
import Button from 'components/common/Button';
import CustomButton from 'components/common/CustomButton';
import axios from 'axios';

const SurveySodam = (props) => {
  let { checkArray, setCheckArray, pageCount, setPageCount } = props;

  const [values, setValues] = useState([]);

  const formFoodOne = [
    {
      id: 1,
      name: 'foodOne',
      value: 'More traditional',
      imageSrc: require('../../../images/bibimbap.jpg'),
    },
    {
      id: 2,
      name: 'foodOne',
      value: 'More casual',
      imageSrc: require('../../../images/bulgogi.jpg'),
    },
  ];

  const formFoodTwo = [
    {
      id: 1,
      name: 'foodTwo',
      value: 'Table with a lot of food',
      imageSrc: require('../../../images/hansang.jpg'),
    },
    {
      id: 2,
      name: 'foodTwo',
      value: 'Table with',
      imageSrc: require('../../../images/gandan.jpg'),
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

  console.log('음식 취향 : ', values);

  return (
    <div>
      <SecondHeader />
      <div className="testSodam">
        <form>
          <div className="new-gabox">
            <div>
              <label className="bd">What kind of food do you want to eat?</label>
              {formFoodOne.map((item) => (
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
              <label className="bd">Which kind of food do you prefer?</label>
              {formFoodTwo.map((item) => (
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

export default SurveySodam;
