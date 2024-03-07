import React, { useEffect } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMoonOutline } from "react-icons/io5";
import { LuSunDim } from "react-icons/lu";
import { NavBarButton } from '../Data/Nav'
import Link from 'next/link';


const NavBar = () => {

  const[theme,setTheme]=React.useState('light')

  useEffect(() => {
    if(theme==='dark'){
      document.documentElement.classList.add(theme);
    }else{
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  function Light(){
    setTheme('light')
  }
  function Dark() {
     setTheme('dark')
     }


  return (
    <div className='absolute top-0 z-50 lg:h-20 h-14 w-full font-bold flex items-center px-10 justify-between '>
        <div className="logo p-3 rounded-full bg-white text-blue-500">
           <Link href='/styleai'> <h1>TSW</h1></Link>
        </div>
        <div className=' lg:flex lg:gap- items-center hidden gap-3'>
        <div className="button font-medium lg:hidden gap-10">
            {NavBarButton.map((data,index)=>(<div className='cursor-pointer' key={index}>
              <p>{data}</p>
            </div>))}
        </div>
        {theme=='light'?<IoMoonOutline className='cursor-pointer text-xl' onClick={Dark}/>:<LuSunDim className='cursor-pointer text-xl' onClick={Light} />}
        </div>
        <RxHamburgerMenu className=' lg:hidden block text-2xl'/>

    </div>
  )
}

export default NavBar