import React, { useEffect } from "react";
import {
  SUPPORTED_LANGUAGES,
  USER_ICON,
} from "../utils/constant";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { clearMovies } from "../utils/movieSlice";
import Disclaimer from "./Disclaimer";
import { toggleGptSearchView } from "../utils/gptSlice";
import { modifyLanguage } from "../utils/appConfigSlice";

const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const currentLanguage = useSelector((store) => store.appConfig.lang);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(clearMovies());
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const email = user.email;
        const displayName = user.displayName;
        const photoURL = user.photoURL;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        //anthing to do when signout
        dispatch(removeUser());

        navigate("/");
      }
    });
    // unsubscribe the onauthstatechanged when header-component unmounts.
    return () => {
      unsubscribe();
    };
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(modifyLanguage(e.target.value));
  };

  return (
    <div className="absolute px-8 py-2 w-full bg-gradient-to-b from-black flex justify-between z-10">
      <img src="/images/logo.png" alt="netflixLogo" className="w-52" />
      <Disclaimer />
      {!user ? null : (
        <div className="flex p-2">
          {showGptSearch ? (
            <select
              className="p-2 bg-gray-900 text-white m-2 rounded-lg"
              onChange={handleLanguageChange}
              value={currentLanguage}
            >
              {SUPPORTED_LANGUAGES.map((lang) => {
                return (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                );
              })}
            </select>
          ) : null}
          <button
            className="bg-purple-800 py-2 px-4 mx-4 my-2 rounded-lg text-white hover:scale-110 active:scale-100 transititon-transform duration-300"
            onClick={handleGptSearchClick}
          >{showGptSearch?"Home":"GPT Search"}
          </button>
          <img
            alt="user-icon"
            src={user.photoURL ? user.photoURL : USER_ICON}
            className="w-12 h-12 mr-2"
          ></img>
          <button
            className="text-white font-bold"
            onClick={() => {
              handleSignOut();
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
