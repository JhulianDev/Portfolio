import styled, { css } from "styled-components"
import { colors } from "../../../assets/colors/Colors"
import { fonts } from "../../../assets/fonts/fontsHandler"
import { Link } from "react-router-dom"
import { levitate } from "../../general/styles/generalStyles"

const titleStyles = css`
  color: ${(props) => props.$color || "white"};
  font-family: ${fonts.MainTypography};
  font-size: calc(2vw + .7rem);
  font-weight: 100;
  line-height: 2.9rem;

  @media screen and (max-width: 1800px){
    line-height: 2.5rem;
  }

  @media screen and (max-width: 1440px){
    line-height: 2.2rem;
  }

  @media screen and (max-width: 820px){
    font-size: calc(2vw + .9rem);
    text-align: center;
    line-height: 1.6rem;
  }

  @media screen and (max-width: 525px){
    font-size: calc(2vw + .8rem);
    line-height: 1.4rem;
  }

  @media screen and (max-width: 375px){
    font-size: calc(2vw + .6rem);
    line-height: 1rem;
  }
`

const paragraphStyles = css`
  color: white;
  font-family: ${fonts.SecundaryTypography};
  font-weight: 400;
`

const moonStyles = css`
  width: 210px;
  height: 210px;
  position: absolute;
  right: 280px;
  top: 0;

  @media screen and (max-width: 1800px){
    width: 180px;
    height: 180px;
    right: 260px;
    top: 20px;
  }

  @media screen and (max-width: 1440px){
    width: 160px;
    height: 160px;
    right: 200px;
  }

  @media screen and (max-width: 1080px){
    width: 150px;
    height: 150px;
    right: 180px;
  }

  @media screen and (max-width: 820px){
    width: 120px;
    height: 120px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-top: -130px;
    margin-left: -90px;
  }
`

export const LightTurquoise = styled.span`
  background-color: ${colors.lightTurquoise};
  width: 300px;
  height: 150px;
  border-radius: 50%;
  filter: blur(100px);

  position: absolute;
  right: 40px;
  bottom: 130px;

  @media screen and (max-width: 1800px){
    width: 220px;
    height: 100px;
    right: 50px;
    bottom: 150px;
    filter: blur(70px);
  }

  @media screen and (max-width: 1440px){
    width: 250px;
    height: 100px;
    right: 15px;
    bottom: 130px;
  }

  @media screen and (max-width: 1080px){
    right: 12px;
    bottom: 80px;
  }

  @media screen and (max-width: 820px){
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-top: 90px;
    margin-left: 20px;
    filter: blur(60px);
  }
`

export const TextsContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 10px;
  z-index: 1;

  @media screen and (max-width: 1440px){
    margin-top: -60px;
  }

  @media screen and (max-width: 820px){
    width: 100%;
    align-items: center;
    margin-top: 20px;
  }
`

export const BoxPresentation = styled.div`
  display: flex;
  gap: 15px;
`

export const Presentation = styled.h2`
  ${titleStyles}
`

export const Name = styled.h2`
  ${titleStyles}

  @media screen and (max-width: 820px){
    margin-left: -8px;
  }
`

export const Role = styled.h3`
  ${titleStyles}
`

export const Description = styled.p`
  ${paragraphStyles}
  font-size: 2vw;
  line-height: 2.5rem;
  max-width: 700px;

  @media screen and (max-width: 1800px){
    line-height: 2.2rem;
    max-width: 600px;
  }

  @media screen and (max-width: 1440px){
    line-height: 1.9rem;
    max-width: 500px;
  }

  @media screen and (max-width: 1080px){
    max-width: 90%;
  }

  @media screen and (max-width: 820px){
    font-size: 1.5rem;
    font-size: 3vw;
    text-align: center;
    max-width: 69%;
  }

  @media screen and (max-width: 525px){
    font-size: .9rem;
    max-width: 280px;
    line-height: 1.2rem;
  }

  @media screen and (max-width: 375px){
    font-size: .7rem;
    max-width: 450px;
  }
`

export const LinkButton = styled(Link)`
  background-color: ${colors.lightPurple};
  color: white;
  font-family: ${fonts.SecundaryTypography};
  font-size: 1.2rem;
  padding: 12px 35px;
  border-radius: 100px;
  margin-top: 10px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all .2s ease;

  &:hover{
    border: 1px solid #ffffffb2;
    box-shadow: 0 0 12px #ffffffac;
    text-shadow: 0 0 10px white;
    background-color: #7b1ab8;
  }

  @media screen and (max-width: 1800px){
    margin-top: 8px;
  }

  @media screen and (max-width: 1440px){
    font-size: 1.1rem;
    margin-top: 5px;
  }

  @media screen and (max-width: 1080px){
    font-size: 1rem;
  }

  @media screen and (max-width: 820px){
    display: none;
  }
`

export const IllustrationsContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  @media screen and (max-width: 820px){
    width: 100%;
    justify-content: center;
  }
`

export const AstronautImg = styled.img`
  width: 450px;
  margin-top: 50px;
  animation: ${levitate} 4s ease-in-out infinite;
  z-index: 5;

  @media screen and (max-width: 1800px){
    width: 400px;
  }

  @media screen and (max-width: 1440px){
    width: 350px;
  }

  @media screen and (max-width: 1080px){
    width: 300px;
  }
`

export const MoonImg = styled.img`
  ${moonStyles};
  z-index: 1;
`

export const StarsImg = styled.img`
  width: 340px;
  position: absolute;
  right: 210px;
  top: 16px;
  margin-top: -90px;
  mix-blend-mode: screen;

  @media screen and (max-width: 1800px){
    width: 260px;
    right: 215px;
    top: 50px;
  }

  @media screen and (max-width: 1440px){
    width: 240px;
    right: 160px;
    top: 72px;
  }

  @media screen and (max-width: 1080px){
    right: 132px;
  }

  @media screen and (max-width: 820px){
    width: 190px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-top: -155px;
    margin-left: -86px;

  }
`

export const LightMoon = styled.span`
  ${moonStyles};
  background-color: #ffffff;
  border-radius: 1000px;
  filter: blur(30px);
`