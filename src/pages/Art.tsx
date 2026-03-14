import React, { useState } from 'react';
import './Art.css';

const images = [
    { src: 'assets/artwork/CyberpunkHousePlants.webp', alt: 'Cyberpunk House Plants' },
    { src: 'assets/artwork/SapphireDragonMoltenCore.webp', alt: 'Sapphire Dragon Molten Core' },
    { src: 'assets/artwork/ConfettiDragon.webp', alt: 'Confetti Dragon' },
    { src: 'assets/artwork/LetDreamingDragonsLie.webp', alt: 'Let Dreaming Dragons Lie' },
    { src: 'assets/artwork/AbstractSeahorse.webp', alt: 'Abstract Seahorse' },
    { src: 'assets/artwork/EagleSlayer.webp', alt: 'Eagle Slayer' },
    { src: 'assets/artwork/DragonHead.webp', alt: 'Dragon Head' },
];

const Art: React.FC = () => {
    const [lightbox, setLightbox] = useState<number | null>(null);

    return (
        <div className="art-page">
            <h1>Art</h1>
            <p className="art-intro">
                Art is how I bring the impossible to life. Dragons are my favorite subject —
                mythical and endlessly expressive, they let me push color and form in ways that feel
                truly limitless. I work in both traditional acrylics and digital, each piece an
                attempt to make the fantastical feel tangible.
            </p>
            <div className="art-gallery">
                {images.map((img, i) => (
                    <button key={i} className="art-thumb" onClick={() => setLightbox(i)}>
                        <img src={img.src} alt={img.alt} />
                        <span className="art-thumb-label">{img.alt}</span>
                    </button>
                ))}
            </div>
            {lightbox !== null && (
                <div className="art-lightbox" onClick={() => setLightbox(null)}>
                    <button className="art-lightbox-close" onClick={() => setLightbox(null)}>
                        <span className="material-icons">close</span>
                    </button>
                    <img
                        src={images[lightbox].src}
                        alt={images[lightbox].alt}
                        onClick={(e) => e.stopPropagation()}
                    />
                    <p className="art-lightbox-label">{images[lightbox].alt}</p>
                </div>
            )}
        </div>
    );
};

export default Art;
