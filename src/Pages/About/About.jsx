import React, { useEffect, useState } from 'react';
import CodeBlock from '../../components/CodeBlock/CodeBlock';
import './about.css';
import { useLocation } from 'react-router-dom';

import { aboutMe, personal, hobbies, professionalSummary, professionalSkills, professionalExperience, professionalPhilosophy, professionalGoals, professionalInterest, professionalAchievements, personalHobbies, personalGoals, personalEducation, personalVolunteering, personalProjects, personalTravel, personalWellness, hobbiesGaming, hobbiesNature, hobbiesMusic } from '../../assets/data/data';

const About = () => {
  const location = useLocation();
  const [data, setData] = useState();

  const dataMap = {
    '/about/professional/summary': professionalSummary,
    '/about/professional/skills': professionalSkills,
    '/about/professional/experience': professionalExperience,
    '/about/professional/philosophy': professionalPhilosophy,
    '/about/professional/goals': professionalGoals,
    '/about/professional/interests': professionalInterest,
    '/about/professional/achievements': professionalAchievements,
    '/about/personal': personal,
    '/about/hobbies': hobbies,
    '/about/professional': aboutMe,
    '/about/personal/hobbies': personalHobbies,
    '/about/personal/goals': personalGoals,
    '/about/personal/education': personalEducation,
    '/about/personal/volunteering': personalVolunteering,
    '/about/personal/projects': personalProjects,
    '/about/personal/travel': personalTravel,
    '/about/personal/wellness': personalWellness,
    '/about/hobbies/gaming': hobbiesGaming,
    '/about/hobbies/nature': hobbiesNature,
    '/about/hobbies/music': hobbiesMusic
  };


  useEffect(() => {
    const pathnameData = dataMap[location.pathname] || "Loading Data";
    setData(pathnameData);
  }, [location.pathname]);

  return (
    <section className='about'>
      <p>_personal.md</p>
      <CodeBlock type="long-text" language="markdown" value={`${data != null ? data : "Loading Data"}`} />
    </section>
  )
}

export default About
