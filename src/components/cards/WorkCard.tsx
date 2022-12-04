import React from "react";
import IconGitHub from "../Icons/IconGitHub";
import IconPreview from "../Icons/IconPreview";
import { GiSandsOfTime } from "react-icons/gi";
import {Work} from "../../types"


const WorkCard: React.FC<Work> = ({
  img,
  title,
  description,
  duration,
  tech,
  previewLink,
  codeLink,
}) => {
  return (
    <div
      className={`sm:w-[280px] w-[320px] border-2 relative text-slate-800 shadow-2xl   border-primary  flex flex-col gap-2  text-center p-2  h-[420px] rounded-[20px] `}
    >
      <img className='w-full h-[40%] rounded-[20px] p-2' src={img} alt='' />
      <h1 className=' font-bold  text-sm text-secendery '>{title}</h1>
      <p className='text-sm h-[15%]'>{description}</p>
      <div className='flex  justify-around'>
        <div className='flex items-center  gap-1'>
          <GiSandsOfTime />
          <h1 className=' text-xs'>
            Estimated Duration: <span className='font-bold'>{duration}</span>
          </h1>
        </div>
      </div>

      <div className='relative flex  items-center'>
        <div className='flex-grow border-t border-gray-400'></div>
        <span className='flex-shrink text-primary mx-4 text-xs font-semibold'>
          Tech stack
        </span>
        <div className='flex-grow border-t border-gray-400'></div>
      </div>
      <div className='flex items-center justify-center gap-2 flex-wrap'>
        {tech[0] && (
          <div className='py-1 px-2 text-xs max-w-max text-green-800   rounded-full'>
            {tech[0]}
          </div>
        )}
        {tech[1] && (
          <div className='py-1 px-2 text-xs max-w-max text-blue-800    rounded-full'>
            {tech[1]}
          </div>
        )}
        {tech[2] && (
          <div className='py-1 px-2 text-xs max-w-max text-yellow-800    rounded-full'>
            {tech[2]}
          </div>
        )}
        {tech[3] && (
          <div className='py-1 px-2 text-xs max-w-max text-red-800   rounded-full'>
            {tech[3]}
          </div>
        )}
      </div>
      <div className='flex absolute  bottom-3 text-sm mx-2 font-semibold  justify-between items-center'>
        <a href={previewLink} className='flex gap-2 items-center'>
          <IconPreview />
          <h1 className='duration-300 ease-in-out underline hover:text-primary hover:decoration-[#0dcaf0]'>
            Live Preview
          </h1>
        </a>
        <a href={codeLink} className=' ml-10 flex gap-2 items-center'>
          <IconGitHub />
          <h1 className='duration-300 ease-in-out  underline hover:text-primary hover:decoration-primary'>
            View Code
          </h1>
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
