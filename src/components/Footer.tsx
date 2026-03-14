import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>
                &copy;{year} David Castner
                <span className="footer-sep"> | </span>
                <a
                    href="https://github.com/davidjcastner"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link"
                >
                    GitHub
                </a>
                <span className="footer-sep"> | </span>
                <a
                    href="https://www.linkedin.com/in/davidjcastner"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link"
                >
                    LinkedIn
                </a>
            </p>
        </footer>
    );
};

export default Footer;
