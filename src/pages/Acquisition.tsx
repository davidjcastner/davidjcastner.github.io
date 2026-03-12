import React from 'react';
import './Acquisition.css';

const Acquisition: React.FC = () => {
    return (
        <div className='acquisition'>
            <header className='acquisition-section'>
                <h2><span className='acquisition-prompt'>&gt;</span> cat opportunity.txt</h2>
                <h1>Acquiring Top Talent</h1>
                <p className='acquisition-intro'>
                    I'm a software engineer and artist with experience building scalable web
                    applications. My expertise spans TypeScript, React, Python, SQL, and MongoDB.
                </p>
            </header>

            <section className='acquisition-section'>
                <h2><span className='acquisition-prompt'>$</span> services</h2>
                <ul className='acquisition-list'>
                    <li><span className='tag tag--blue'>Full-Stack Development</span> End-to-end web applications, APIs, and databases</li>
                    <li><span className='tag tag--purple'>UI / UX Engineering</span> Component-driven interfaces with React and TypeScript</li>
                    <li><span className='tag tag--green'>Data & Backend</span> Python scripting, SQL/MongoDB, data pipelines</li>
                    <li><span className='tag tag--cyan'>Creative & Art</span> Digital art, generative visuals, and creative coding</li>
                </ul>
            </section>

            <section className='acquisition-section'>
                <h2><span className='acquisition-prompt'>$</span> contact</h2>
                <p>
                    Reach out directly at{' '}
                    <a href='mailto:davidjcastner@gmail.com' className='acquisition-link'>
                        davidjcastner@gmail.com
                    </a>
                </p>
            </section>

            <section className='acquisition-section'>
                <h2><span className='acquisition-prompt'>$</span> resume</h2>
                <div className='acquisition-resume-buttons'>
                    <a
                        href='https://davidjcastner.github.io/resume'
                        target='_blank'
                        rel='noreferrer'
                        className='acquisition-download'
                    >
                        <span className='material-icons'>open_in_new</span>
                        View Resume
                    </a>
                    <a
                        href='https://davidjcastner.github.io/resume/David_Castner_Resume.pdf'
                        target='_blank'
                        rel='noopener noreferrer'
                        download
                        className='acquisition-download'
                    >
                        <span className='material-icons'>download</span>
                        Download Resume
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Acquisition;
