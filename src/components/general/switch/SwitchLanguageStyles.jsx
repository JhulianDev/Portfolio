import styled, { css, keyframes } from "styled-components";
import { colors } from "../../../assets/colors/Colors";

const DelayAnimation = keyframes`
  0% {
    opacity: 0;
  }
  15% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const MainContainer = styled.div`
  position: fixed;
  top: 30px;
  right: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 10s ease;
  gap: 8px;
  z-index: 20;

  @media screen and (max-width: 820px){
    display: ${(props) => props.$showMobile ? "flex" : "none"};
    top: 28px;
    left: 40px;
    right: auto;
    transition: all 10s ease;
    animation: ${DelayAnimation} 1s ease;
  }

  @media screen and (max-width: 425px){
    left: 30px;
  }
`

export const Label = styled.label`
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 1.8em;
`

export const Icon = styled.img`
  width: 25px;
`

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  inset: 0;
  border: 2px solid #414141;
  border-radius: 50px;
  box-shadow: 0 0 20px ${colors.lightPurple};
  border: 2px solid ${colors.lightPurple};
  backdrop-filter: blur(3px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  display: flex;
  align-items: center;

  @media screen and (max-width: 820px){
    box-shadow: 0 0 12px ${colors.lightPurple};
  }

  ${(props) => props.$isToggle && css`
      box-shadow: 0 0 20px ${colors.lightBlue};
      border: 2px solid #0974f1;

      @media screen and (max-width: 820px){
        box-shadow: 0 0 12px ${colors.lightBlue};
      }
    `}

  &:before{
    position: absolute;
    content: "";
    height: 1.2em;
    width: 1.2em;
    left: 0.4em;
    background-color: #ffffff;
    border-radius: inherit;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);

    ${(props) => props.$isToggle && css`
      transform: translateX(1.4em);
    `}
  }
`

export const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`