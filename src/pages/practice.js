import React, { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';

function Search() {
  const [place, setplace] = useState([]);
  useEffect(() => {
    fetch('/api/place')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setplace(data);
      });
  }, []);
  return (
    <div className="screen">
      <h1>place list</h1>
      {place.map((place) => {
        if (place.contentid <= 264115) {
          return (
            <div>
              {place.title}
              <br />
              <img src={place.firstimage} />
              <br />
              {place.addr1}
            </div>
          );
        }
      })}
    </div>
  );
}

export default Search;
