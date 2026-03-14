import React from 'react';
import './Coding.css';

const projects = [
    {
        title: 'Inheritance Problem',
        description:
            "A colleague posed an interesting math puzzle: a farmer's will divides 17 horses among 3 heirs using fractions (1/2, 1/3, 1/9) that don't evenly divide — until a neighbor temporarily adds one horse, making 18. Each heir takes their share (9, 6, 2), and the neighbor reclaims the last horse. This Jupyter notebook proves out every valid combination of horses and fractional heirs where this trick works.",
        tags: ['Python', 'Math'],
        links: [
            { label: 'View Project', href: 'https://davidjcastner.github.io/inheritance-problem/' },
        ],
    },
    {
        title: 'Shut The Box',
        description:
            'A colleague asked what the optimal strategy was for Shut the Box — a dice game where you flip down tiles (1–9) that sum to each roll, aiming to clear the board. With only 512 possible board states and 36 dice outcomes, this Jupyter notebook uses dynamic programming and backward induction to exhaustively compute the expected score for every state. It compares the optimal strategy against a human-intuitive "flip highest tiles first" approach, finding the two are nearly identical with negligible differences.',
        tags: ['Python', 'Math'],
        links: [
            {
                label: 'View Project',
                href: 'https://github.com/davidjcastner/shut-the-box/blob/main/shut_the_box.ipynb',
            },
        ],
    },
    {
        title: 'Wordle App and Solver',
        description:
            'A fully playable Wordle clone paired with a Python-based automated solver. The solver uses Shannon entropy to evaluate every possible guess for each candidate word, it simulates all feedback outcomes, groups remaining words by result pattern, and selects the guess that maximizes expected information gain.',
        tags: ['TypeScript', 'React', 'Python'],
        links: [
            { label: 'Web App', href: 'https://davidjcastner.github.io/webapp-wordle/' },
            { label: 'Solver', href: 'https://github.com/davidjcastner/solver-wordle' },
        ],
    },
    {
        title: 'Nonogram Solver',
        description:
            'An interactive web app for solving nonogram (picross) puzzles. Users enter grid dimensions, input their clues, and let the solver work through the puzzle. The algorithm uses iterative constraint propagation — for each row and column, it generates all valid permutations consistent with the clues and current known cells, then marks any cell whose value is agreed upon by every permutation. This repeats until the board is solved or no further progress can be made.',
        tags: ['JavaScript', 'Algorithms'],
        links: [{ label: 'View Project', href: 'https://davidjcastner.github.io/nonogram-solver' }],
    },
    {
        title: 'Factorio Compression Mod',
        description:
            'Factorio is one of my all-time favorite games, a factory-building automation game where optimizing throughput is half the fun. I enjoyed it so much that I decided to learn Lua, build my own mod, and publish it to the Factorio mod portal. The mod adds item and fluid compression to push more material through belts and trains, and joining the modding community around it was just as rewarding as building the factory itself.',
        tags: ['Lua', 'Mod'],
        links: [
            {
                label: 'View Project',
                href: 'https://github.com/davidjcastner/factorio-compression-mod',
            },
        ],
    },
    {
        title: 'NPM Router',
        description:
            'I enjoyed exploring how single-page application routing works under the hood and decided to build my own as a learning experience. The result is a TypeScript routing library for React single page applications, published to npm. It exposes a declarative API, define routes with path segments, authentication requirements, and the component to render, then drop in RouteRegistry, RoutePage, and a Link component. A useLocation hook gives any child component access to parsed URL tokens, query params, and navigation helpers.',
        tags: ['TypeScript', 'React', 'npm'],
        links: [{ label: 'View Project', href: 'https://github.com/davidjcastner/router' }],
    },
];

const Coding: React.FC = () => {
    return (
        <div className="coding-page">
            <h1 className="coding-heading">Coding Projects</h1>
            <p className="coding-intro">
                A collection of personal projects spanning game development, algorithms, tooling,
                and AI. Each one started as curiosity and turned into something I'm proud of.
            </p>
            <p className="coding-footer-note">
                This page highlights a selection of my personal projects. More can be found on my{' '}
                <a
                    href="https://github.com/davidjcastner?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
                .
            </p>
            <div className="coding-grid">
                {projects.map((project) => (
                    <div key={project.title} className="coding-card">
                        <div className="coding-card-header">
                            <span className="material-icons coding-card-icon">code</span>
                            <h2 className="coding-card-title">{project.title}</h2>
                        </div>
                        <p className="coding-card-desc">{project.description}</p>
                        <div className="coding-card-footer">
                            <div className="coding-tags">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="coding-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="coding-card-links">
                                {project.links.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="coding-btn"
                                    >
                                        <span className="material-icons">open_in_new</span>
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Coding;
