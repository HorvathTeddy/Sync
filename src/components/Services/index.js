import React from 'react'
import { 
ServicesContainer,
ServicesH1,
ServicesWrapper,
ServicesCard,
ServicesIcon,
ServicesH2,
ServicesP } from './ServicesElements'
import Icon1 from '../../images/svg-2.svg'
import Icon2 from '../../images/svg-1.svg'
import Icon3 from '../../images/svg-3.svg'

const services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>
            Our Services
        </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>
                    Artists
                </ServicesH2>
                <ServicesP>
                    We help you find artists.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>
                    Music
                </ServicesH2>
                <ServicesP>
                    Search music uploaded by other artists.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>
                    Messaging
                </ServicesH2>
                <ServicesP>
                    Secure private messaging.
                </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default services
