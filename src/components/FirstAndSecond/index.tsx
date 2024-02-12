import React from 'react';
import bg from '../../assets/cafe.jpg';
import { Sticky } from '../../styles';
import main from '../../assets/main.png';
import { Container } from './styles';
import cafe from '../../assets/footer-bg.jpg';
import person from '../../assets/person.avif';
import { slideInFromLeft } from '../../utils/motion';
import { useTransform, motion, useScroll } from 'framer-motion';


const FirstAndSecond: React.FC = () => {
  const { scrollYProgress } = useScroll()

  const frameOpacity = useTransform(scrollYProgress, [0.196, 0.198], [0, 1])
  const frameScale = useTransform(scrollYProgress, [0.558, 0.627], [0.511, 0.8])

  return (
    <Sticky className="second">
      <First />

      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100vh',
          borderRadius: '4px',
          border: '4px solid #fff',
          opacity: frameOpacity,
          scale: frameScale
        }}
      />
    </Sticky>
  )
}

const First: React.FC = () => {
  const { scrollYProgress } = useScroll()
  const firstRadius = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [0, 4, 4, 0]
  )
  const firstScale = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [1, 0.511, 0.511, 1]
  )
  const leftSideHeight = useTransform(
    scrollYProgress,
    [0, 0.058],
    ['20vh', '100vh']
  )
  const rightSideScale = useTransform(
    scrollYProgress,
    [0.047, 0.093],
    [0, 0.511]
  )
  const rightSideY = useTransform(
    scrollYProgress,
    [0.047, 0.093],
    ['58vh', '0vh']
  )
  const offsetY = useTransform(
    scrollYProgress,
    [0.328, 0.397, 0.461, 0.53],
    ['0%', '-100%', '-100%', '-200%']
  )

  return (
    <Sticky
      className="firsted"
      style={{
        borderRadius: firstRadius,
        scale: firstScale
      }}
    >
      <motion.div
        className="offs"
        initial='hidden'
        animate='visible'
        style={{
          y: offsetY
        }}
      >
        <div className="a">
          <motion.div
            variants={slideInFromLeft(0.6)}
            className="left-side"
            style={{
              height: leftSideHeight
            }}
          >
            <Container>
              <section className='home' id='homr'>
                <div className="home-text">
                  <h1>Comece o dia com café</h1>
                </div>
                <div className="home-img">
                  <img src={main} alt="imagem de café" />
                </div>
              </section>
            </Container>
          </motion.div>
          <div className="right-side">
            <motion.div
              className="right-image"
              style={{
                y: rightSideY,
                scale: rightSideScale
              }}
            >
              <img src={person} alt="pessoa tomando café" />
            </motion.div>
          </div>
        </div>

        <div className="b">
          <img src={cafe} alt="café" />
        </div>
        <div className="c">
          <img src={bg} alt="imagem da GGcoffee" />
        </div>
      </motion.div>
    </Sticky>
  )
}

export default FirstAndSecond
