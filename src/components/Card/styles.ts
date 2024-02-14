import styled from "styled-components";

export const Container = styled.div`
  .heading {
    text-align: center;
    margin-top: 20px;

    h2 {
      font-size: 1.8rem;
      font-weight: 400;
      font-family: 'Poppins', sans-serif;
    }
  }

  .products-container {
    gap: 1.5rem;
    display: grid;
    margin-top: 2rem;
    margin-left: 3rem;
    margin-right: 3rem;
    grid-template-columns: repeat(3, 1fr);

    .box {
      display: flex;
      padding: 10px;
      position: relative;
      border-radius: 0.5rem;
      flex-direction: column;
      justify-content: center;
      box-shadow: 2px 2px 10px 4px rgb(14 55 54 / 15%);

      img {
       width: 100%;
       padding: 20px;
       height: 250px;
       object-fit: contain;
       border-radius: 0.5rem;
       background-color: #f1f1f1;
       object-position: center;
      }

      h3 {
        font-size: 1rem;
        font-weight: 500;
        font-family: 'Roboto', sans-serif;
        margin: 0.5rem 0 0.5rem;
      }

      .content {
        display: flex;
        align-items: center;
        justify-content: space-around;

        span {
          font-weight: 400;
          border-radius: 4px;
          padding: 0.2rem 1rem;
          color: #242424;
          background: #bc9667;
          font-family: 'Inter', sans-serif;
        }

        button {
          border-radius: 4px;
          padding: 0.2rem 1rem;
          color: #1b1b1b;
          border: 1px solid ;
        }
      }
    }
  }
`;