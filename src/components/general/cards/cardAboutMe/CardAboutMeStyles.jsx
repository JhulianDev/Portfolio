import styled, { css } from "styled-components"
import { fonts } from "../../../../assets/fonts/fontsHandler"
import { colors } from "../../../../assets/colors/Colors"

export const CardBox = styled.div`
  width: 414px;
  aspect-ratio: 1/1;
  border: 1px solid #ffffff81;
  border-radius: 20px;
  backdrop-filter: blur(3px);
  padding: 50px;
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1800px){
    width: 350px;
  }

  @media screen and (max-width: 1440px){
    width: 300px;
    padding: 37px;
  }

  @media screen and (max-width: 1180px){
    width: 250px;
    padding: 32px;
  }

  @media screen and (max-width: 900px){
    width: 200px;
    
  }

  @media screen and (max-width: 820px){
    width: 100%;
    padding: 30px;
    aspect-ratio: initial;
    order: 2;
  }

  @media screen and (max-width: 375px){
    padding: 20px;
  }
`

export const Description = styled.p`
  font-family: ${fonts.SecundaryTypography};
  font-size: 1.2rem;
  line-height: 130%;
  color: white;

  @media screen and (max-width: 1800px){
    font-size: 1rem;
  }

  @media screen and (max-width: 1440px){
    font-size: .85rem;
  }

  @media screen and (max-width: 1180px){
    font-size: .72rem;
  }

  @media screen and (max-width: 900px){
    font-size: .6rem;
  }

  @media screen and (max-width: 820px){
    font-size: .9rem;
    text-align: center;
  }

  @media screen and (max-width: 375px){
    font-size: .8rem;
  }
`

export const CardLight = styled.span`
  width: 25%;
  aspect-ratio: 1/1;
  border-radius: 1000px;
  filter: blur(55px);
  position: absolute;
  opacity: ${(props) => props.$opacity || "1"};
  transform: scale(${(props) => props.$scale || "1"});
  z-index: -1;

  background-color: ${(props) => 
    props.$blue ? `${colors.lightBlue}` : 
    props.$purple ? `${colors.lightPurple}` : 
    props.$turquoise ? `${colors.lightTurquoise}` : "white"} 
  ;

  ${(props) => 
    props.$left ? css`
      left: -25px;
    ` : 
    props.$right ? css`
      right: -25px;
    ` : ''
  }

  ${(props) => 
    props.$top ? css`
      top: -25px;
    ` : 
    props.$bottom ? css`
      bottom: -25px;
    ` : ''
  }

  @media screen and (max-width: 1540px){
    filter: blur(40px);
  }
`