import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const SocialMedia = () => {

    const linkedInURL = 'https://www.linkedin.com/in/abbas-mahdavi-9514b7258';
    const githubURL = 'https://github.com/AbbasMahdavi021';

    const goToGithub = () => {
        window.open(githubURL, '_blank');
    }

    const goToLinkedIn = () => {
        window.open(linkedInURL, '_blank');
    }

    return (
        <div className="app__social">
            <div onClick={goToGithub}>
                <BsGithub />
            </div>
            <div onClick={goToLinkedIn}>
                <BsLinkedin />
            </div>
        </div>
    );

}

export default SocialMedia