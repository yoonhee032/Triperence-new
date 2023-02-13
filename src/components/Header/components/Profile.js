import React from "react";
import AuthService from "../services/auth.service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.nickname}</strong> Profile
        </h3>
      </header>
      {/* <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p> */}
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <p>
        <strong>Nickname:</strong> {currentUser.nickname}
      </p>
      <p>
        <strong>Givenname:</strong> {currentUser.givenname}
      </p>
      <p>
        <strong>Familyname:</strong> {currentUser.familyname}
      </p>
      <p>
        <strong>Age:</strong> {currentUser.age}
      </p>
      <p>
        <strong>Nationality:</strong> {currentUser.nationality}
      </p>
      <p>
        <strong>Gender:</strong> {currentUser.gender}
      </p>
      {/* <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul> */}
    </div>
  );
};

export default Profile;
