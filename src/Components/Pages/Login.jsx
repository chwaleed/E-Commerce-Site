import React from "react";

function Login() {
  return (
    <>
      <div className="w-full h-[90vh] bg-[#fce3fe] flex items-center justify-center ">
        <div className="bg-white w-[35%] h-[72%] py-[3em] px-[2.5em] ">
          <h1 className="font-bold text-[1.4em] ">Sign Up</h1>
          <div>
            <input
              className="w-full border-[2px] mt-[1em] px-[1em] py-[0.8em]"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="w-full border-[2px] mt-[1em] px-[1em] py-[0.8em]"
              type="emial"
              placeholder="Email Address"
            />
            <input
              className="w-full border-[2px] mt-[1em] px-[1em] py-[0.8em]"
              type="password"
              placeholder="Password"
            />
          </div>
          <button className="w-full bg-[#ff4141] text-white cursor-pointer py-[0.8em] mt-[1em]">
            Continue
          </button>
          <p className="mt-[0.8em]">
            Already have an account?{" "}
            <span className="text-[#e74646] cursor-pointer ">Login here</span>
          </p>
          <div className="flex mt-[1em] gap-[0.8em]">
            <input
              className="w-[1em] cursor-pointer"
              type="checkbox"
              name=""
              id=""
            />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
