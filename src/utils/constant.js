
export const NETFLIX_ICON_URL="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png";
export const NETFLIX_BACKGROUND_URL="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg";
export const NETFLIX_LOGO_URL="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_ICON="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";
export const USER_PROFILE_PHOTO="https://avatars.githubusercontent.com/u/186838763?v=4";
export const PLAY_ICON="https://icon-library.com/images/play-button-icon-vector/play-button-icon-vector-4.jpg";
export const MOVIE_CARD_IMAGE_URL="https://image.tmdb.org/t/p/w500";



export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  }
};

export const SUPPORTED_LANGUAGES=[{identifier:"en" ,name:"English"},{identifier:"hindi" ,name:"Hindi"}];

export const GEMINI_KEY=process.env.REACT_APP_GEMINI_KEY;

export const GEMINI_KEY2=process.env.REACT_APP_GEMINI_KEY2;
