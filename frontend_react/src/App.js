import React from 'react';

import './App.scss';

import { About, Footer, Header, Skills, Testimonial, Work, Resume } from './container';
import { Navbar } from './components';


const App = () => (
    <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
        <Resume />
    </div>
);

export default App;