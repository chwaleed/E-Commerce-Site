import React from "react";

function NewLatter() {
  return (
    <>
      <div className="w-[80%] mt-[5%] mb-[5%] flex flex-col items-center mx-auto bg-gradient-to-b from-[#fde1ff] via-transparent to-[#e1ffea22]">
        <h1 className="text-[2.6em] mt-[2em] font-[600]">
          Get Exclusive Offers On Your Email
        </h1>
        <p className="mt-[1.3em] text-[1.2em]">
          Subscribe to our Newletter and stay upadated
        </p>
        <div className="flex mb-[6em] mt-[2em]">
          <input
            className="border-[1px] text-[#616161] w-[25em] py-[0.7em] px-[1em] outline-none rounded-[2em] "
            type="email"
            placeholder="Your Email id"
          />
          <button className="px-[2em] bg-black rounded-[2em] text-white ml-[-4em]">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}

export default NewLatter;
