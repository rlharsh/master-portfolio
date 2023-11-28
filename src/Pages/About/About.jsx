import React from 'react';
import CodeBlock from '../../components/CodeBlock/CodeBlock';
import './about.css';

import { aboutMe } from '../../assets/data/data';

const About = () => {
  return (
    <section className='about'>
      <p>md</p>
      <CodeBlock type="long-text" language="markdown" value={`${aboutMe}`} />
    </section>
  )
}

export default About
