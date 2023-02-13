import Categories from 'components/categoriescom/Categories';
import { useState, useCallback } from 'react';
import PlaceList from 'pages/PlaceList';

const ResultPage = () => {
  const [category, setCategory] = useState('');
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <>
      <div>
        <PlaceList category={category} />
      </div>
    </>
  );
};
export default ResultPage;
