import styled, { css, keyframes } from "styled-components"
import { colors } from "../../../../assets/colors/Colors"
import { fonts } from "../../../../assets/fonts/fontsHandler"

const spin = keyframes`
  to {
    transform: rotate(-1turn);
  }
`

export const BoxButton = styled.button`
  background-color: transparent;
  color: white;
  width: 160px;
  height: 40px;
  border-radius: 100px;
  border: 1px solid #ffffff7f;
  backdrop-filter: blur(3px);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .1s ease;

  &:hover{
    box-shadow: 0 0 10px #ffffffea;
  }

  &:active{
    transform: scale(.97);
  }

  ${(props) => props.$active && css`
    text-shadow: 0 0 10px white;
    box-shadow: 0 0 10px #ffffffea;

    @media screen and (max-width: 425px) {
      text-shadow: 0 0 8px #ffffffd1;
      box-shadow: 0 0 8px #ffffff94;
    }
  `}

  ${(props) => props.$active && css`
    &::before {
      content: "";
      width: 160px;
      height: 160px;
      background-image: conic-gradient(white 5deg, transparent 220deg);
      position: absolute;
      animation: ${spin} 6s linear infinite;
      z-index: -1;
    }
  `}

${(props) => props.$active && css`
    &::after {
      content: "";
      width: 156px;
      height: 36px;
      border-radius: 100px;
      background-color: #16093D;
      position: absolute;
      z-index: -1;

      @media screen and (max-width: 1440px) {
        width: 137px;
      }

      @media screen and (max-width: 580px){
        width: 87px;
      }

      @media screen and (max-width: 425px){
        width: 78px;
        height: 31px;
      }
    }
  `}

  @media screen and (max-width: 1440px){
    width: 140px;
  }

  @media screen and (max-width: 580px){
    width: 90px;
  }

  @media screen and (max-width: 425px){
    width: 80px;
    height: 34px;
  }
`

export const TextButton = styled.span`
  font-family: ${fonts.SecundaryTypography};
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;

  @media screen and (max-width: 1440px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 820px){
    font-size: 1rem;
  }

  @media screen and (max-width: 375px){
    font-size: .8rem;
  }
`

export const LightButton = styled.span`
  background-color: ${(props) =>
    props.$color === "turquoise" ?
      `${colors.lightTurquoise}` :
      props.$color === "purple" ?
        `${colors.lightPurple}` : ""} ;
  width: 80px;
  height: 20px;
  border-radius: 50%;
  filter: blur(10px);
  opacity: .4;
  z-index: 1;

  position: absolute;
  ${(props) =>
    props.$position === "top" ?
      `
        left: -16px;
        top:  -12px;
      `
      :
      props.$position === "bottom" ?
        `
        right: -16px;
        bottom: -12px;
      `
        : ""}

  @media screen and (max-width: 425px){
    opacity: .28;
  }
`