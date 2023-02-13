import React, { Component, useState, useEffect } from 'react';
import SecondHeader from 'components/Header/secondHeader';
import 'components/Pages/surveyFirst.css';
import Button from 'components/common/Button';
import CustomButton from 'components/common/CustomButton';
import AuthService from '../../Header/services/auth.service';
import axios from 'axios';
import Swal from 'sweetalert2';

const SurveyChoa = (props) => {
  let { checkArray, setCheckArray, pageCount, setPageCount } = props;

  const [musicArray, setMusicArray] = useState({ k_pop: [] });
  const [dramaArray, setDramaArray] = useState({ k_movie_drama: [] });


  const formPop = [
    { id: 1, name: 'k_pop', value: 'BTS', imageSrc: require('../../../images/bts1.jpeg') },
    {
      id: 2,
      name: 'k_pop',
      value: 'BLACKPINK',
      imageSrc: require('../../../images/blackpink1.jpg'),
    },
    { id: 3, name: 'k_pop', value: 'PSY', imageSrc: require('../../../images/psy.jpg') },
    { id: 4, name: 'k_pop', value: 'EXO', imageSrc: require('../../../images/exo.jpg') },
    { id: 5, name: 'k_pop', value: 'NCT', imageSrc: require('../../../images/nct1.jpg') },
    { id: 6, name: 'k_pop', value: 'G.Idle', imageSrc: require('../../../images/gidle.jpg') },
    {
      id: 7,
      name: 'k_pop',
      value: 'REDVELVET',
      imageSrc: require('../../../images/redvelvet.jpg'),
    },
    { id: 8, name: 'k_pop', value: 'SVT', imageSrc: require('../../../images/svt2.jpg') },
    { id: 9, name: 'k_pop', value: 'TWICE', imageSrc: require('../../../images/twice.jpg') },
  ];

  const formMedia = [
    {
      id: 1,
      name: 'k_movie_drama',
      value: 'PARASITE',
      imageSrc: require('../../../images/parasite2.jpg'),
    },
    {
      id: 2,
      name: 'k_movie_drama',
      value: 'TRAIN TO BUSAN',
      imageSrc: require('../../../images/traintobusan.jpg'),
    },
    {
      id: 3,
      name: 'k_movie_drama',
      value: 'HOTEL DEL LUNA',
      imageSrc: require('../../../images/hoteldelluna2.jpg'),
    },
    {
      id: 4,
      name: 'k_movie_drama',
      value: 'SQUID GAME',
      imageSrc: require('../../../images/squid.jpg'),
    },
    {
      id: 5,
      name: 'k_movie_drama',
      value: 'VINCENZO',
      imageSrc: require('../../../images/vincenzo1.jpg'),
    },
    {
      id: 6,
      name: 'k_movie_drama',
      value: ' KINGDOM ',
      imageSrc: require('../../../images/kingdom.jpg'),
    },
    {
      id: 7,
      name: 'k_movie_drama',
      value: 'MR.SUNSHINE',
      imageSrc: require('../../../images/mrsunshine1.jpg'),
    },
    {
      id: 8,
      name: 'k_movie_drama',
      value: ' LANDING ON YOU',
      imageSrc: require('../../../images/crash.png'),
    },
    {
      id: 9,
      name: 'k_movie_drama',
      value: 'ALL OF US ARE DEAD',
      imageSrc: require('../../../images/all_of_Us.jpg'),
    },
  ];

  let onCheckedElement = (checked, item, name) => {
    if (checked) {
      if (name === 'k_pop') {
        // setCheckedList([...checkedList, item]);
        setMusicArray({ k_pop: [...musicArray.k_pop, item] });
      }
      if (name === 'k_movie_drama') {
        setDramaArray({ k_movie_drama: [...dramaArray.k_movie_drama, item] });
      }
    } else if (!checked) {
      if (name === 'k_pop') {
        setMusicArray({ k_pop: musicArray.k_pop.filter((el) => el !== item) });
      }
      if (name === 'k_movie_drama') {
        setDramaArray({ k_movie_drama: dramaArray.k_movie_drama.filter((el) => el !== item) });
      }
    }
  };

  
  console.log('음악 : ', Object.values(musicArray.k_pop).length);
  console.log('드라마 : ', dramaArray);

  const handleClick = () => {
    if (Object.values(musicArray.k_pop).length === 0 || Object.values(dramaArray.k_movie_drama).length === 0) {
      alert('설문지를 체크해주세요');
    }else {
      setCheckArray({
        ...checkArray,
        [Object.keys(musicArray)]: Object.values(musicArray.k_pop),
        [Object.keys(dramaArray)]: Object.values(dramaArray.k_movie_drama),
      });
      setPageCount(pageCount + 1);
    }
   
  };


  return (
    <div>
      <SecondHeader />
      <div className="testChoa">
        <form>
          <div className="new-gabox">
            <div>
              <label className="bd">K-POP</label>
              {formPop.map((item) => (
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
              <span className="boderSpan"></span>
            </div>
          </div>

          <div className="testChoa">
            <div className="new-gabox">
              <div>
                <label className="bd">K-MOVIE/DRAMA</label>
                {formMedia.map((item) => (
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

export default SurveyChoa;
