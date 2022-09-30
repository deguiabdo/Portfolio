import React from "react";
import { MdOutlineSmartToy } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import NavMenu from "./NavMenu";
import IconDeveloper from "./Icons/IconDeveloper";
const Navbar: React.FC = () => {
  const [show,setShow]= React.useState<boolean>(false)
  const toggelShow=()=>{
    setShow(prev=>!prev)
  }
  return (
    <div className='w-full   z-10 text-secendery shadow-md bg-white  fixed top-0 font-medium h-20 flex items-center sm:px-0   justify-between sm:justify-evenly '>
      <div className='flex ml-4  items-center gap-4  '>
        <IconDeveloper />

        <h1 className=' text-3xl font-medium '>
          <span className='text-primary'>De</span>gui
          <span className='text-primary'> Ab</span>do
        </h1>
      </div>
      <ul className='mr-3 md:gap-11 gap-8 sm:flex hidden font-medium text-base'>
        <li className='cursor-pointer hover:text-primary ease-in-out duration-100'>
          <a href='#Home'>Home</a>
        </li>
        <li className='cursor-pointer hover:text-primary ease-in-out duration-100'>
          <a href='#About'> About me</a>
        </li>
        <li className='cursor-pointer hover:text-primary ease-in-out duration-100'>
          <a href='#Skills'>Skills</a>
        </li>
        <li className='cursor-pointer hover:text-primary ease-in-out duration-100'>
          <a href='#Work'>Latest Work</a>
        </li>
      </ul>
      {show && <NavMenu toggelShow={toggelShow} />}

      <button
        onClick={toggelShow}
        className=' mr-8 sm:hidden  block text-4xl text-secendery  hover:text-primary '
      >
        <FiMenu />
      </button>
    </div>
  );
};

export default Navbar;
