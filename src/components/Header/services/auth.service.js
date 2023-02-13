import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (
  email,
  password,
  nickname,
  givenname,
  familyname,
  age,
  nationality,
  gender
) => {
  return axios.post(API_URL + "signup", {
    email,
    password,
    nickname,
    givenname,
    familyname,
    age,
    nationality,
    gender,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then(response => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));//유지
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {    //로그인 여부 확인하는 함수
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
