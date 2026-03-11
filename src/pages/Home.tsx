import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
    return (
        <section className='hero'>
            <img
                className='hero-portrait'
                src='assets/images/portrait_abstract_sq.webp'
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
    );
};

export default Home;
