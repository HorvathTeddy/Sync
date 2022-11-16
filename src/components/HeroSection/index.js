import React, { useState } from 'react'
import { HeroContainer, HeroBg, VideoBg,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    HeroContent
        } from './HeroElements'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>
                Music Collaboration Made Easy
            </HeroH1>
            <HeroP>
                Create an account and start collaborating. First week is on us!
            </HeroP>
            <HeroBtnWrapper>
                <Button to='mission' smooth={true} duration={500} spy={true} exact='true' offset={-80} onMouseEnter={onHover} onMouseLeave={onHover}  >
                    Get started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
