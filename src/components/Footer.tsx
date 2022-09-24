import React from 'react'
import { MdOutlineSmartToy } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import IconGitHub from './Icons/IconGitHub';
import PageHeader from './PageHeader';
const Footer:React.FC = () => {
  return (
    <div id='Footer' className='w-full pt-24 px-12 h-[25%] '>
      <PageHeader title={"Contact Me"} />
      <div className='flex md:flex-row flex-col md:gap-0 gap-8  justify-between mb-8 mt-8'>
        <div className='flex md:flex-col flex-row  justify-around '>
          <div className='flex   items-center gap-4  '>
            <div className='text-primary   text-4xl'>
              <MdOutlineSmartToy />
            </div>
            <h1 className=' text-3xl'>
              <span className='text-primary'>De</span>gui
              <span className='text-primary'> Ab</span>do
            </h1>
          </div>
          <p className='text-[#000000d9] text-center mt-4 font-medium'>
            It's always awsome to bring good ideas online.
          </p>
        </div>

        <div className='flex items-center justify-center gap-4 '>
          <div className=' flex items-center gap-2 text-primary  text-3xl'>
            <SiMinutemailer />
            <h1 className='text-[#000000d9] font-medium text-sm'>
              <span className=' font-bold'> Email me:</span>
              abdallah.degui.14@gmail.com
            </h1>
          </div>
          <a
            href='https://www.linkedin.com/in/AbdoDegui/'
            className=' cursor-pointer  text-blue-700 h-10 w-10 text-3xl  '
          >
            <AiFillLinkedin />
          </a>
          <a className=' cursor-pointer' href='https://github.com/deguiabdo'>
            <IconGitHub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer