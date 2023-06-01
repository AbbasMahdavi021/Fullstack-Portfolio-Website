import React from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { BsDownload } from 'react-icons/bs';

import myResume from './myResume.pdf';

import '../Footer/Footer.scss'


const Resume = () => {

    const downloadResume = () => {

        const link = document.createElement('a');
        link.href = myResume;
        link.download = `Abbas-Mahdavi-Resume.pdf`;
        link.click();
    };

    return (
        <>
            <div className='app__resume-cards'>

                <h2 className="head-text">My Resume</h2>

                <img id="myResume" src={images.myResume} alt="myResume" />

                <div className="app__social">
                    <div onClick={downloadResume}>
                        <BsDownload />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Resume, 'app__resume'),
    'resume',
    'app__primarybg',
);