import React from 'react'
interface Props {
  toggelShow:() => void;
}
const NavMenu: React.FC<Props> = ({ toggelShow }) => {
  return (
    <ul className='flex flex-col text-center items-center absolute top-20 bg-white w-screen  gap-3  sm:flex  text-base'>
      <li className='cursor-pointer border-b p-2 w-full border-primary hover:text-primary ease-in-out duration-100'>
        <a onClick={toggelShow}  href='#Home'>
          Home
        </a>
      </li>
      <li className='cursor-pointer border-b p-2 w-full border-primary hover:text-primary ease-in-out duration-100'>
        <a onClick={toggelShow} href='#About'>
          About me
        </a>
      </li>
      <li className='cursor-pointer border-b p-2 w-full border-primary hover:text-primary ease-in-out duration-100'>
        <a onClick={toggelShow} href='#Skills'>
          Skills
        </a>
      </li>
      <li className='cursor-pointer border-b p-2 w-full border-primary hover:text-primary ease-in-out duration-100'>
        <a onClick={toggelShow} href='#Work'>
          Latest Work
        </a>
      </li>
    </ul>
  );
};

export default NavMenu