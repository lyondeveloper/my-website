import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div id='home'>
        <h1 className='lg-heading'>
          Jesús <span className='text-secondary'>Rincón</span>
        </h1>
        <h2 className='sm-heading'>Full Stack Web Developer</h2>

        <div className='icons'>
          <a href='https://www.twitter.com/ilyon_x' target='_blank'>
            <i className='fab fa-twitter fa-2x'></i>
          </a>

          <a href='https://www.facebook.com/jesusrincon28' target='_blank'>
            <i className='fab fa-facebook fa-2x'></i>
          </a>

          <a
            href='https://www.linkedin.com/in/jesusedgardorincon/'
            target='_blank'
          >
            <i className='fab fa-linkedin fa-2x'></i>
          </a>

          <a href='https://github.com/lyondeveloper' target='_blank'>
            <i className='fab fa-github fa-2x'></i>
          </a>

          <a href='https://www.instagram.com/_jesusrincon7/' target='_blank'>
            <i className='fab fa-instagram fa-2x'></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
