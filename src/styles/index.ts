import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Main = styled.main`
  .firsted {
    overflow: hidden;

    .offs {
      width: 100%;
      height: 100%;
    }

    .a {
      background: #f5f1ea;
      height: 100%;
      display: flex;
      align-items: flex-end;

      .left-side {
        width: 50%;
        height: 100%;
        background: #bc9667;

        .bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .right-side {
        width: 50%;
        height: 100%;

        .right-image {
          background: #bc9667;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 14px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
    .b {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .c {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .second {
    background: #8d4925;
  }
  .third {
    background: #f5f1ea;
  }
  .fourth {
    background: #f5f1ea;
  }
`

export const Section = styled.div`
  position: relative;
`

export const Sticky = styled(motion.div)`
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`
