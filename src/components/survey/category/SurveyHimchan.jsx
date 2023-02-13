import React, { Component, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SecondHeader from 'components/Header/secondHeader';
import 'components/Pages/character.css';
import Button from 'components/common/Button';
import AuthService from '../../../components/Header/services/auth.service';
import CustomButton from 'components/common/CustomButton';
import axios from 'axios';
import Swal from 'sweetalert2';

const SurveyHimchan = (props) => {
  const navigate = useNavigate();
  
  let { checkArray, setCheckArray, pageCount, setPageCount } = props;

  const [preferArray, setPreferArray] = useState({ shoot: [] });
  const [photoArray, setPhotoArray] = useState({ subject: [] });

  const formPrefer = [
    { id: 1, name: 'shoot', value: 'Photo' },
    { id: 2, name: 'shoot', value: 'Video' },
  ];

  const formSubject = [
    { id: 1, name: 'subject', value: 'Selfie' },
    { id: 2, name: 'subject', value: 'Persons' },
    { id: 3, name: 'subject', value: 'Animals' },
    { id: 4, name: 'subject', value: 'Building' },
    { id: 5, name: 'subject', value: 'Scenery' },
    { id: 6, name: 'subject', value: 'Foods' },
  ];

  let onCheckedElement = (checked, item, name) => {
    if (checked) {
      if (name === 'shoot') {
        // setCheckedList([...checkedList, item]);
        setPreferArray({ shoot: [...preferArray.shoot, item] });
      }
      if (name === 'subject') {
        setPhotoArray({ subject: [...photoArray.subject, item] });
      }
    } else if (!checked) {
      if (name === 'shoot') {
        setPreferArray({ shoot: preferArray.shoot.filter((el) => el !== item) });
      }
      if (name === 'subject') {
        setPhotoArray({ subject: photoArray.subject.filter((el) => el !== item) });
      }
    }
  };

  console.log('음악 or 비디오 : ', preferArray);
  console.log('피사체 : ', photoArray);

  const handleClick = () => {
    if (
      Object.values(preferArray.shoot).length === 0 || Object.values(photoArray.subject).length === 0
    ) {
      alert('설문지를 체크해주세요');
    } else {
      setCheckArray({
        ...checkArray,
        [Object.keys(preferArray)]: Object.values(preferArray.shoot),
        [Object.keys(photoArray)]: Object.values(photoArray.subject),
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
              <label className="bd">What do you prefer to shoot?</label>
              {formPrefer.map((item) => (
                <label key={item.id} className="mc-map">
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
          <div className="li-box">
            <div>
              <label className="bd">Which do you take of?</label>
              {formSubject.map((item) => (
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

export default SurveyHimchan;
