import React from 'react'
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
       border-2 text-slate-800 shadow-2xl  ${borderColer} flex flex-col gap-2 items-center text-center p-4 h-[230px] sm:h-[280px] rounded-[20px] `}
    >
      <div className='grid place-items-center h-[60%]'>{children}</div>
      <h1 className='font-bold '>{skilName}</h1>
      <p className='md:text-sm text-xs  font-medium'>Experience level</p>
      <div className='w-full h-2  rounded-full bg-slate-300 mt-2 '>
        <div
          className={` ${level}  ${borderColer} rounded-full border-4 h-full 
         `}
        ></div>
      </div>
    </div>
  );
};

export default SkilCard