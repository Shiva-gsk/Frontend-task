import React, { useContext } from 'react'
import { useState } from 'react';
import profile from'../../../images/image-jeremy.png'
import {menuContext} from '../../Context/menuContext';

const Profile = () => {
    const {setItem} = useContext(menuContext);
    const [activeButton, setActiveButton] = useState(0);
    const handleClick= (index) => {
      if(index == 0){
        setItem("daily");
      }
      else if(index == 1){
        setItem('weekly');
      }
      else{
        setItem("monthly")
      }
        setActiveButton(index);
        console.log(activeButton);
    }
    const buttons = ["Daily", "Weekly", "Monthly"];
  return (
    <div className='w-[100%] sm:h-[100%] bg-[#1D204B] rounded-xl hover:scale-[101%] cursor-pointer'>
      <div className='h-[65%] bg-[#5746EA] p-5 py-7 rounded-xl flex sm:flex-col'>

        {/* profile */}
        <div className='sm:w-[45%] sm:h-[30%] h-[30%] w-[25%] bg-white rounded-full flex justify-center items-center'>
            <div className=' w-[93%] '>
                <img src={profile} alt="" />

            </div>
        </div>

        {/* Name */}

        <div className='sm:py-8 px-7 sm:px-0 text-3xl text-white font-mono sm:w-[100%] w-[50%]'>
            <p className='text-xs text-[#75a3a3] font-sans font-semibold'>Report for</p>
            Jermy Robson
        </div>

      </div>

      <div className='text-[#6A6EAE] sm:p-8 p-4 gap-3 px-6 flex sm:flex-col items-start justify-center font-mono text-sm'>
      {/* <button onClick={handleClick} className='hover:text-white '>Daily</button>
      <button onClick={handleClick} className='hover:text-white active:text-white'>Weekly</button>
      <button onClick={handleClick} className='hover:text-white active:text-white'>Monthly</button> */}

        {buttons.map((button, index) => (
            <button
            key={index}
            className={`hover:text-white sm:p-0 px-3 ${(activeButton == index)?"text-white":""} `}
            onClick={() => handleClick(index)} // Pass the index to handler
            >
            {button}
            </button>
        ))}

      </div>
    </div>
  )
}

export default Profile
