import React from 'react'
import InfoSection from './components/InfoSection'
import InfoData from './data/InfoData'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <InfoSection {...InfoData} />
      <Footer />
    </>
  );
}

export default App;
