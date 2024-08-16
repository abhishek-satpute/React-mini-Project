import React from "react";

const From3 = () => {
  return (
    <>
      <div className=" bg-blue-700 border rounded-md shadow-lg max-w-4xl mx-auto mt-8 pb-9">
        <div className=" bg-white border  shadow-lg max-w-3xl  w-full mx-auto mt-8 rounded-sm ">
          <form action="">
            <div className=" mt-2 pl-6">
              <label htmlFor="" className=" font-bold">
                {" "}
                Registration{" "}
              </label>
            </div>
            <div className="pl-6 mt-4 mb-4">
              <lable className=" font-semibold text-zinc-500">
                {" "}
                Student Details :
              </lable>
            </div>
            <div className="flex">
              <div className=" pl-6 mb-3">
                <label htmlFor="" className=" font-bold  block ">
                  {" "}
                  Full Name :{" "}
                </label>
                <input
                  type="text"
                  className=" px-6 border border-gray-300 rounded mt-2 py-1 outline-none "
                  placeholder=" Enter your name"
                  required="name"
                />
              </div>
              <div className=" pl-4 mb-3">
                <label htmlFor="" className=" font-bold  block ">
                  Date of Brith :{" "}
                </label>
                <input
                  type="date"
                  className=" px-12 border border-gray-300 rounded mt-2 py-1 outline-none "
                  placeholder=" Enter your Date of Brith"
                  required="brith"
                />
              </div>
              <div className=" pl-4 mb-6">
                <label htmlFor="" className=" font-bold  block ">
                  {" "}
                  Email:{" "}
                </label>
                <input
                  type="email"
                  className=" px-6 border border-gray-300 rounded mt-2 py-1 outline-none "
                  placeholder=" Enter your Email"
                  required="email"
                />
              </div>
            </div>
            <div className="  flex">
              <div className="pl-6  mb-3">
                <label className=" font-bold  block mb-2">
                  Student Mobile number :
                </label>
                <input
                  type="text"
                  placeholder=" Enter  your Number "
                  className=" outline-none border border-gray-300 py-1 px-6 rounded"
                />
              </div>
              <div className="pl-4 mb-3">
                <label className=" font-bold  block mb-2"> Gender :</label>
                <select
                  name=" Gendrer"
                  id=""
                  className="outline-none border border-gray-300 py-1 px-6 rounded "
                  required="grnder "
                >
                  <option value="">-----Select Gender-----</option>
                  <option value="">Male</option>
                  <option value="">Femle</option>
                  <option value="">Other</option>
                </select>
              </div>
              <div className=" pl-4 mb-3">
                <label className=" font-bold  block mb-2">
                  {" "}
                  College Name :
                </label>
                <input
                  type="text"
                  placeholder=" Enter  your College Name  "
                  className=" outline-none border border-gray-300 py-1 px-6 rounded"
                  required=" name"
                />
              </div>
            </div>
            <div className="pl-6 mt-4 mb-4">
              <lable className=" font-semibold text-zinc-500 text-lg">
                {" "}
                Parent Details :
              </lable>
            </div>
            <div className="flex">
              <div className=" pl-6 mb-3">
                <label htmlFor="" className=" font-bold  block ">
                  Father Full name :{" "}
                </label>
                <input
                  type="text"
                  className=" px-6 border border-gray-300 rounded mt-2 py-1 outline-none "
                  placeholder=" Enter your name"
                />
              </div>
              <div className=" pl-4 mb-3">
                <label htmlFor="" className=" font-bold  block ">
                  {" "}
                  Mother Full :{" "}
                </label>
                <input
                  type="number"
                  className=" px-6 border border-gray-300 rounded mt-2 py-1 outline-none "
                  placeholder=" Enter your name"
                  required="brith"
                />
              </div>
              <div className=" pl-4 mb-6">
                <label htmlFor="" className=" font-bold  block ">
                  {" "}
                  Parenat Mobile number:{" "}
                </label>
                <input
                  type="number"
                  className=" px-6 border border-gray-300 rounded mt-2 py-1 outline-none "
                  placeholder=" Enter your Email"
                  required="email"
                />
              </div>
            </div>
            <div className="  flex">
              <div className="pl-4 mb-8">
                <label className=" font-bold  block mb-2"> Address :</label>
                <input
                  type="text"
                  name=" name "
                  id=""
                  className="outline-none border border-gray-300 py-1 px-6 rounded "
                  required="grnder "
                  placeholder="Enter your Addres"
                />
              </div>
              <div className=" pl-4 mb-3">
                <label className=" font-bold  block mb-2">
                  Parmant Addares :
                </label>
                <input
                  type="text"
                  placeholder=" Enter  your Occuption "
                  className=" outline-none border border-gray-300 py-1 px-6 rounded"
                  required=" name"
                />
              </div>
              <div className="pl-6  mb-3">
                <label className=" font-bold  block mb-2"> Pin-code :</label>
                <input
                  type="text"
                  placeholder=" Enter  your Number "
                  className=" outline-none border border-gray-300 py-1 px-6 rounded"
                />
              </div>
            </div>
            <div className=" pl-4 mb-6  space-x-[500px]">
              <button
                type="submit"
                className=" bg-blue-600 py-1 px-8 text-white rounded "
              >
                {" "}
                Submit{" "}
              </button>
              <button
                type="submit"
                className=" bg-blue-600 py-1 px-8 text-white rounded  "
              >
                {" "}
                clear{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default From3;
