import React, {useState} from 'react'
import HeaderTraining from '../components/header/HeaderTraining';
import Sidebar from '../components/sidebar/Sidebar';
import HeroTraining from '../components/training/HeroTraining';
import InfoHero from '../components/homepage/InfoHero';
import DownloadApp from '../components/homepage/DownloadApp';
import Instagram from '../components/homepage/Instagram';
import Footer from '../components/footer/Footer'

const Training = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeaderTraining toggle={toggle}/>
        <HeroTraining />
        <InfoHero />
        <DownloadApp />
        {/* <Instagram /> */}
        <Footer />
    </div>
  )
}

export default Training