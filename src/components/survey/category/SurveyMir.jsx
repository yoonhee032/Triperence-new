import React, { Component, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SecondHeader from 'components/Header/secondHeader';
import 'components/Pages/character.css';
import Button from 'components/common/Button';
import axios from 'axios';

const SurveyMir = (props) => {
  let { checkArray, setCheckArray, pageCount, setPageCount } = props;

  const [values, setValues] = useState([]);
  const [historyArray, setHistoryArray] = useState({ historyPlace: [] });

  const formEra = [
    { id: 1, name: 'era', value: 'Three States', add: ' (Goguryeo, Baekje and Silla)' },
    { id: 2, name: 'era', value: 'Joseon Dynasty', add: '' },
    { id: 3, name: 'era', value: 'Modern and present', add: '(after independence)' },
  ];

  const formPlace = [
    {
      id: 1,
      name: 'historyPlace',
      value: 'Palaces / Gates',
      imageSrc: require('../../../images/palace.jpg'),
    },
    {
      id: 2,
      name: 'historyPlace',
      value: 'Museums',
      imageSrc: require('../../../images/museum.jpg'),
    },
    {
      id: 3,
      name: 'historyPlace',
      value: 'Fortresses',
      imageSrc: require('../../../images/fortresses.jpg'),
    },
    {
      id: 4,
      name: 'historyPlace',
      value: 'Temples',
      imageSrc: require('../../../images/temple.jpg'),
    },
    {
      id: 5,
      name: 'historyPlace',
      value: 'Folk Villages',
      imageSrc: require('../../../images/folk.jpg'),
    },
    {
      id: 6,
      name: 'historyPlace',
      value: ' Security & Peace ',
      imageSrc: require('../../../images/security.jpg'),
    },
  ];

  //일반 체크
  const onChange = (e) => {
    setCheckArray({ ...checkArray, [e.target.name]: e.target.value });
    setValues({...values, [e.target.name]: e.target.value})
  };

  //중복 체크 Array 함수
  let onCheckedElement = (checked, item, name) => {
    if (checked) {
      // setCheckedList([...checkedList, item]);
      setHistoryArray({ historyPlace: [...historyArray.historyPlace, item] });
    } else if (!checked) {
      setHistoryArray({ historyPlace: historyArray.historyPlace.filter((el) => el !== item) });
    }
  };

  console.log('역사시기 : ', values);
  console.log('장소 : ', historyArray);


  const handleClick = () => {
    if (Object.keys(values).length !== 1 || Object.values(historyArray.historyPlace).length === 0) {
      alert('설문지를 체크해주세요');
    }else {
      setCheckArray({
        ...checkArray,
        [Object.keys(historyArray)]: Object.values(historyArray.historyPlace),
      });
      setPageCount(pageCount + 1);
    }
   
  };

  return (
    <div>
      <SecondHeader />
      <div className="testList">
        <form>
          <div className="li-box">
            <div>
              <label className="bd">Which era are you curious?</label>
              {formEra.map((item) => (
                <label key={item.id} className="li-map">
                  <input
                    type="radio"
                    name={item.name}
                    value={item.value}
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

          <div className="new-gabox">
            <div>
              <label className="bd">Which place do you want to visit?</label>
              {formPlace.map((item) => (
                <label key={item.id} className="new-map">
                  <input
                    type="checkbox"
                    name={item.name}
                    value={item.value}
                    onChange={(e) => {
                      onCheckedElement(e.target.checked, e.target.value, item.name);
                    }}
                  />
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
            <Button type="button" onClick={handleClick}>Finish</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SurveyMir;
