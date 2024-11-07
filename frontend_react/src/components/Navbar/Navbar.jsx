import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import myResume from '../../container/Resume/PDF-Resume-Abbas Mahdavi.pdf';


import './Navbar.scss'

import { images } from '../../constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = myResume;
    link.download = `Abbas-Mahdavi-Resume.pdf`;
    link.click();
    setToggle(false)
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href='/'><img src={images.logo} alt="logo" /> </a>
      </div>
      <ul className="app__navbar-links">
        {["home", "experience", "projects", "about", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "experience", "projects", "about", "contact"].map(
                (item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
            <ul>
              <li>
                <br />
                <br />
                <br />
                <br />
                <a
                  href={`https://github.com/AbbasMahdavi021`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setToggle(false)}
                >
                  Github
                </a>
                <br />
                <br />
                <a
                  href={`https://www.linkedin.com/in/abbasmahdavi/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setToggle(false)}
                >
                  LinkedIn
                </a>
                <br />
                <br />
                {/* <a href={'#resume'} onClick={downloadResume}>
                  Download Resume
                </a> */}
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar