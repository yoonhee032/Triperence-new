import React from "react";
import 'components/Pages/Paging.css';
import Pagination from "react-js-pagination";

const Paging = ({page, count, setPage}) => {

  return (
    <Pagination
      activePage={<div>adadadada</div>}
      itemsCountPerPage={5}
      totalItemsCount={100}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={setPage}
    />
  );
};

export default Paging;

