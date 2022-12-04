import React from 'react'
import { GoPrimitiveDot } from "react-icons/go";
import PageHeader from '../PageHeader';
const About:React.FC = () => {
const [length, setLength] = React.useState<number>(180);
    function slicing(p: string, length: number): string {
      return p?.length > length ? p.slice(0, length) + "..." : p;
    }
    function handelLength():void{
      setLength(prev=>prev===180?2000:180)
    }
    const p: string = `I’m an experienced software developer with 5+ years of experience.
        I create successful responsive websites that are fast, easy to use, and
        built with best practices. The main area of my expertise is front-end
        development, React, TailWind, HTML, CSS, JS, building small and medium web apps, custom
        plugins, features, animations, and coding interactive layouts. I also
        have full-stack developer experience with popular Frameworks like Django and Asp.net core .`;
  return (
    <div id='About' className='pt-24 h-auto  px-12'>
      <PageHeader title={" About me"} />
      <p className='text-center -mt-8 sm:w-[60%] w-full mx-auto mb-8'>
        {slicing(p, length)}
        <span
          onClick={handelLength}
          className='font-semibold text-primary cursor-pointer'
        >
          Reed {length === 180 ? "More" : "less"}
        </span>
      </p>
      <div className=' flex flex-wrap gap-8  justify-around'>
        <div className='border border-primary  w-[380px] shadow-lg pb-3 '>
          <div className='h-12 grid place-items-center  bg-primary mb-4'>
            <h1 className='font-bold text-white'>Education</h1>
          </div>
          <div className=' border-primary border-l-2 m-4'>
            <div className='flex -ml-[13px] my-2 gap-2'>
              <div className='text-2xl  text-primary'>
                <GoPrimitiveDot />
              </div>
              <h1 className='-ml-2'>
                <span className='font-medium'>Master of Engineering in :</span>
                Computer science.
              </h1>
            </div>
            <div className='flex -ml-[13px] my-2 gap-2'>
              <div className='text-2xl  text-primary'>
                <GoPrimitiveDot />
              </div>
              <h1 className='-ml-2'>
                <span className='font-medium'>
                  Master of Science in Engineering :
                </span>
                Wireless sensor networks (WSNs)
              </h1>
            </div>
            <div className='flex -ml-[13px] my-2 gap-2'>
              <div className='text-2xl  text-primary'>
                <GoPrimitiveDot />
              </div>
              <h1 className='-ml-2'>
                <span className='font-medium'> B2 English level:</span>In IELTS
                Academic english.
              </h1>
            </div>
          </div>
          <div className='h-12 grid place-items-center bg-primary mb-4'>
            <h1 className='font-bold text-white'>Certificates</h1>
          </div>
          <div className=' border-primary border-l-2 m-4'>
            <div className='flex -ml-[13px] my-2 gap-2'>
              <div className='text-2xl  text-primary'>
                <GoPrimitiveDot />
              </div>
              <h1 className='-ml-2'>
                <span className='font-medium'>
                  itil® 4 foundation certificate in IT service management
                </span>
              </h1>
            </div>
          </div>
          <div className='h-12 grid place-items-center bg-primary mb-4'>
            <h1 className='font-bold text-white'>Certificate off attendance</h1>
          </div>
          <div className=' border-primary border-l-2 m-4'>
            <div className='flex -ml-[13px] my-2 gap-2'>
              <div className='text-2xl  text-primary'>
                <GoPrimitiveDot />
              </div>
              <h1 className='-ml-2'>
                <span className='font-medium'>Programming in C# </span>
              </h1>
            </div>
            <div className='flex -ml-[13px] my-2 gap-2'>
              <div className='text-2xl  text-primary'>
                <GoPrimitiveDot />
              </div>
              <h1 className='-ml-2'>
                <span className='font-medium'>
                  Developing ASP.NET MVC 4 Web Applications
                </span>
              </h1>
            </div>
            <div className='flex -ml-[13px] my-2 gap-2'>
              <div className='text-2xl text-primary'>
                <GoPrimitiveDot />
              </div>
              <h1 className='-ml-2'>
                <span className='font-medium'>
                  query execution on microsoft sql server
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className='border border-primary  w-[380px] shadow-lg pb-3 '>
          <div className='h-12 grid place-items-center bg-primary mb-4'>
            <h1 className='font-bold text-white'>Experience</h1>
          </div>
          <div className=' border-primary border-l-2 m-4'>
            <div className='flex -ml-[13px] my-2 gap-2'>
              <div className='text-2xl  text-primary'>
                <GoPrimitiveDot />
              </div>
              <h1 className='-ml-2'>
                <span className='font-medium'> Frontend:</span> React js, Next.js, Typescript, Javascript, Zustand, React-Query  TailWind-CSS, CSS, HTML.
                 {/* and
                 (low-level library). However, I have an
                intermediate level and i can work with any top-level CSS
                framework such as bootstrap or Materialize. */}
              </h1>
            </div>
            <div className='flex -ml-[13px] my-2 gap-2'>
              <div className='text-2xl  text-primary'>
                <GoPrimitiveDot />
              </div>
              <h1 className='-ml-2'>
                <span className='font-medium'> Backend:</span> Django framework and ASP.NET core.
              </h1>
            </div>

            <div className='flex -ml-[13px] my-2 gap-2'>
              <div className='text-2xl text-primary'>
                <GoPrimitiveDot />
              </div>
              <h1 className='-ml-2'>
                <span className='font-medium'> DBs:</span> Mango DB and Microsoft SQL Server.
              </h1>
            </div>
            <div className='flex -ml-[13px] my-2 gap-2'>
              <div className='text-2xl text-primary'>
                <GoPrimitiveDot />
              </div>
              <h1 className='-ml-2'>
                <span className='font-medium'> Programming languages:</span>
                (Javascript, Python and C# )
              </h1>
            </div>
            {/* <div className='flex -ml-[13px] my-2 gap-2'>
              <div className='text-2xl text-primary'>
                <GoPrimitiveDot />
              </div>
              <h1 className='-ml-2'>
                <span className='font-medium'> Admin:</span> when clients ask
                for the admin section to manage and view their data, I usually
                go for Django-admin to produce elegant, stable, and powerful
                Admin sections. But I am open to any suggestions to.
              </h1>
            </div> */}
          </div>
        </div>
        <div className='border border-primary  w-[380px] shadow-lg pb-3 '>
          <div className='h-12 grid place-items-center bg-primary mb-4'>
            <h1 className='font-bold text-white'>Personal Qualities</h1>
          </div>
          <div className=' border-primary border-l-2 m-4'>
            <div className='flex -ml-[13px] my-2 gap-2'>
              <div className='text-2xl  text-primary'>
                <GoPrimitiveDot />
              </div>
              <h1 className='-ml-2'>
                <span className='font-medium'> I pick the right tools</span>
              </h1>
            </div>
            <div className='flex -ml-[13px] my-2 gap-2'>
              <div className='text-2xl  text-primary'>
                <GoPrimitiveDot />
              </div>
              <h1 className='-ml-2'>
                <span className='font-medium'>
                I keep my code clean
                </span>
              </h1>
            </div>

            <div className='flex -ml-[13px] my-2 gap-2'>
              <div className='text-2xl text-primary'>
                <GoPrimitiveDot />
              </div>
              <h1 className='-ml-2'>
                <span className='font-medium'>
                Problem-solver, with a can-do attitude
                </span>
              </h1>
            </div>
            <div className='flex -ml-[13px] my-2 gap-2'>
              <div className='text-2xl text-primary'>
                <GoPrimitiveDot />
              </div>
              <h1 className='-ml-2'>
                <span className='font-medium'>
                Willing to adapt
                </span>
              </h1>
            </div>
            <div className='flex -ml-[13px] my-2 gap-2'>
              <div className='text-2xl text-primary'>
                <GoPrimitiveDot />
              </div>
              <h1 className='-ml-2'>
                <span className='font-medium'>
                Efficient through optimization
                </span>
              </h1>
            </div>
            <div className='flex -ml-[13px] my-2 gap-2'>
              <div className='text-2xl text-primary'>
                <GoPrimitiveDot />
              </div>
              <h1 className='-ml-2'>
                <span className='font-medium'>
                Aim for success at the start
                </span>
              </h1>
            </div>
            <div className='flex -ml-[13px] my-2 gap-2'>
              <div className='text-2xl text-primary'>
                <GoPrimitiveDot />
              </div>
              <h1 className='-ml-2'>
                <span className='font-medium'>
                Self-evaluate along the way
                </span>
              </h1>
            </div>
            <div className='flex -ml-[13px] my-2 gap-2'>
              <div className='text-2xl text-primary'>
                <GoPrimitiveDot />
              </div>
              <h1 className='-ml-2'>
                <span className='font-medium'>
                  Comfortable multi-tasking and working as part of a global
                  team, as well as working independently
                </span>
              </h1>
            </div>
            <div className='flex -ml-[13px] my-2 gap-2'>
              <div className='text-2xl text-primary'>
                <GoPrimitiveDot />
              </div>
              <h1 className='-ml-2'>
                <span className='font-medium'>
                  Excellent verbal communication skills
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About