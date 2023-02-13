import Categories from 'components/categoriescom/Categories';
import { useState, useCallback } from 'react';
import 'components/Pages/map.css';
import TourList from 'pages/TourList';
import Mapmodalper from 'components/common/mapmodalper';
import Button from 'components/common/Button';
import { useLocation } from 'react-router-dom';

const FilterMapPage = () => {
  const [category, setCategory] = useState('all');
  // const [tours, setTours] = useState('');
  const onSelect = useCallback((category) => setCategory(category), []);
  const location = useLocation();

  const accom = location.state.param2;
  const restaur = location.state.param3;
  const cat2 = location.state.param1;
  console.log(accom);
  console.log(restaur);
  console.log(cat2);
  // accomparam={accom} restaurparam={restaur}

  return (
    <>
      <div>
        <Categories category={category} onSelect={onSelect} />
        <Mapmodalper />
        <TourList category={category} accomparam={accom} restaurparam={restaur} cat2param={cat2} />
      </div>
    </>
  );
};
export default FilterMapPage;
