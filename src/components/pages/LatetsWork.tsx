import React from 'react'
import PageHeader from '../PageHeader';
import WorkCard from '../cards/WorkCard';
import { Work } from '../../types';
const LatetsWork: React.FC = () => {

  const works: Array<Work> = [
    {
      img: "/Portfolio/assetes/Essekna.png",
      title: "Essekna",
      description:
        " Real estate platform UI with (Bootstrap,JavaScript, CSS, HTML) based on client design",
      duration: "3 weeks",
      tech: ["Bootstrap", "JavaScript", "CSS", "HTML"],
      previewLink: "https://www.essekna.com/",
      codeLink: "https://github.com/deguiabdo",
    }
    ,
    {
      img: "/Portfolio/assetes/law.PNG",
      title: "Law firm",
      description:
        "Service-related law website. Built the front-end with Tailwind and React",
      duration: "3 days",
      tech: ["React", "Tailwind", "Css"],
      previewLink: "https://lawways-moeen.web.app/",
      codeLink: "https://github.com/deguiabdo/Law-firm",
    },
    {
      img: "/Portfolio/assetes/imgNiblle.png",
      title: "Food Delivery Service",
      description:
        "Delivery food service UI  based on given figma design with 2 breakpoints tablet and large screen",
      duration: "15 days",
      tech: ["React", "Tailwind", "Css"],
      previewLink: "https://deguiabdo.github.io/delivery-react-app/",
      codeLink: "https://github.com/deguiabdo/delivery-react-app",
    },
    {
      img: "/Portfolio/assetes/PortFolio.PNG",
      title: "My portfolio",
      description: "This is the current portfolio you are in",
      duration: "3 days",
      tech: ["React", "TypeScript", "Tailwind", "Css"],
      previewLink: "https://deguiabdo.github.io/Portfolio/",
      codeLink: "https://github.com/deguiabdo/Portfolio",
    },
    {
      img: "/Portfolio/assetes/imgDelevry.png",
      title: "Nibble ",
      description:
        " food delivery service ui  based on given figma design with 2 breakpoints tablet and large screen ",
      duration: "13 days",
      tech: ["Tailwind", "Css", "JavaScript"],
      previewLink: "https://deguiabdo.github.io/delivery-react-app/",
      codeLink: "https://github.com/deguiabdo/nibbel",
    },
    {
      img: "/Portfolio/assetes/netflix-bg-img.jpg",
      title: "Netflix Fans",
      description:
        "front-end Netflix clone with using TMDB API for all of the data",
      duration: "2 days",
      tech: ["React", "Tailwind", "Css"],
      previewLink: "https://deguiabdo.github.io/netflix-react-app/",
      codeLink: "https://github.com/deguiabdo/netflix-react-app",
    },
    {
      img: "/Portfolio/assetes/Tenzies.PNG",
      title: "Tenzies Game challenge",
      description: "My Challeng to build a Tenzies game in 3 hours  ",
      duration: "4 hours",
      tech: ["React", "Tailwind", "Css", "javaScript"],
      previewLink: "https://deguiabdo.github.io/Tenzies/",
      codeLink: "https://github.com/deguiabdo/Tenzies",
    },
  ];

  return (
    <div id='Work' className='w-full  h-auto pt-24 px-12 '>
      <PageHeader title={"Latest Work"} />
      <div className='flex gap-6 lg:gap-20 flex-wrap justify-center '>
       
        {works.map((item) => (
          <WorkCard
            key={Date.now()}
            img={item.img}
            title={item.title}
            description={item.description}
            duration={item.duration}
            tech={item.tech}
            previewLink={item.previewLink}
            codeLink={item.codeLink}
          />
        ))}
      </div>
    </div>
  );
};

export default LatetsWork