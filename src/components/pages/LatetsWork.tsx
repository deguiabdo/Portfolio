import React from 'react'
import PageHeader from '../PageHeader';
import WorkCard from '../cards/WorkCard';

const LatetsWork: React.FC = () => {
  return (
    <div id='Work' className='w-full  h-auto pt-24 px-12 '>

      <PageHeader title={"Latest Work"} />
      <div className='flex gap-6 flex-wrap justify-center '>
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </div>
  );
};

export default LatetsWork