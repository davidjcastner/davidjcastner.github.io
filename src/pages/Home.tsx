import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
    return (
        <>
            <section className='hero'>
                <img
                    className='hero-portrait'
                    src='assets/portrait_abstract_sq.webp'
                    alt='David Castner'
                />
                <div className='terminal'>
                    <div className='terminal-titlebar'>
                        <span className='terminal-dot terminal-dot--red' />
                        <span className='terminal-dot terminal-dot--yellow' />
                        <span className='terminal-dot terminal-dot--green' />
                    </div>
                    <div className='terminal-body'>
                        <p className='terminal-prompt'>{'> whoami'}</p>
                        <p className='terminal-output terminal-output--cyan'>Hello, I'm David Castner!</p>
                        <p className='terminal-prompt'>{'> grep role /'}</p>
                        <p className='terminal-output terminal-output--purple'>Software Engineer, Artist</p>
                        <p className='terminal-prompt'>{'> grep specialties /'}</p>
                        <p className='terminal-output terminal-output--green'>TypeScript, React, Python, SQL, MongoDB</p>
                        <Link to='/acquisition' className='terminal-hire'>&gt; sudo hire</Link>
                    </div>
                </div>
            </section>
            <section className='home-about'>
                <h2 className='home-about-heading'>About</h2>
                <p className='home-about-body'>
                    Hello, I'm David Castner, an experienced and enthusiastic
                    software engineer with a specialization in Python and web
                    development using Typescript and React. Throughout my
                    career, I've developed and maintained web applications for
                    various clients, ranging from local businesses to large
                    corporations. My expertise includes building responsive and
                    visually appealing user interfaces, as well as designing and
                    managing back-end systems using AWS services.
                </p>
                <Link to='/about' className='home-about-btn'>Read More</Link>
            </section>
        </>
    );
};

export default Home;
