import styled from 'styled-components';

export const Container = styled.div`
  left: 13%;
  position: relative;
  width: 100%;
  min-height: 120vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .home-text h1 {
    font-size: 2rem;
    color: #fff;
    font-weight: 500;
    text-transform: uppercase;
    font-family: 'Inter', sans-serif;
  }

  .bg {
    width: 100%;
    height: 100%;
  }

  .home-img {
    width: 100%;
    height: 100%;
  }

  .home-img  img {
    width: 60%;
    height: 60%;
  }
`;