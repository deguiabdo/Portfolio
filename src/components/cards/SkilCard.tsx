import React from 'react'
import { BsGear } from 'react-icons/bs';
interface Props {
  children: JSX.Element;
  borderColer: string;
  skilName: string;
  skilDescription: string;
  level?:string;
}
const SkilCard: React.FC<Props> = ({
  children,
  borderColer,
  skilName,
  skilDescription,
  level
}) => {



  return (
    <div
      className={`sm:w-[220px] w-[180px] 
       border-2 text-slate-800 shadow-2xl  border-[${borderColer}]  flex flex-col gap-2 items-center text-center p-2 h-[260px] sm:h-[320px] rounded-[20px] `}
    >
      <div className='grid place-items-center h-[50%]'>{children}</div>
      <h1 className='font-bold '>{skilName}</h1>
      <p className='md:text-sm text-xs'>{skilDescription}</p>
      <div className='w-full h-2  rounded-full bg-slate-300'>
        <div
          className={`w-[${level}]  border-[${borderColer}] rounded-full border-4 h-full 
         `}
        ></div>
      </div>
    </div>
  );
};

export default SkilCard