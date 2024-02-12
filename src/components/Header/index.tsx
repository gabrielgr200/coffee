import logo from '../../assets/coffee.png';
import { Container, Navbar } from './styles';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTransform, motion, useScroll } from 'framer-motion';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { slideInFromLeft, slideInFromRight } from '../../utils/motion';

const Header: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.188, 0.198], ['0%', '-100%']);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleScroll = () => {
    const header = document.querySelector('header');
    if (header) {
      header.classList.toggle('shadow', window.scrollY > 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container style={{ y }}>
      <Navbar>
        <motion.a initial='hidden' animate='visible' href="/" className='logo'>
          <motion.img variants={slideInFromLeft(0.5)} src={logo} alt="logo do site" />
          <motion.span variants={slideInFromLeft(0.8)}>GGcoffee</motion.span>
        </motion.a>
        <motion.div initial='hidden' animate='visible' variants={slideInFromRight(0.5)} className="header-icon">
          <FontAwesomeIcon icon={faCartShopping} className='fa-solid' />
          <FontAwesomeIcon icon={faSearch} className='fa-solid' id='search-icon' onClick={toggleSearch} />
        </motion.div>
        <div className={`search-box ${isSearchActive ? 'active' : ''}`}>
          <input type="search" name="" id="" placeholder='pesquise o seu café  &#128521;' />
        </div>
      </Navbar>
    </Container>

  );
}

export default Header
