import React from 'react'
import PageHeader from '../PageHeader';
import WorkCard from '../cards/WorkCard';
import { Work } from '../../types';
const LatetsWork: React.FC = () => {

  const works: Array<Work> = [
    {
      img: "/assetes/imgDelevry.png",
      title: "Nibble ",
      description: " food delivery service ui  based on given figma design ",
      duration: "14 days",
      tech: ["Tailwind", "Css", "JavaScript"],
      previewLink: "",
      codeLink: "https://github.com/deguiabdo/nibbel",
    },
    {
      img: "/assetes/imgNiblle.png",
      title: "Food Delivery Service",
      description:
        "Delivery food service UI  based on given figma design with 2 breakpoints",
      duration: "18 days",
      tech: ["React", "Tailwind", "Css"],
      previewLink: "",
      codeLink: "https://github.com/deguiabdo/delivery-react-app",
    },
    {
      img: "/assetes/PortFolio.PNG",
      title: "My portfolio",
      description: "This is the current portfolio you are in",
      duration: "3 days",
      tech: ["React", "TypeScript", "Tailwind", "Css"],
      previewLink: "",
      codeLink: "https://github.com/deguiabdo/Portfolio",
    },
    {
      img: "/assetes/netflix-bg-img.jpg",
      title: "Netflix Fans",
      description:
        "front-end Netflix clone with using TMDB API for all of the data",
      duration: "2 days",
      tech: ["React", "Tailwind", "Css"],
      previewLink: "",
      codeLink: "https://github.com/deguiabdo/netflix-react-app",
    },
    {
      img: "/assetes/Tenzies.PNG",
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
      <div className='flex gap-6 flex-wrap justify-center '>
       
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