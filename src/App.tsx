import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './App.css';
import About from './pages/About';
import Art from './pages/Art';
import Coding from './pages/Coding';
import Acquisition from './pages/Acquisition';
import Home from './pages/Home';

const App: React.FC = () => {
    return (
        <HashRouter>
            <div className="app">
                <NavBar />
                <main className="app-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/coding" element={<Coding />} />
                        <Route path="/art" element={<Art />} />
                        <Route path="/acquisition" element={<Acquisition />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </HashRouter>
    );
};

export default App;
