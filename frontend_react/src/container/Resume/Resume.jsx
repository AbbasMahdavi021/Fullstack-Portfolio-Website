import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

const Resume = () => {

    return (
        <>
            <h2 className="head-text">My Resume</h2>

            <div className="app__footer-cards">
                <button type="button" className="p-text" >Download Resume</button>

            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Resume, 'app__resume'),
    'resume',
    'app__primarybg',
);