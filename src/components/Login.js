import React, { useRef, useState } from "react";
import { NETFLIX_BACKGROUND_URL } from "../utils/constant";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage,setErrMessage]=useState(null);

  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);

  const handleButtonClick=()=>{
    const message=checkValidData(email.current.value,password.current.value,name.current?.value,isSignInForm);
    setErrMessage(message);

    
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative">
      <Header />
      <div>
        <img src={NETFLIX_BACKGROUND_URL} alt="BackgroundImg"></img>
      </div>
      <form onSubmit={(e)=>e.preventDefault()}className="absolute top-32 mx-auto left-0 right-0 w-4/12 bg-black bg-opacity-80 px-20 py-10">
        <h1 className="text-white font-bold text-3xl my-4"> {isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm ? (<input ref={name}type="text" placeholder="Full Name" className=" p-4 w-full my-3 bg-black bg-opacity-80 text-white border border-gray-500 rounded-md"></input>) : null}
        
        <input ref={email} type="text" placeholder="Email Address" className=" p-4 w-full my-3 bg-black bg-opacity-80 text-white border border-gray-500 rounded-md"></input>
        <input ref={password} type="password" placeholder="Password" className="p-4 w-full my-3 bg-black bg-opacity-80 border border-gray-500 text-white rounded-md"></input>
        <p className="text-red-700">{errMessage}</p>
        <button className="bg-red-700 p-3 w-full my-4 rounded-md text-white font-bold" onClick={()=>handleButtonClick()}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="text-white font-normal" onClick={() => toggleSignInForm()}>{isSignInForm ? (
            <>
              New to Netflix? <span className="font-bold cursor-pointer">Sign up now.</span>
            </>
          ) : (
            <>
              Already registered?{" "}
              <span className="font-bold cursor-pointer">Sign in now.</span>
            </>
          )} </p>
      </form>
    </div>
  );
};

export default Login;
