import React from 'react';

import './home.css';
import CodeBlock from '../../components/CodeBlock/CodeBlock';

const Home = () => {
  return (
    <div className="main-container">
        <section className='introduction'>
            <div className='introduction__top'>
                <div className="green-blob">d</div>
                <div className="blue-blob"></div>
                <p>Hello there. I am</p>
                <h1>Ronald Harsh</h1>
                <p><span className="green">> Front-end developer</span></p>
            </div>

            <CodeBlock
  language="javascript"
  value={
`// find my profile on Github:

const githubLink = "https://github.com/rlharsh";`
  }
/>


        </section>
    </div>
  )
}

export default Home
