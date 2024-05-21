import React, { useState } from 'react'

const GetApp = () => {
  const [inputType, setInputType] = useState(true);
  return (
    <div className="  bg-[#FFFBF7] flex justify-center items-center h-[] md:h-[] mt-20  w-full mb-20 py-11">
      <div className="innerContainer w-[100%] md:w-[70%] flex justify-center  h-[80%]">
        <div className="leftSide hidden md:flex items-center ">
          <img
            src='https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png'
            alt="mobileimg"
            className="w-[16.5rem] "
          />
        </div>
        <div className="rightSide flex flex-col gap-3 text-center justify-center items-center">
          <div className="text-[2rem] md:text-[3rem] font-[450] ">Get the Zomato App</div>
          <div className="mt-2 mb-2 font-[350] w-[90%] leading-7">
            We will send you a link, open it on your phone to download the app
          </div>
          <div className="radio mt-1 mb-1">
            <div className="radio flex mt-1 mb-1">
              <div
                className="mr-3 ml-3 flex items-center"
                onClick={() => setInputType(true)}
              >
                <input
                  className="w-5 h-5 accent-[#ef4f5f] cursor-pointer"
                  type="radio"
                  name="radio"
                  id="email"
                  defaultChecked={inputType}
                />
                <label className="cursor-pointer ml-1" htmlFor="email">
                  Email
                </label>
              </div>
              <div
                className="mr-3 ml-3 flex items-center"
                onClick={() => setInputType(false)}
              >
                <input
                  className="w-5 h-5 accent-[#ef4f5f] cursor-pointer"
                  type="radio"
                  name="radio"
                  id="phone"
                />
                <label className="cursor-pointer ml-1" htmlFor="phone">
                  Phone
                </label>
              </div>
            </div>
            <div className="inputs flex flex-col gap-3 md:flex-row justify-between mt-[2rem] items-center  ">
              <div className="inputtypes ">
                {inputType === true ? (
                  <input
                    type="Email"
                    placeholder="Email"
                    className="pt-3 pb-3 pr-4 pl-4 border-2 w-[18rem] h-[3.5rem] border-red-500 rounded font-[350] text-[1rem] focus:outline-none"
                  />
                ) : (
                  <input
                    type="tel"
                    placeholder="Number"
                    class="pt-3 pb-3 pr-4 pl-4 border-2 w-[18rem] h-[3.5rem] border-red-500 rounded font-[350] text-[1rem]  focus:outline-none"
                  />

                )}
              </div>
              <button
                variant="default"
                class="bg-red-500  pb2 pl-4 pr-4 w-[18rem] md:w-[10rem] h-[3.5rem] text-white text-[1rem] font-[500] cursor-pointer hover:bg-red-600 text-center"
              >
                Share App Link
              </button>

            </div>
            <div className=" mb-[2rem] ">
              <div className="mt-[4px] mb-[1rem] ">Download app from</div>
              <div className="flex flex-wrap justify-center">
                <img className="m-3 mt-0 w-[10rem] cursor-pointer" src='https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png' alt="appstore" />
                <img
                  className="m-3 mt-0 w-[10rem] cursor-pointer"
                  src='https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png'
                  alt="playstore"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetApp;
