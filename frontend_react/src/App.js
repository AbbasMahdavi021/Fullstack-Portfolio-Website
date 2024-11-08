import React from 'react';

import './App.scss';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';


const App = () => (
    <div className="app">
        <Navbar />
        <Header />
        <Skills />
        <Work />
        <About />

        {/* <Testimonial /> */}
        <Footer />
        {/* <Resume /> */}
    </div>
);

export default App;