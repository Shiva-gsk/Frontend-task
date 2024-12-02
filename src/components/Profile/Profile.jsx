import React from 'react'
import { useState } from 'react';
import profile from'../../../images/image-jeremy.png'

const Profile = () => {
    const [activeButton, setActiveButton] = useState(null);
    const handleClick= (index) => {
        setActiveButton(index);
        console.log(activeButton);
    }
    const buttons = ["Daily", "Weekly", "Monthly"];
  return (
    <div className='w-[100%] h-[100%] bg-[#1D204B] rounded-xl'>
      <div className='h-[65%] bg-[#5746EA] p-5 py-7 rounded-xl'>

        {/* profile */}
        <div className='w-[45%] h-[30%] bg-white rounded-full flex justify-center items-center'>
            <div className=' w-[93%] '>
                <img src={profile} alt="" />

            </div>
        </div>

        {/* Name */}

        <div className='py-8 text-3xl text-white font-mono'>
            <p className='text-xs text-[#75a3a3] font-sans font-semibold'>Report for</p>
            Jermy Robson
        </div>

      </div>

      <div className='text-[#6A6EAE] p-8 gap-3 px-6 flex flex-col items-start justify-center font-mono text-sm'>
      {/* <button onClick={handleClick} className='hover:text-white '>Daily</button>
      <button onClick={handleClick} className='hover:text-white active:text-white'>Weekly</button>
      <button onClick={handleClick} className='hover:text-white active:text-white'>Monthly</button> */}

        {buttons.map((button, index) => (
            <button
            key={index}
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
