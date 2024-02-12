import React from 'react';
import { Main, Section, Sticky } from './styles';
import GlobalStyles from './styles/global';
import Header from './components/Header';
import FirstAndSecond from './components/FirstAndSecond';
import Footer from './components/Footer';
import Third from './components/Third';
import Fourth from './components/Fourth';

function App() {
  React.useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <>
      <GlobalStyles />

      <Main style={{ height: '1610vh' }}>
        <Header />

        <Section style={{ height: '72.7%' }}>
          <FirstAndSecond />
        </Section>

        <Third />

        <Fourth />
        
        <Footer />
      </Main>
    </>
  )
}

export default App