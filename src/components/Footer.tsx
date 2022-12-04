import React from "react";
import { MdOutlineSmartToy } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import IconGitHub from "./Icons/IconGitHub";
import PageHeader from "./PageHeader";
import IconDeveloper from "./Icons/IconDeveloper";
const Footer: React.FC = () => {
  return (
    <div id='Footer' className='w-full pt-24 px-12 h-[25%] '>
      <PageHeader title={"Contact Me"} />
      <div className='flex md:flex-row flex-col md:gap-0 gap-8  justify-between mb-20 mt-18'>
        <div className='flex md:flex-col flex-row  justify-around '>
          <div className='flex   items-center gap-3  '>
            <IconDeveloper/>
            <h1 className='text-md mt-3 sm:mt-0 sm:text-3xl'>
              <span className='text-primary'>De</span>gui
              <span className='text-primary'> Ab</span>do
            </h1>
          </div>
          <p className='text-secendery mx-2 text-xs sm:text-lg text-center mt-4 font-medium'>
            {/* It's always awsome to bring good ideas online. */}
          </p>
        </div>

        <div className='flex items-center justify-center gap-4 '>
          <div className=' flex items-center gap-2 text-primary  text-3xl'>
            <SiMinutemailer />
            <h1 className='text-secendery font-medium text-xs'>
              {/* <span className=' font-bold'> Email me: </span> */}
              abdallah.degui.14@gmail.com
            </h1>
          </div>
          {/* <a
            href='https://www.linkedin.com/in/AbdoDegui/'
            className=' cursor-pointer rounded-full  text-blue-700  text-3xl  '
          >
            <AiFillLinkedin />
          </a> */}
          <a className=' -mt-2 cursor-pointer' href='https://github.com/deguiabdo'>
            <IconGitHub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
