import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faChartLine, faHouseUser, faSun, faMoon, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import covid from '../images/covid.jpg'

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
            <header>
                <h1>COVID 19 Tracker </h1>
                <img src={covid} alt="covid" />
            </header>
            <FontAwesomeIcon onClick={switchTheme}  theme={theme} color={ theme === 'dark' ? 'black' : 'orange'} size='2x'
                icon={theme === 'dark' ? faMoon : faSun} />
            <Link to='/'>
                <FontAwesomeIcon icon={faHouseUser} size='2x' color='blue' />
            </Link>
            <Link to='/news'>
                <FontAwesomeIcon icon={faNewspaper} size='2x' />
            </Link>
            <Link to='/chart/Turkey'>
                <FontAwesomeIcon icon={faChartLine} size='2x' color='red' />
            </Link>
            <FontAwesomeIcon icon={faArrowAltCircleDown} size='2x' color='black'
                onClick={scrollToBottom}
            />
        </nav>
    )
}
