import React from 'react';
import LyonSetupMin from '../../static/img/Lyon-Setup-min.JPG';

const About = () => {
  return (
    <div id='about'>
      <h1 className='lg-heading'>
        About <span className='text-secondary'>Me</span>
      </h1>
      <h2 className='sm-heading'>Get to know me a little better!</h2>

      <div className='about-info'>
        <img src={LyonSetupMin} alt='Jesus Rincon' className='bio-image' />

        <div className='bio'>
          <h3 className='text-secondary'>BIO</h3>
          <p>
            My name is Jesus Rincon, I’m 19 years old and I’m a web developer
            with 3 years of experience, I’ve worked in a few professional
            projects and personal projects. I consider myself as an intelligent
            person, kind with the clients and with my co-workers, with no ego,
            always open to learn new things and technologies and able to solve
            complex problems. A few of my hobbies are listen to music, play
            videogames, go out with my friends, coding, learn with tutorials and
            courses and watch movies & tv series.
          </p>
        </div>

        <div className='about-box box-1'>
          <h3>Skills</h3>
          <ul className='skills'>
            <li className='skill'>HTML5</li>

            <li className='skill'>CSS3</li>

            <li className='skill'>JavaScript</li>

            <li className='skill'>ReactJS</li>

            <li className='skill'>Redux</li>

            <li className='skill'>Materialize CSS</li>

            <li className='skill'>Bootstrap</li>

            <li className='skill'>Node.js</li>

            <li className='skill'>Express.js</li>

            <li className='skill'>MySQL</li>

            <li className='skill'>MongoDB</li>

            <li className='skill'>PostgreSQL</li>
          </ul>
        </div>

        <div className='about-box box-2'>
          <h3>Tools</h3>
          <ul className='tools'>
            <li className='tool'>Visual Studio Code</li>

            <li className='tool'>Visual Studio Community</li>

            <li className='tool'>Jira</li>

            <li className='tool'>BitBucket</li>

            <li className='tool'>Git</li>

            <li className='tool'>Git Bash</li>

            <li className='tool'>Postman</li>

            <li className='tool'>Google Chrome</li>

            <li className='tool'>Firefox</li>

            <li className='tool'>Slack</li>
          </ul>
        </div>

        <div className='about-box box-3'>
          <h3>Soft Skills</h3>
          <ul className='soft-skills'>
            <li className='soft-skill'>Communication</li>
            <li className='soft-skill'>Attention to client</li>
            <li className='soft-skill'>No Ego</li>
            <li className='soft-skill'>Empathic</li>
            <li className='soft-skill'>Flexibility</li>
            <li className='soft-skill'>Problem Solver</li>
            <li className='soft-skill'>Kind</li>
            <li className='soft-skill'>Self Taught Person</li>
            <li className='soft-skill'>Team Work</li>
            <li className='soft-skill'>Confident</li>
            <li className='soft-skill'>Happy</li>
            <li className='soft-skill'>Extrovert</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
