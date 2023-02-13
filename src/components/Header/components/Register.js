import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import logo from "../icons/logo.svg";
import "./Pages/login.css";

import AuthService from "../services/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const vnickname = value => {
  if (value.length < 3 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const vgivenname = value => {
  if (value.length < 3 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const vfamilyname = value => {
  if (value.length < 3 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [givenname, setGivenname] = useState("");
  const [familyname, setFamilyname] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [gender, setGender] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeEmail = e => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = e => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeNickname = e => {
    const nickname = e.target.value;
    setNickname(nickname);
  };

  const onChangeGivenname = e => {
    const givenname = e.target.value;
    setGivenname(givenname);
  };

  const onChangeFamilyname = e => {
    const familyname = e.target.value;
    setFamilyname(familyname);
  };

  const onChangeAge = e => {
    const age = e.target.value;
    setAge(age);
  };

  const onChangeNationality = e => {
    const nationality = e.target.value;
    setNationality(nationality);
  };

  const onChangeGender = e => {
    const gender = e.target.value;
    setGender(gender);
  };

  const handleRegister = e => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    // if (checkBtn.current.context._errors.length === 0) {
      
      AuthService.register(
        email,
        password,
        nickname,
        givenname,
        familyname,
        age,
        nationality,
        gender
      ).then(
        response => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
 
  return (
    <div className="app">
      <div className="form-container">
        <img src={logo}
        />
        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="nickname">Nickname</label>
                <Input
                  type="text"
                  className="form-control"
                  name="nickname"
                  placeholder="Nickname"
                  value={nickname}
                  onChange={onChangeNickname}
                  validations={[required, vnickname]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="givenname">Givenname</label>
                <Input
                  type="text"
                  className="form-control"
                  name="givenname"
                  placeholder="Givename"
                  value={givenname}
                  onChange={onChangeGivenname}
                  validations={[required, vgivenname]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="familyname">Familyname</label>
                <Input
                  type="text"
                  className="form-control"
                  name="familyname"
                  placeholder="Familyname"
                  value={familyname}
                  onChange={onChangeFamilyname}
                  validations={[required, vfamilyname]}
                />
              </div>

              <div className="form-group"> 
                <label htmlFor="age">Age</label>
                <Input
                  type="text"
                  className="form-control"
                  name="age"
                  value={age}
                  
                  onChange={onChangeAge}
                />
              </div>

              <div className="form-group">
                <label htmlFor="nationality">Nationality</label>
                <Input
                  type="text"
                  className="form-control"
                  name="nationality"
                  value={nationality}
                  onChange={onChangeNationality}
                />
              </div>

              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <Input
                  type="text"
                  className="form-control"
                  name="gender"
                  value={gender}
                  onChange={onChangeGender}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};
            

export default Register;
