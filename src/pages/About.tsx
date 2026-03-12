import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <article className='about'>
            <h1 className='about-heading'>About Me</h1>
            <img
                className='about-img'
                src='assets/about_me_01.webp'
                alt='David Castner'
            />
            <p>
                Hello, I'm David Castner, an experienced and enthusiastic
                software engineer with a specialization in Python and web
                development using Typescript and React. Throughout my
                career, I've developed and maintained web applications for
                various clients, ranging from local businesses to large
                corporations. My expertise includes building responsive and
                visually appealing user interfaces, as well as designing and
                managing back-end systems using AWS services.
            </p>
            <p>
                Currently, I work as a Software Engineer at Merck, where I actively
                contribute to the development and maintenance of our proprietary
                reporting tool. Leveraging my knowledge of JavaScript and CSS, I
                address visual bugs and create intuitive dashboards for seamless
                report presentation. My experience with Python allows me to craft
                AWS Glue scripts for automating data processing and develop test
                scripts using Selenium web drivers. Additionally, I'm responsible
                for managing source code repositories in Bitbucket and GitHub,
                providing insights to teammates, and supporting cross-departmental
                teams in overcoming technical challenges. At Merck, I also help onboard new AI coding tools, such as GitHub Copilot, to enhance our development workflow and improve code quality.
            </p>
            <img
                className='about-img'
                src='assets/about_me_02.webp'
                alt='David Castner'
            />
            <p>
                Beyond my work in software engineering, I have a keen interest in
                art, 3D modeling, and mathematics. As a self-taught digital
                designer, I continually push my artistic boundaries by learning new
                tools like Maya, Unity, and Substance Painter, as well as dabbling in traditional mediums such as acrylic painting. I'm also passionate
                about mathematics and often create Jupyter Notebooks to solve
                interesting math problems.
            </p>
            <p>
                When I'm not working or pursuing my creative hobbies, I enjoy
                playing chess and climbing the rating ladder. My interest in chess
                was sparked by the Netflix series, Queen's Gambit, and I love
                playing at local clubs on weekends. I also enjoy cooking for others,
                whether it's just a family meal or a dinner party with friends.
                Additionally, I'm a dog lover and enjoy spending time with my
                lovable giant Irish Wolfhound at the park.
            </p>
        </article>
    );
};

export default About;
