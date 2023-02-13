import React, { Component, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SecondHeader from 'components/Header/secondHeader';
import 'components/Pages/surveyFirst.css';
import Button from 'components/common/Button';
import AuthService from '../Header/services/auth.service';
import axios from 'axios';

const SurveyFirst = (props) => {
  let { setCheckArray, pageCount, setPageCount } = props;

  const [values, setValues] = useState([]);
  const [category1, setcategory1] = useState({ allergie: [] });
  const [category2, setcategory2] = useState({ eat: [] });
  const navigate = useNavigate();

  const formtrans = [
    { id: 1, name: 'transportation', value: 'Public transport' },
    { id: 2, name: 'transportation', value: 'Taxi' },
    { id: 3, name: 'transportation', value: 'Rental Cars' },
  ];

  const formstay = [
    { id: 1, name: 'stay', value: 'Hotel' },
    { id: 2, name: 'stay', value: 'Guest House' },
    { id: 3, name: 'stay', value: 'Hanouk' },
  ];

  const formAllergy = [
    { id: 1, name: 'allergie', value: 'Dairy Products' },
    { id: 2, name: 'allergie', value: 'Nuts' },
    { id: 3, name: 'allergie', value: 'Crustacean' },
    { id: 4, name: 'allergie', value: 'Egg' },
    { id: 5, name: 'allergie', value: 'Beans' },
    { id: 6, name: 'allergie', value: 'Wheat' },
    { id: 7, name: 'allergie', value: 'Peanut' },
    { id: 8, name: 'allergie', value: 'Fish' },
    { id: 9, name: 'allergie', value: 'Peach' },
  ];

  const formEat = [
    { id: 1, name: 'eat', value: 'Vegan' },
    { id: 2, name: 'eat', value: 'Halal' },
    { id: 3, name: 'eat', value: 'No Pork' },
    { id: 4, name: 'eat', value: 'No Beef' },
  ];

  const handleClick = () => {
    if (Object.keys(values).length !== 3) {
      alert('설문지를 체크해주세요');
    } else {
      setCheckArray({
        ...values,
        [Object.keys(category1)]: Object.values(category1.allergie),
        [Object.keys(category2)]: Object.values(category2.eat),
      });
      setPageCount(pageCount + 1);
    }
  };

  //일반 체크
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //중복 체크 Array 함수
  let onCheckedElement = (checked, item, name) => {
    if (checked) {
      if (name === 'allergie') {
        // setCheckedList([...checkedList, item]);
        setcategory1({ allergie: [...category1.allergie, item] });
      }
      if (name === 'eat') {
        setcategory2({ eat: [...category2.eat, item] });
      }
    } else if (!checked) {
      if (name === 'allergie') {
        setcategory1({ allergie: category1.allergie.filter((el) => el !== item) });
      }
      if (name === 'eat') {
        setcategory2({ eat: category2.eat.filter((el) => el !== item) });
      }
    }
  };

  return (
    <div>
      <SecondHeader />
      <div className="first-survey">
        <form>
          <div className="fi-gabox">
            <div>
              <label className="bd">What kind of transportation do you prefer?</label>
              {formtrans.map((item) => (
                <label key={item.id} className="fi-map">
                  <input type="radio" name={item.name} value={item.value} onChange={onChange} />
                  <div>{item.value}</div>
                </label>
              ))}
              <span className="boderSpan"></span>
            </div>
            <div>
              <label className="bd-s"> Where do you like to stay?</label>
              <label className="bd-m">*Hanouk: Traditional korean styled house</label>
              {formstay.map((item) => (
                <label key={item.id} className="fi-map">
                  <input
                    type="radio"
                    name={item.name}
                    value={item.value}
                    onChange={onChange}
                  ></input>
                  <div>{item.value}</div>
                </label>
              ))}
            </div>
            <span className="boderSpan"></span>
            <div>
              <label className="bd-s"> Are you allergic to food?</label>
              <label className="bd-m">
                *If you do not have an item, you do not need to select it.
              </label>
              {formAllergy.map((item) => (
                <label key={item.id} className="fi-map">
                  <input
                    type="checkbox"
                    name={item.name}
                    value={item.value}
                    onChange={(e) => {
                      onCheckedElement(e.target.checked, e.target.value, item.name);
                    }}
                  />
                  <div>{item.value}</div>
                </label>
              ))}
            </div>
            <span className="boderSpan"></span>
            <div>
              <label className="bd-s">What do you eat?</label>
              <label className="bd-m">
                *If you do not have an item, you do not need to select it.
              </label>
              {formEat.map((item) => (
                <label key={item.id} className="fi-s">
                  <input
                    type="checkbox"
                    name={item.name}
                    value={item.value}
                    onChange={(e) => {
                      onCheckedElement(e.target.checked, e.target.value, item.name);
                    }}
                  />
                  <div>{item.value}</div>
                </label>
              ))}
            </div>
            <span className="boderSpan"></span>
            <div>
              <label className="bd">What is you preferred destination?</label>
              <label className="des1">
                <input onChange={onChange} type="radio" name="destination" value="city"></input>
                <div>City</div>
              </label>
              <label className="des2">
                <input onChange={onChange} type="radio" name="destination" value="nature"></input>
                <div>Nature</div>
              </label>
            </div>
          </div>
          <span className="boderSpan"></span>
          <div className="fsbtn">
            <Button type="button" onClick={handleClick}>
              {' '}
              Next{' '}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SurveyFirst;
