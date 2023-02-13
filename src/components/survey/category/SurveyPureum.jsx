import React, { Component, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SecondHeader from 'components/Header/secondHeader';
import 'components/Pages/character.css';
import Button from 'components/common/Button';
import CustomButton from 'components/common/CustomButton';
import axios from 'axios';

const SurveyPureum = (props) => {
  let { checkArray, setCheckArray, pageCount, setPageCount } = props;

  const [natureArray, setNatureArray] = useState({ naturePlace: [] });

  const formplace = [
    { id: 1, name: 'naturePlace', value: 'Beaches' },
    { id: 2, name: 'naturePlace', value: 'Mountains' },
    { id: 3, name: 'naturePlace', value: 'Forest' },
    { id: 4, name: 'naturePlace', value: 'Valleys' },
    { id: 5, name: 'naturePlace', value: 'River & Lake' },
    { id: 6, name: 'naturePlace', value: 'Cave' },
  ];

  //중복 체크 Array 함수
  let onCheckedElement = (checked, item, name) => {
    if (checked) {
      // setCheckedList([...checkedList, item]);
      setNatureArray({ naturePlace: [...natureArray.naturePlace, item] });
    } else if (!checked) {
      setNatureArray({ naturePlace: natureArray.naturePlace.filter((el) => el !== item) });
    }
  };

  const handleClick = () => {
    if (Object.values(natureArray.naturePlace).length === 0) {
      alert('설문지를 체크해주세요');
    } else {
      setCheckArray({
        ...checkArray,
        [Object.keys(natureArray)]: Object.values(natureArray.naturePlace),
      });
      setPageCount(pageCount + 1);
    }
  };

  console.log('자연 : ', natureArray);

  return (
    <div>
      <SecondHeader />
      <div className="testList">
        <form>
          <div className="li-box">
            <div>
              <label className="bd">Which nature do you want to enjoy?</label>
              {formplace.map((item) => (
                <label key={item.id} className="mcs-map">
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
              <span className="boderSpan"></span>
            </div>
          </div>
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

export default SurveyPureum;
