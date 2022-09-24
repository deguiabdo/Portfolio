import React from 'react'
import {BsFillPersonFill} from "react-icons/bs"
import IconDeveloper from '../Icons/IconDeveloper';
const Home:React.FC = () => {
  return (
    <div
      id='Home'
      className=' w-full text-[#000000d9] justify-around   h-auto min-h-screen flex mt-12 px-12 gap-8'
    >
      <div className=' lg:w-[50%] md:w-[70%] w-full md:text-left text-center font-bold my-auto'>
        <h1 className='text-3xl '>Hello I'm</h1>
        <h1 className='text-3xl '>Degui Abdo</h1>
        <h1 className='text-6xl text-primary my-3'>Full Stack Web Developer</h1>
        <p className='text-md md:text-justify text-center ml-4 my-2  font-semibold'>
          I am familiar with React and TailWind for the Frontend. And Django or
          ASP.NET core for the backend. 
        </p>
        <p className='text-md md:text-justify text-center ml-4 my-2  font-semibold'>
          I have a serious passion for UI effects,
          animations and creating intuitive, dynamic user experiences.
          Well-organised person, problem solver with high
          attention to detail. Interested in the entire frontend spectrum and
          working on ambitious projects with positive people.
        </p>
        <div className='flex items-center md:justify-start justify-center   gap-2'>
          <div className='text-2xl text-primary my-3'>
            <BsFillPersonFill />
          </div>

          <a
            href='#Footer'
            className='  cursor-pointer font-medium text-lg hover:text-primary ease-in-out duration-100'
          >
            Let’s make something special.
          </a>
        </div>
      </div>
      <div className='w-[30%] lg:p-10 p-4 my-auto md:block  rounded-full hidden'>
        <IconDeveloper />
      </div>
    </div>
  );
}

export default Home