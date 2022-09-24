import React from "react";
import IconCss from "../Icons/IconCss";
import IconDjango from "../Icons/IconDjango";
import IconJs from "../Icons/IconJs";
import IconReact from "../Icons/IconReact";
import IconTailwind from "../Icons/IconTailwind";
import IconTs from "../Icons/IconTs";
import PageHeader from "../PageHeader";
import SkilCard from "../cards/SkilCard";
import IconDotNet from "../Icons/IconDotNet";
import IconSql from "../Icons/IconSql";

const Skills: React.FC = () => {
  return (
    <div id='Skills' className='w-full pt-24 px-12 h-auto '>
      <PageHeader title={"My Skiils"} />
      <div className='flex gap-4 flex-wrap justify-center '>
        <SkilCard
          skilName={"React"}
          level={"80%"}
          borderColer='#00d8ff'
          skilDescription='I have three years of experience with React. I use it to build Frontend
        Web apps and i love it.'
        >
          <IconReact />
        </SkilCard>
        <SkilCard
          skilName={"Tailwind"}
          level={"50%"}
          borderColer='#89B4FA'
          skilDescription='I have three years of experience with React. I use it to build Frontend
        Web apps and i love it.'
        >
          <IconTailwind />
        </SkilCard>
        <SkilCard
          skilName={"CSS"}
          borderColer='#0B61EE'
          skilDescription='I have three years of experience with React. I use it to build Frontend
        Web apps and i love it.'
        >
          <IconCss />
        </SkilCard>
        <SkilCard
          skilName={"javascript"}
          borderColer='#F7AE32'
          skilDescription='I have three years of experience with React. I use it to build Frontend
        Web apps and i love it.'
        >
          <IconJs />
        </SkilCard>
        <SkilCard
          skilName={"TypeScript"}
          borderColer='#084BB8'
          skilDescription='I have three years of experience with React. I use it to build Frontend
        Web apps and i love it.'
        >
          <IconTs />
        </SkilCard>
        <SkilCard
          skilName={"Django"}
          borderColer='#075239'
          skilDescription='I have three years of experience with React. I use it to build Frontend
        Web apps and i love it.'
        >
          <IconDjango />
        </SkilCard>
        <SkilCard
          skilName={"ASP.NET core"}
          borderColer='#621ee5'
          skilDescription='I have three years of experience with React. I use it to build Frontend
        Web apps and i love it.'
        >
          <IconDotNet />
        </SkilCard>
        <SkilCard
          skilName={"Microsoft Sql Server"}
          borderColer='#a91d22'
          skilDescription='I have three years of experience with React. I use it to build Frontend
        Web apps and i love it.'
        >
          <IconSql />
        </SkilCard>
      </div>
    </div>
  );
};

export default Skills;
