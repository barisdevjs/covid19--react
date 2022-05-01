import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { scrollToBottom } from './Navbar'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer  >
      <FontAwesomeIcon icon={faArrowUp} size='2x' color='red'
        onClick={scrollToTop}
      />
      <FontAwesomeIcon icon={faArrowDown} size='2x' color='red'
        onClick={scrollToBottom}
      />
    </footer>
  )
}

export default Footer
