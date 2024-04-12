import React from "react";
import { useEffect, useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase";
import {
  FacebookOutlined,
  TwitterOutlined,
  GoogleOutlined,
} from "@ant-design/icons";

import { useNavigate } from "react-router-dom";

function OAuth() {
  const navigate = useNavigate();

  const SignUpUsingGoogle = () => {
    const provider = new GoogleAuthProvider();

    console.log("first");
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email } = result.user;
        // setUserData({ displayName, email })

        if (displayName && email) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  return (
    <div>
      <GoogleOutlined
        onClick={SignUpUsingGoogle}
        type="button"
        className="login-with-google-btn"
      />

      {/* {isLoggedIn &&
        <div className="wrapper">
          <div className="profile-card js-profile-card">

            <div className="profile-card__img">
              <img src="https://pbs.twimg.com/profile_images/1680659910860869632/0YdmM9FN_400x400.jpg" alt="profile card" />
            </div>

            <div className="profile-card__cnt js-profile-cnt">
              <div className="profile-card__name">{userData.displayName}</div>
              <div className="profile-card__txt">{userData.email}</div>
              <div className="profile-card-loc">
              </div>
              <div className="profile-card-ctr">
                <button className="profile-card__button button--orange" onClick={Logout}>Log out</button>
              </div>
            </div>

          </div>
        </div>
      } */}
    </div>
  );
}

export default OAuth;
