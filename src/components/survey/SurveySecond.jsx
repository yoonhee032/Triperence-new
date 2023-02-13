import React, { Component, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SecondHeader from 'components/Header/secondHeader';
import 'components/Pages/surveyTwo.css';
import Button from 'components/common/Button';
import axios from 'axios';
import { data } from 'browserslist';
import ShowResult from '../../pages/showResult';
import Img from 'components/test/Img';

const SurveyTwo = (props) => {
  let { checkArray, setCheckArray, pageCount, setPageCount } = props;

  const [categoryValues, setCategoryValue] = useState('null');

  const category = [
    { id: 1, name: 'category', value: 'Entertainment', add: 'K-POP, K-DRAMA, K-MOVIE' },
    { id: 2, name: 'category', value: 'History', add: '' },
    { id: 3, name: 'category', value: 'Natures', add: '' },
    { id: 4, name: 'category', value: 'Food', add: '' },
    { id: 5, name: 'category', value: 'Like Festival', add: 'Pub, Club, Shopping' },
    { id: 6, name: 'category', value: 'Photo Spot', add: '' },
  ];

  console.log('왜 안나올까', categoryValues);

  const handleClick = () => {
    if (categoryValues === 'null') {
      alert('설문지를 체크해주세요');
    } else {
      setCheckArray({
        ...checkArray,
        category: categoryValues,
      });
      setPageCount(pageCount + 1);
    }
  };

  const onChange = (e) => {
    setCategoryValue(e.target.value);
  };

  return (
    <div>
      <SecondHeader />
      <div className="second-survey">
        <form>
          <div className="gabox">
            <div>
              <label className="s-label">
                What do you think most important thing when you visit Korea?
              </label>
              {/* <p>{param}</p> */}
              {category.map((item) => (
                <label key={item.id} className="se-map">
                  <input
                    type="radio"
                    name={item.name}
                    value={item.value}
                    test={item.id}
                    onChange={onChange}
                  />
                  <div>
                    {item.value}
                    {item.add}
                  </div>
                </label>
              ))}
              <span className="boderSpan"></span>
            </div>
          </div>
          <div className="fsbtn">
            <Button type="button" onClick={handleClick}>
              Next
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SurveyTwo;
