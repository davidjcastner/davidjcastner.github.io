import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';

const App: React.FC = () => {
    return (
        <HashRouter>
            <main className='app'>
                <div className='app-content'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                    </Routes>
                </div>
            </main>
        </HashRouter>
    );
};

export default App;
