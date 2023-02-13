import axios from "axios";

const API_URL = "http://localhost:8080";

const home = homepage => {
  return axios.get(API_URL + "home", {
    home,
  });
};

const HomeService = {
  home,
};

export default HomeService;
