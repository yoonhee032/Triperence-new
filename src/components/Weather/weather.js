import axios from 'axios';
import react, { useState,useEffect } from "react";

const WEATHER_KEY = '59fa510b14b56b838411dae5ecfe1333';

const Weather = ({ place }) => {
    useEffect(() => {
    //async 를 사용하는 함수 따로 선언
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?
            lat=${place.mapy}&lon=${place.mapx}&appid=${WEATHER_KEY}&units=metric}`);
        const temp = response.data.main.temp;
        const weathers = response.data.weather[response.data.weather.length - 1];
        console.log(place.mapy+"/"+place.mapx);
        console.log(temp);
        console.log(weathers);
      } catch (e) {}
    };
    fetchData();
  }, []);

  return <></>;
};

export default Weather;
