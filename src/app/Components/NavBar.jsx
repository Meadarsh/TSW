import React, { useEffect } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMoonOutline } from "react-icons/io5";
import { LuSunDim } from "react-icons/lu";
import { NavBarButton } from '../Data/Nav'

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
    <div className=' backdrop-blur-sm  z-50 top-0 lg:h-20 h-14 w-full font-bold flex items-center px-10 justify-between '>
        <div className="logo">
            <h1>TSW</h1>
        </div>
        <div className=' lg:flex lg:gap- items-center hidden gap-3'>
        <div className="button font-medium lg:flex gap-10">
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