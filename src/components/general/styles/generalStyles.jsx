import styled, { css, keyframes } from "styled-components"
import { colors } from "../../../assets/colors/Colors"

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 60px;
  position: relative;
  overflow: hidden;
  gap: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1080px){
    padding: 60px 60px;
  }

  @media screen and (max-width: 820px){
    min-height: auto;
  }
`

export const MaxWidth = styled.div`
  max-width: 1380px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.$justify || "space-between"};

  @media screen and (max-width: 1800px){
    max-width: 1200px;
  }

  @media screen and (max-width: 1440px){
    max-width: 1030px;
  }

  @media screen and (max-width: 1180px){
    max-width: 850px;
  }

  @media screen and (max-width: 820px){
    flex-direction: column;
    justify-content: center;
    gap: 40px;
  }
`

export const Light = styled.span`
  aspect-ratio: 1/1;
  border-radius: 1000px;
  position: absolute;
  z-index: -1;

  background-color: ${(props) => 
    props.$blue ? `${colors.lightBlue}` : 
    props.$purple ? `${colors.lightPurple}` : 
    props.$turquoise ? `${colors.lightTurquoise}` : "white"} 
  ;
  
  width: ${(props) => props.$size || ""};
  filter: blur(${(props) => `calc(${props.$size} / 3)` || ""});
  opacity: ${(props) => props.$opacity || "1"};

  left: ${(props) => props.$left ? `calc(-${props.$size} / 2)` : ""};
  right: ${(props) => props.$right ? `calc(-${props.$size} / 2)` : ""};
  top: ${(props) => props.$top ? `calc(-${props.$size} / 2)` : ""};
  bottom: ${(props) => props.$bottom ? `calc(-${props.$size} / 2)` : ""};

  @media screen and (max-width: 1800px){
    transform: scale(.8);
  }

  @media screen and (max-width: 1440px){
    transform: scale(.7);
  }
  
  @media screen and (max-width: 820px){
    transform: scale(.6);
  }

  @media screen and (max-width: 425px){
    transform: ${(props) => props.$mobile ? "scale(.6)" : "scale(.5)"};
    opacity: .3;
  }
`

export const levitate = keyframes`
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