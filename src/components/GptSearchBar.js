import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, GEMINI_KEY2 } from "../utils/constant";
import { setGptSuggestedMovies } from "../utils/movieSlice";


const GptSearchBar = () => {
  const dispatch=useDispatch();
  const langKey = useSelector((store) => store.appConfig.lang);
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //return json.results;

    const exactMatch = json.results.find(
      (movieObj) => movieObj.title.toLowerCase() === movie.toLowerCase()
    );
    return exactMatch||null;
  };

  const handleGptSrearchClick = async () => {
    if (
      searchText.current.value == null ||
      searchText.current.value.trim().length === 0
    ) {
      return;
    }
    const searchQuery =
      "Give me a list of 7 comma separated: " +
      searchText.current.value +
      " movies list. Its should only give name of movies nothing else.";

    // IMPORTANT: Replace "YOUR_API_KEY" with your actual key or use environment variables.
    const apiKey = GEMINI_KEY2;
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // --- Set UI states before the API call ---
    setLoading(true);

    // 2. This is where you 'await' the promise.
    // The function pauses here until the API call is complete.
    const result = await model.generateContent(searchQuery);

    // Once the promise is resolved, the code below executes.
    const gptresult = result.response.text();
    const gptmovies = gptresult.split(",").map((movie) => movie.trim());


    const promiseArray = gptmovies.map((moviename) => {
      return searchMovieTMDB(moviename);
    });
    const tmdbresults = await Promise.all(promiseArray);
    const filteredResults = tmdbresults.filter(
      (movie) => movie !== null && movie.poster_path !== null
    );
    dispatch(setGptSuggestedMovies(filteredResults));

    setLoading(false);
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        {!loading ? (
          <button
            className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4"
            onClick={() => {
              handleGptSrearchClick();
            }}
          >
            {lang[langKey].search}
          </button>
        ) : (
          <button className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4">
            ...
          </button>
        )}
      </form>
    </div>
  );
};

export default GptSearchBar;
