import React from 'react'

const From2 = () => {
  return (
    <div>
      <div className=" bg-violet-600 max-w-lg mx-auto rounded-sm shadow-md mt-10 p-3 ">
        <div className=" bg-white max-w-md  w-full mx-auto rounded-sm shadow-md   ">
            <form>
<div className=' text-center mb-3'>
    <label className=' text-xl font-semibold'> Registration From </label>
</div>
<div className='pl-4 pb-4 '>
    <label className=' text-md font-medium block mb-1'>
        Full Name :
    </label>
    <input type='text' className=' border  border-gray-300 py-1 pl-2  w-[420px] rounded outline-none' placeholder=' Enter your name' required=" name"/>

</div>
<div className='pl-4 pb-4 '>
    <label className=' text-md font-medium block mb-1'>
        Email Address :
    </label>
    <input type='email' className=' border  rounded border-gray-300 py-1 pl-2  w-[420px] outline-none' placeholder=' Enter your name' required="namn"/>

</div>
<div className=' flex'>
<div className='pl-4 pb-4 '>
    <label className=' text-md font-medium block mb-1'>
        Mobile number  :
    </label>
    <input type='number' className=' border outline-none  border-gray-300 py-1 pl-2 w-55 rounded' placeholder=' Enter your number' required=" name"/>

</div>
<div className='pl-4 pb-4 '>
    <label className=' text-md font-medium block mb-1'>
        Brith-Date :
    </label>
    <input type='date' className=' border  rounded border-gray-300 py-1 pl-2  w-50 px-16  text-center  outline-none' placeholder=' Enter your name' required="namn"/>

</div>
</div>
<div className=' pl-4 pb-4'>
    <div className='mb-2'>
        <label htmlFor=" text-md   font-semibold block "> Gender :</label>
    </div>
    <div className=' flex space-x-8'>
    <div>
    <input type="radio" name='gender' className=' hover:bg-pink-500 accent-blue-700'  required="gender"/>
    
    <label className=' font-sm ' name="name"> Male </label>
    </div>
    <div>
    <input type="radio" name='gender' className=' hover:bg-pink-500 accent-blue-700' />
    
    <label className=' font-sm ' name="name"> Female </label>
    </div>
    <div>
    <input type="radio" name='gender' className=' hover:bg-pink-500 accent-blue-700' />
    
    <label className=' font-sm ' name="name"> Other </label>
    </div>
   
    </div>
    <div className=' mb-4'>
        <label htmlFor="" className='block '> Addres :</label>
        <input type="text" placeholder=' Enter  your addres ' className=' outline-none py-1 border border-gray-300 pl-1 w-[420px] rounded'/>
    </div>
    <div className=' flex space-x-8'>
        <div>
           <select name=" cuntry" id="" className=' py-2 outline-none border  border-gray-300 pl-2 w-[190px]  rounded-md '>
           <option className="font-semibold "> country</option>
            <option className="font-semibold "> India</option>
            <option className="font-semibold "> Usa</option>
            <option className="font-semibold "> Chaina</option>
           
           </select>
        </div>
        <div>
            <input type="text" placeholder=' Enter pin-code' className=' py-2 outline-none border  border-gray-300 pl-2 w-[190px]  rounded-md'/>
        </div>
    </div>
    <div className=' mt-3'>
        <button className='bg-violet-500 text-white  py-2 w-[420px] text-lg'>
            Submit
        </button>
    </div>
</div>

            </form>
        </div>
      </div>
    </div>
  )
}

export default From2