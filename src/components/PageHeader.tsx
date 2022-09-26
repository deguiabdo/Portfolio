import React from 'react'
interface Props{
    title:string;
}
const PageHeader:React.FC<Props> = ({title}) => {
  return (
    <div className='relative flex mb-12  items-center'>
      <div className='flex-grow border-t border-primary'></div>
      <span className='flex-shrink mx-4 text-3xl sm:text-5xl md:text-6xl font-semibold'>{title}</span>
      <div className='flex-grow border-t border-primary'></div>
    </div>
  );
}

export default PageHeader