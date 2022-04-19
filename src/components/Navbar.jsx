import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faChartLine, faHouseUser, faSun, faMoon, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

export const scrollToBottom = () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth'
    });
};

export default function Navbar({ switchTheme, theme }) {


    return (
        <nav>
        
            <FontAwesomeIcon onClick={switchTheme} /* onChange={setScreenSize} */ theme={theme} color='black' size='2x'
                icon={theme === 'dark' ? faMoon : faSun} />
            <Link to='/'>
                <FontAwesomeIcon icon={faHouseUser} size='2x' color='blue' />
            </Link>
            <Link to='/news'>
                <FontAwesomeIcon icon={faNewspaper} size='2x' />
            </Link>
            <Link to='/chart'>
                <FontAwesomeIcon icon={faChartLine} size='2x' color='red' />
            </Link>
            <FontAwesomeIcon icon={faArrowAltCircleDown} size='2x' color='black'
                onClick={scrollToBottom}
            />
        </nav>
    )
}
