import styled, { css, keyframes } from "styled-components"
import { colors } from "../../../assets/colors/Colors"
import { fonts } from "../../../assets/fonts/fontsHandler"

const spinRight = keyframes`
  to {
    transform: rotate(1turn);
  }
`

const spinLeft = keyframes`
  to {
    transform: rotate(-1turn);
  }
`

const levitate = keyframes`
  0% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(-5px);
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const TitleSection = styled.h1`
  font-family: ${fonts.MainTypography};
  color: white;
  font-size: 3rem;
  font-weight: 100;
  text-align: center;
  margin-top: -30px;

  @media screen and (max-width: 1440px){
    font-size: 2.3rem;
    margin-top: -25px;
    margin-bottom: -10px;
  }

  @media screen and (max-width: 820px){
    font-size: 1.9rem;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`

export const LightTurquoiseCentral = styled.span`
  background-color: ${colors.lightTurquoise};
  width: 36%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  filter: blur(100px);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;

  @media screen and (max-width: 1440px){
    filter: blur(80px);
  }

  @media screen and (max-width: 820px){
    filter: blur(50px);
    width: 40%;
  }
`


export const BoxIllustrations = styled.div`
  width: 700px;
  aspect-ratio: 1 / 1;
  position: relative;

  @media screen and (max-width: 1440px){
    width: 400px;
  }

  @media screen and (max-width: 820px){
    width: 100%;
    order: 1;
  }

  @media screen and (max-width: 425px){
    width: 360px;
  }

  @media screen and (max-width: 375px){
    width: 300px;
  }
`

export const AstronautImg = styled.img`
  width: 100%;
  position: absolute;
  animation: ${levitate} 4s ease-in-out infinite;
`

export const EnergyBalls = styled.img`
  width: 100%;
  mix-blend-mode: screen;
  position: absolute;
  animation:${(props) => 
    props.$animation === "spinRight" ? 
    css `${spinRight} 40s linear infinite` : 
    props.$animation === "spinLeft" ? 
    css `${spinLeft} 40s linear infinite` :
    "none"
  };
`

export const BoxButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media screen and (max-width: 820px){
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-top: -20px;
    order: 3;
    gap: 0;
  }
`

export const ContainerIcons = styled.div`
  width: 120px;
  height: 550px;
  padding: 40px 30px;
  border: 1px solid #ffffff7f;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 1440px){
    width: 110px;
    height: 350px;
    padding: 30px;
  }

  @media screen and (max-width: 820px){
    flex-direction: row;
    width: 100%;
    max-width: 100%;
    height: 90px;
    padding: 0px 60px;
    margin-top: -20px;
    gap: 0;
    justify-content: space-between;
    order: 2;
  }

  @media screen and (max-width: 580px){
    padding: 0px 20px;
  }
`

export const BoxIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  animation-delay: ${(props) => props.$animationDelay};
`

export const Icon = styled.img`
  width: 40px;

  @media screen and (max-width: 1440px){
    width: 30px;
  }

  @media screen and (max-width: 375px){
    width: 20px;
  }
`

export const TitleIcon = styled.span`
  font-family: ${fonts.SecundaryTypography};
  color: white;
  font-size: .8rem;
  text-align: center;

  @media screen and (max-width: 1440px){
    font-size: .75rem;
  }

  @media screen and (max-width: 375px){
    font-size: .5rem;
  }
`

export const LightBoxIcons = styled.span`
  background-color: ${(props) => 
    props.$color === "turquoise" ? 
      `${colors.lightTurquoise}` : 
    props.$color === "white" ?
      `#ffffffa2` : "" } ;
  width: 50px;
  height: 280px;
  border-radius: 50%;
  filter: blur(30px);
  opacity: .4;
  z-index: -1;

  position: absolute;
  ${(props) => 
    props.$position === "top" ?
      `
        left: -30px;
        top:  -40px;
      `
      :
      props.$position === "bottom" ?
      `
        right: -30px;
        bottom: -40px;
      `
      : ""}
  z-index: -1;
`