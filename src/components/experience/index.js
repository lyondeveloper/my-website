import React from 'react';

const Experience = () => {
  return (
    <div id='experience'>
      <h1 className='lg-heading'>
        My <span className='text-secondary'>Experience</span>
      </h1>
      <h2 className='sm-heading'>
        In this section you'll find my experience as web developer
      </h2>
      <div className='experiences'>
        <div className='experience-item'>
          <h2>Freelancer</h2>
          <h3>
            <span className='text-secondary'>Date:</span> 2017 - 2018
          </h3>
          <h3>
            <span className='text-secondary'>Company:</span> None
          </h3>
          <p>
            I started as a full-time freelancer looking for clients to work
            with. In this period of time I created a school management system
            for a school situated in Venezuela.
          </p>
        </div>
        <div className='experience-item'>
          <h2>Full-Stack Developer</h2>
          <h3>
            <span className='text-secondary'>Date:</span> 2018 - 2019
          </h3>
          <h3>
            <span className='text-secondary'>Company:</span> SoftArs
          </h3>
          <p>
            My goal was to create full-stack applications as a service and for
            clients using ReactJS and Node.js as technologies. In my time there
            I learned a lot about team work, React, Node, Communication,
            application flow, metodologies of work, etc.
          </p>
        </div>
        <div className='experience-item'>
          <h2>Freelancer</h2>
          <h3>
            <span className='text-secondary'>Date:</span> 2019 - Today
          </h3>
          <h3>
            <span className='text-secondary'>Company:</span> None
          </h3>
          <p>
            At this time I'm a full-time freelancer again looking for clients to
            work with. Since I started, I created a administration system for
            the company called Rimeim from Costa Rica. At the time I'm open to
            accept any job that is convenient with my skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
