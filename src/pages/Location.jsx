import React, {useState} from 'react'
import HeaderLocation from '../components/header/HeaderLocation';
import Sidebar from '../components/sidebar/Sidebar';
import HeroLocation from '../components/location/HeroLocation';
import InfoHero from '../components/homepage/InfoHero';
import SectionLocation from '../components/location/SectionLocation';
import DownloadApp from '../components/homepage/DownloadApp';
import Footer from '../components/footer/Footer';

const Location = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeaderLocation toggle={toggle}/>
        <HeroLocation />
        <InfoHero />
        <SectionLocation />
        <DownloadApp />
        <Footer />
    </div> 
  )
}

export default Location