import React from 'react'
import Register from '../../pages/Register'
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
//import Image1 from '../../images/svg-1.svg'
//import { homeObjOne } from './Data'

const InfoSection = ({img, id, topLine, headLine, description, alt, imgStart, buttonName, to}) => {
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
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
                        <Button to={to} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                          {buttonName}
                        </Button>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                    <Img src={img} alt={alt}/>
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>

    </>
  )
}

export default InfoSection
