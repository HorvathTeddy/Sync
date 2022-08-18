import React from 'react'
import { Button } from '../ButtonElement'
import {
InfoContainer,
InfoWrapper,
InfoRow,
Column1,
TextWrapper,
TopLine,
Heading,
Subtitle,
BtnWrap,
Column2,
ImgWrap,
Img } from './InfoElements'
import Image1 from '../../images/svg-1.svg'
//import { homeObjOne } from './Data'

const InfoSection = ({id, topLine, headLine, description, alt}) => {
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
            <InfoRow>
                <Column1>
                <TextWrapper>
                    <TopLine>
                        {topLine}
                    </TopLine>
                    <Heading >
                        {headLine}
                    </Heading>
                    <Subtitle >
                        {description}
                    </Subtitle>
                    <BtnWrap>
                        <Button to='home'>Get started</Button>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                    <Img src={Image1} alt={alt}/>
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>

    </>
  )
}

export default InfoSection
