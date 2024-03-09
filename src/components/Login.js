import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute h-full w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-image"
        ></img>
        <div className="absolute inset-0  bg-black opacity-60"></div>
      </div>
      <div>
        <form className="absolute px-[4.25rem] py-[3.75rem] bg-opacity-70 bg-black rounded-md  w-[28.125rem] h-[41.25rem] my-36 mx-auto right-0 left-0 text-white">
          <h1 className="text-white font-bold  text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Enter Username"
              className="py-4 w-[19.625rem] h-[3.125rem] px-5 my-4  bg-[#333333]  placeholder-[#8c8c8c] text-[16px] rounded-md"
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            className="py-4 px-5 my-4 w-[19.625rem] h-[3.125rem] bg-[#333333]  placeholder-[#8c8c8c] text-[16px] rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="py-4 my-4 px-5 w-[19.625rem] h-[3.125rem] bg-[#333333] placeholder-[#8c8c8c] text-[16px] rounded-md"
          />
          <button className="py-4 my-8 bg-[#e50914] font-bold rounded-md w-[19.625rem] h-[3.125rem]">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="py-2 cursor-pointer text-[#8c8c8c]"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? " New to Netflix?" : "Already an User?"}
            <span className="text-white">
              {" "}
              {isSignInForm ? "Sign Up Now" : "Sign In Now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
