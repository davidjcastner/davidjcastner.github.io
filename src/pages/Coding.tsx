import React from 'react';
import './Coding.css';

const projects = [
    {
        title: 'Inheritance Problem',
        description:
            'An exploration of object-oriented inheritance patterns and the challenges that arise when designing deep class hierarchies. Demonstrates common pitfalls and cleaner alternatives using composition.',
        tags: ['Python', 'OOP'],
        href: '#',
    },
    {
        title: 'Shut The Box',
        description:
            'A digital implementation of the classic dice game Shut the Box, complete with an AI solver that computes optimal moves using probability and combinatorics.',
        tags: ['Python', 'Game'],
        href: '#',
    },
    {
        title: 'Wordle App and Solver',
        description:
            'A fully playable Wordle clone paired with an automated solver that narrows down candidates using information theory to guess the answer in as few attempts as possible.',
        tags: ['TypeScript', 'React'],
        href: '#',
    },
    {
        title: 'Nonogram Solver',
        description:
            'A constraint-based solver for nonogram (picross) puzzles. Uses line-by-line logic propagation to solve puzzles of arbitrary size without brute force.',
        tags: ['Python', 'Algorithms'],
        href: '#',
    },
    {
        title: 'Starcraft 2 AI',
        description:
            'A bot built with the python-sc2 library that plays StarCraft II autonomously. Implements build order logic, unit micro-management, and basic threat response.',
        tags: ['Python', 'AI'],
        href: '#',
    },
    {
        title: 'Factorio Compression Mod',
        description:
            'A Lua mod for Factorio that adds high-throughput belt compression mechanics, allowing players to move more items per tile and optimize large-scale factory layouts.',
        tags: ['Lua', 'Mod'],
        href: '#',
    },
    {
        title: 'NPM Router',
        description:
            'A lightweight client-side router published to npm. Handles hash and history-based routing with a minimal API, no dependencies, and full TypeScript support.',
        tags: ['TypeScript', 'npm'],
        href: '#',
    },
];

const Coding: React.FC = () => {
    return (
        <div className='coding-page'>
            <h1 className='coding-heading'>Coding Projects</h1>
            <p className='coding-intro'>
                A collection of personal projects spanning game development, algorithms, tooling, and
                AI. Each one started as curiosity and turned into something I'm proud of.
            </p>
            <div className='coding-grid'>
                {projects.map((project) => (
                    <div key={project.title} className='coding-card'>
                        <div className='coding-card-header'>
                            <span className='material-icons coding-card-icon'>code</span>
                            <h2 className='coding-card-title'>{project.title}</h2>
                        </div>
                        <p className='coding-card-desc'>{project.description}</p>
                        <div className='coding-card-footer'>
                            <div className='coding-tags'>
                                {project.tags.map((tag) => (
                                    <span key={tag} className='coding-tag'>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.href}
                                target='_blank'
                                rel='noreferrer'
                                className='coding-btn'
                            >
                                <span className='material-icons'>open_in_new</span>
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Coding;
