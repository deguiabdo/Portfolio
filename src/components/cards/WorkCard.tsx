import React from 'react'
import IconGitHub from '../Icons/IconGitHub';
import IconPreview from '../Icons/IconPreview'
import { GiSandsOfTime } from "react-icons/gi";

const WorkCard:React.FC = () => {
  return (
    <div
      className={`sm:w-[280px] w-[320px] border-2 relative text-slate-800 shadow-2xl  border-blue-600  flex flex-col gap-2  text-center p-2  h-[420px] rounded-[20px] `}
    >
      <img className='w-full h-[40%] rounded-[20px] bg-red-100' src='' alt='' />
      <h1 className='font-bold '>title</h1>
      <p className='text-sm h-[15%]'>
        Duration Estimation - Being a Project ManagerRestaurant Landing page
        based on a Figma design
      </p>
      <div className='flex  justify-around'>
        <div className='flex items-center  gap-1'>
          <GiSandsOfTime />
          <h1 className=' text-xs'>
            Estimated Duration: <span className='font-bold'>5 days</span>
          </h1>
        </div>
      </div>

      <div className='relative flex  items-center'>
        <div className='flex-grow border-t border-gray-400'></div>
        <span className='flex-shrink mx-4 text-xs font-semibold'>
          Tech stack
        </span>
        <div className='flex-grow border-t border-gray-400'></div>
      </div>
      <div className='flex items-center justify-center gap-2 flex-wrap'>
        <div className='py-1 px-2 text-xs max-w-max text-green-800 bg-green-200 rounded-full'>
          Tailwind
        </div>
        <div className='py-1 px-2 text-xs max-w-max text-blue-800 bg-blue-200 rounded-full'>
          React
        </div>
        <div className='py-1 px-2 text-xs max-w-max text-yellow-800 bg-yellow-200 rounded-full'>
          TypeScript
        </div>
        <div className='py-1 px-2 text-xs max-w-max text-red-800 bg-red-200 rounded-full'>
          CSS
        </div>
      </div>
      <div className='flex absolute  bottom-3 text-sm mx-2 font-semibold  justify-between items-center'>
        <a
          href='https://github.com/deguiabdo'
          className='flex gap-2 items-center'
        >
          <IconPreview />
          <h1 className='duration-300 ease-in-out underline hover:text-primary hover:decoration-[#0dcaf0]'>
            Live Preview
          </h1>
        </a>
        <a
          href='https://github.com/deguiabdo'
          className=' ml-10 flex gap-2 items-center'
        >
          <IconGitHub />
          <h1 className='duration-300 ease-in-out  underline hover:text-primary hover:decoration-primary'>
            View Code
          </h1>
        </a>
      </div>
    </div>
  );
}

export default WorkCard