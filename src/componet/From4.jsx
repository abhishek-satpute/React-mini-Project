import React from "react";

const From4 = () => {
  return (
    <div>
      <div className="max-w-lg mx-auto border  rounded-sm shadow-md  bg-purple-700  mt-10 p-4">
        <div className="max-w-md mx-auto border  rounded-sm shadow-md  bg-white">
          <form action="">
            <div className="pl-4 mt-4 ">
              <div className=" mb-8">
                <label
                  htmlFor=" "
                  className=" font-bold  text-lg  text-center "
                >
                  {" "}
                  Updateion From{" "}
                </label>
              </div>
              <div className=" mb-4">
                <input
                  type="text "
                  className=" border border-r-gray-500 outline-none  pl-2  py-2  shadow-md  rounded-md w-[420px]"
                  placeholder=" Enter your name "
                  required="name"
                />
              </div>
              <div className=" mb-4">
                <input
                  type="email "
                  className=" border border-r-gray-500 outline-none  pl-2  py-2  shadow-md  rounded-md w-[420px]"
                  placeholder=" Enter your Email "
                  required="name"
                />
              </div>
              <div className=" mb-4">
                <input
                  type="password"
                  className=" border border-r-gray-500 outline-none  pl-2  py-2  shadow-md  rounded-md w-[420px]"
                  placeholder=" Create Password  "
                  required="name"
                />
              </div>
              <div className=" mb-3">
                <input
                  type="password"
                  className=" border border-r-gray-500 outline-none  pl-2  py-2  shadow-md  rounded-md w-[420px]"
                  placeholder=" Comfrom Password  "
                  required="name"
                />
              </div>
              <div className=" mb-3">
                <input
                  type="checkbox"
                  className=" accent-pink-600"
                  required="name "
                />
                <label htmlFor="" className=" text-md font-semibold">
                  {" "}
                  I accept all teems &Condition{" "}
                </label>
              </div>

              <div className=" mb-4">
                <button
                  type=" submit "
                  className=" border  border-gray-400  bg-blue-700 hover:bg-purple-500 text-white  py-2 w-[420px] "
                >
                  {" "}
                  Update now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default From4;
