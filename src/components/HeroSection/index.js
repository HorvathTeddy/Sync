import React from 'react'

const HeroSection = () => {
  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection
