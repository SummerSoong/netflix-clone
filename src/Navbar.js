import React, {useState, useEffect} from 'react';
import './Navbar.css'

function Navbar() {

  const [show, handleShow] = useState(false);
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    }
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])
  return (
    <div className={`nav ${show && "nav__black"}`}>
    <img
      className='nav__logo'
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/440px-Netflix_2015_logo.svg.png'
      alt='logo'
    />
    <img
      className='nav__avatar'
      src='https://i.redd.it/ty54wbejild91.jpg'
      alt='logo'
    />

    </div>
  )
}

Navbar.propTypes = {

}

export default Navbar
