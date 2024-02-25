import React from 'react'
import { buttons } from '../Data/Homepage'

const ThirdPage = () => {
  return (
    <div className='min-h-[20vh] w-full border-t border-gray-400  justify-evenly items-center flex-wrap flex mt-[15vh]'>
    {buttons.map((data,index)=>(<div key={index} className="button cursor-pointer h-12 border lg:hover:bg-black lg:dark:hover:bg-white lg:hover:text-white lg:dark:hover:text-black border-black dark:border-white px-5 flex items-center text-xl rounded-full ">
        <p>{data}</p>
     </div>)) }
    </div>
  )
}

export default ThirdPage