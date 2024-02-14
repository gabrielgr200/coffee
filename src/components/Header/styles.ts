import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.header)`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  z-index: 9999;
`;

export const Navbar = styled.div`
  top: 0;
  right: 0;
  width: 100%;
  display: flex;
  padding: 18px 100px;
  align-items: center;
  transition: .5s linear;
  justify-content: space-between;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    text-decoration: none;

    span {
      font-size: 1.5rem;
      font-weight: 400;
      color: #242424;
      margin-right: 10px;
      font-family: 'Poppins', sans-serif;
    }
  }

  .logo img {
    width: 60px;
  }

  .navbar {
    display: flex;
  }

  li {
    list-style: none;
  }

  .header-icon {
    display: flex;
    z-index: 10000;
    font-size: 22px;
    cursor: pointer;
    column-gap: 0.8rem;
  }

  .header-icon .fa-solids {
    color: #bc9667;
  }

  .search-box {
    top: -100%;
    left: 50%;
    width: 100%;
    position: absolute;
    transform: translate(-50%);
    background: #fff;
  }

  .search-box.active {
    top: 110%;
    transition: .2s all linear;
  }

  .search-box input {
    width: 100%;
    border: none;
    outline: none;
    padding: 20px;
    font-size: 1rem;
    color: #bc9667;
  }

  .search-box input::placeholder {
    font-size: 1rem;
    font-weight: 500;
  }
`;
