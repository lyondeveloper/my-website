import React from 'react';

const Contact = () => {
  return (
    <div id='contact'>
      <h1 className='lg-heading'>
        Contact <span className='text-secondary'>Me</span>
      </h1>
      <h2 className='sm-heading'>
        Want to set up a project? This is how you reach me!
      </h2>

      <div className='boxes'>
        <div className='box'>
          <span className='text-secondary'>Email:</span>
          contactojesuserincon@gmail.com
        </div>
        <div className='box'>
          <span className='text-secondary'>Phone:</span>
          +56936745917
        </div>
      </div>
    </div>
  );
};

export default Contact;
