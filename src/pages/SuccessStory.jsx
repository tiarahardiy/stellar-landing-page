import React, {useState} from 'react'
import Footer from '../components/footer/Footer';
import HeaderSuccessStory from '../components/header/HeaderSuccessStory';
import DownloadApp from '../components/homepage/DownloadApp';
import Instagram from '../components/homepage/Instagram';
import Sidebar from '../components/sidebar/Sidebar';
import HeroStory from '../components/success-story/HeroStory';
import StorySlider from '../components/success-story/StorySlider';

const SuccessStory = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeaderSuccessStory toggle={toggle} />
        <HeroStory />
        <StorySlider />
        <DownloadApp />
        <Instagram />
        <Footer />
    </div>
  )
}

export default SuccessStory