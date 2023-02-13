import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import SurveyFirst from '../components/survey/SurveyFirst';
import SurveySecond from '../components/survey/SurveySecond';
import SurveyChoa from '../components/survey/category/SurveyChoa';
import SurveyMir from '../components/survey/category/SurveyMir';
import SurveyPureum from '../components/survey/category/SurveyPureum';
import SurveySodam from '../components/survey/category/SurveySodam';
import SurveyNori from '../components/survey/category/SurveyNori';
import SurveyHimchan from '../components/survey/category/SurveyHimchan';

const Survey = () => {
  const navigate = useNavigate();
  const mounted = useRef(false);

  const [pageCount, setPageCount] = useState(1); //페이지 상태 관리
  const [checkArray, setCheckArray] = useState({}); // 선택 항목 목록을 배열로 관리

  const categoryArray = [
    { id: 1, name: SurveyChoa, category: 'Entertainment' },
    { id: 2, name: SurveyMir, category: 'History' },
    { id: 3, name: SurveyPureum, category: 'Natures' },
    { id: 4, name: SurveySodam, category: 'Food' },
    { id: 5, name: SurveyNori, category: 'Like Festival' },
    { id: 6, name: SurveyHimchan, category: 'Photo Spot' },
  ];

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      if (pageCount === 4) {
        navigate('/showResult', { state: checkArray });
      }
    }
  }, [pageCount]);

  let showPage = () => {
    if (pageCount === 1) {
      return (
        <>
          <SurveyFirst
            checkArray={checkArray}
            setCheckArray={setCheckArray}
            pageCount={pageCount}
            setPageCount={setPageCount}
          />
        </>
      );
    }
    if (pageCount === 2) {
      return (
        <>
          <SurveySecond
            checkArray={checkArray}
            setCheckArray={setCheckArray}
            pageCount={pageCount}
            setPageCount={setPageCount}
          />
        </>
      );
    }
    if (pageCount === 3) {                                                   
      let SpecificStrory = '';

      categoryArray.map((data) => {
        if (data.category === checkArray.category) {
          SpecificStrory = data.name;
        }
      });
      return (
        <SpecificStrory
          checkArray={checkArray}
          setCheckArray={setCheckArray}
          pageCount={pageCount}
          setPageCount={setPageCount}
        ></SpecificStrory>
      );
    }
  };
  return <>{showPage()}</>;
};

export default Survey;
