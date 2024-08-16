import React from "react";
import Images4 from "./Image/Images4.webp";
import "./Img.css";
const From = () => {
  return (
    <>
      <div class="bg">
        <div className=" pt-28">
          <div className="  max-w-2xl mx-auto  ">
            <div className="max-w-xl mt-3 mx-auto rounded-md shadow-md border  opacity-80 backdrop-blur-2xl py-1 px-8">
              <form action="">
                <div className=" text-center  mt-4 mb-4 text-white text-lg">
                  <h2> Login From </h2>
                </div>
                <div className=" flex space-x-10">
                  <div className=" flex items-center justify-center  border-b mb-4">
                    <input
                      type="text"
                      className=" outline-none w-[240px]  placeholder:text-white  bg-inherit text-white pl-3"
                      placeholder="Enter your Frist Name"
                      required="Nmae"
                    />
                  </div>
                  <div className=" flex items-center justify-center  border-b mb-4">
                    <input
                      type="text"
                      className=" outline-none w-[240px]  placeholder:text-white  bg-inherit text-white pl-3"
                      placeholder="Enter your  last Name"
                      required="Nmae"
                    />
                  </div>
                </div>

                <div className=" flex space-x-10">
                  <div className=" flex items-center justify-center  border-b mb-4">
                    <input
                      type="text"
                      className=" outline-none w-[240px]  placeholder:text-white  bg-inherit text-white pl-3"
                      placeholder=" Enter Father  Name"
                      required="Nmae"
                    />
                  </div>
                  <div className=" flex items-center justify-center  border-b mb-4">
                    <input
                      type="number"
                      className=" outline-none w-[240px]  placeholder:text-white  bg-inherit text-white pl-3"
                      placeholder="Ente your Mobile number  "
                      required="Nmae"
                    />
                  </div>
                </div>
                <div className=" flex space-x-10">
                  <div className=" flex items-center justify-center  border-b mb-4">
                    <input
                      type="text"
                      className=" outline-none w-[240px]  placeholder:text-white  bg-inherit text-white pl-3"
                      placeholder="User name "
                      required="Nmae"
                    />
                  </div>
                  <div className=" flex items-center justify-center  border-b mb-4">
                    <input
                      type="text"
                      className=" outline-none w-[240px]  placeholder:text-white  bg-inherit text-white pl-3"
                      placeholder=" Email "
                      required="Nmae"
                    />
                  </div>
                </div>
                <div className=" flex space-x-10">
                  <div className=" flex items-center justify-center  border-b mb-4">
                    <input
                      type="text"
                      className=" outline-none w-[240px]  placeholder:text-white  bg-inherit text-white pl-3"
                      placeholder=" New  Password "
                      required="Nmae"
                    />
                  </div>
                  <div className=" flex items-center justify-center  border-b mb-4">
                    <input
                      type="text"
                      className=" outline-none w-[240px]  placeholder:text-white  bg-inherit text-white pl-3"
                      placeholder="Comfrom Password"
                      required="Nmae"
                    />
                  </div>
                </div>
                <div className=" flex space-x-10">
                  <div className=" flex items-center justify-center  border-b mb-4">
                    <input
                      type="text"
                      className=" outline-none w-[240px]  placeholder:text-white  bg-inherit text-white pl-3"
                      placeholder="Enter your  Address"
                      required="Nmae"
                    />
                  </div>
                  <div className=" flex items-center justify-center  border-b mb-4">
                    <input
                      type="text"
                      className=" outline-none w-[240px]  placeholder:text-white  bg-inherit text-white pl-3"
                      placeholder="Enter your Parmant Addres"
                      required="Nmae"
                    />
                  </div>
                </div>
                <div className=" flex  space-x-64">
                  <button
                    type="submit"
                    className=" text-white py-2 px-10 border mb-3 bg-blue-700 rounded-md"
                  >
                    {" "}
                    Submit{" "}
                  </button>
                  <button
                    type="submit"
                    className=" text-white py-2 px-10 border mb-3 bg-blue-700 rounded-md"
                  >
                    {" "}
                    Cancel{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default From;
