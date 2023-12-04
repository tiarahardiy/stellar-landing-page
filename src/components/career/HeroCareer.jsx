import React from 'react'
import { Text1, Text2, Text3, TextBold } from '../privilige/PriviligeElement'
import { HeroCareerImg } from './CareerElement'

const HeroCareer = () => {
  return (
    <div>
      <HeroCareerImg>
        <Text1>Join us as a Coach</Text1>
        <Text2>"Train people well enough so they <TextBold>can leave,</TextBold> <br></br> treat them well enough so they <TextBold>don't want to."</TextBold></Text2>
        <Text3>- Richard Branson, Founder of Virgin Group</Text3>
      </HeroCareerImg>
    </div>
  )
}

export default HeroCareer