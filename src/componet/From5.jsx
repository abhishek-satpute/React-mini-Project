import React from "react";

const From5 = () => {
  return (
    <>
      <div className=" mt-6   mx-auto rounded-md shadow-md border  borde-gray-500  bg-blue-600 ">
        <div className=" m-10 p-6 max-w-lg mx-auto rounded-md shadow-md border  borde-gray-500  bg-white ">
          <form action="">
            <div>
              <label className=" font-semibold text-2xl">Registraion</label>
            </div>
            <div className=" flex  space-x-4">
              <div className=" mt-3 b ">
                <label htmlFor="" className=" block  mb-2 font-medium">
                  {" "}
                  Full name:{" "}
                </label>
                <input
                  type="text"
                  className="border  outline-none border-gray-300 py-1 w-56 pl-3 rounded-md shadow-sm"
                  placeholder=" Enter your name "
                  required="name "
                />
              </div>
              <div className=" mt-3">
                <label htmlFor="" className=" block  mb-2 font-medium">
                  {" "}
                  User name:{" "}
                </label>
                <input
                  type="text"
                  className="border  outline-none border-gray-300 py-1 w-56 pl-3 rounded-md shadow-sm "
                  placeholder=" Enter your name "
                  required="name "
                />
              </div>
            </div>
            <div className=" flex  space-x-4">
              <div className=" mt-3">
                <label htmlFor="" className=" block  mb-2 font-medium">
                  {" "}
                  Email:{" "}
                </label>
                <input
                  type="email"
                  className="border  outline-none border-gray-300 py-1 w-56 pl-3 rounded-md shadow-sm "
                  placeholder=" Enter your Email "
                  required="name "
                />
              </div>
              <div className=" mt-3">
                <label htmlFor="" className=" block  mb-2 font-medium">
                  {" "}
                  Phone Mobile :{" "}
                </label>
                <input
                  type="number"
                  className="border  outline-none border-gray-300 py-1 w-56 pl-3 rounded-md shadow-sm "
                  placeholder=" Enter your Number  "
                  required="name "
                />
              </div>
            </div>
            <div className=" flex  space-x-4">
              <div className=" mt-3">
                <label htmlFor="" className=" block  mb-2 font-medium">
                  {" "}
                  Password:{" "}
                </label>
                <input
                  type="password"
                  className="border  outline-none border-gray-300 py-1 w-56 pl-3 rounded-md shadow-sm"
                  placeholder=" Enter your Password "
                  required="name "
                />
              </div>
              <div className=" mt-3">
                <label htmlFor="" className=" block  mb-2 font-medium">
                  {" "}
                  Confirm Password:{" "}
                </label>
                <input
                  type="password"
                  className="border  outline-none border-gray-300 py-1 w-56 pl-3 rounded-md shadow-sm"
                  placeholder=" Confirm your password "
                  required="name "
                />
              </div>
            </div>
            <div className=" mt-4">
              <label htmlFor=" " className="font-semibold">
                {" "}
                Gender :
              </label>
            </div>
            <div className=" flex space-x-5">
              <div>
                <input
                  type="radio"
                  className=" accent-blue-700 "
                  name="gender "
                  required="name "
                />
                <label htmlFor=" " className=" font-semibold">
                  {" "}
                  Male{" "}
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  className=" accent-blue-700 "
                  name="gender "
                  required="name "
                />
                <label htmlFor=" " className=" font-semibold">
                  {" "}
                  Female{" "}
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  className=" accent-blue-700  rounded-md shadow-md"
                  name="gender "
                  required="name "
                />
                <label htmlFor=" " className=" font-semibold">
                  {" "}
                  Other{" "}
                </label>
              </div>
            </div>
            <div className=" mt-4">
              <button className="  text-white border border  py-2  w-[460px] bg-blue-700 hover:bg-purple-700  rounded-md shadow-md">
                {" "}
                Submit{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default From5;
