import React from 'react'
import {BsFillPersonFill} from "react-icons/bs"
const Home:React.FC = () => {
  return (
    <div
      id='Home'
      className='  w-full text-secendery justify-around  p-20 items-center  h-auto min-h-screen flex flex-col md:flex-row mt-12 px-12 gap-8'
    >
      <div className=' lg:w-[50%] md:w-[60%] w-full md:text-left text-center font-bold my-auto'>
        <h1 className='text-3xl '>Hello I'm</h1>
        <h1 className='text-3xl '>Degui Abdo</h1>
        <h1 className='lg:text-6xl  md:text-5xl text-6xl text-primary my-5'>
          Frontend Web Developer
        </h1>
        <p className='text-md md:text-justify text-center  my-2  font-semibold'>
          I have a serious passion for UI effects, animations and creating
          intuitive, dynamic user experiences. Well-organised person, problem
          solver with high attention to detail. Interested in the entire
          frontend spectrum and working on ambitious projects with positive
          people.
        </p>
      </div>
      <div className='md:w-[40%] sm:w-[70%] lg:p-10 p-4 my-auto   flex flex-col gap-2 '>
        <div className='bg-gradient-to-r p-[6px] rounded-full from-[#2a9d8f]  to-[#6EE7B7]'>
          <img
            className='rounded-full   '
            src='/Portfolio/assetes/degui.PNG'
            alt=' degui abdo'
          />
        </div>
        <div className='flex items-center  justify-center  gap-2'>
          <div className='m:text-xl lg:text-2xl text-primary my-3'>
            <BsFillPersonFill />
          </div>

          <a
            href='#Footer'
            className='  cursor-pointer font-medium text-base lg:text-base  md:text-sm  text-primary '
          >
            <h1 className='text-center'> Let’s make something special.</h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home