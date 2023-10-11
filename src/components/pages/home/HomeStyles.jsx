import styled, { css } from "styled-components"
import { colors } from "../../../assets/colors/Colors"
import { fonts } from "../../../assets/fonts/fontsHandler"

const titleStyles = css`
  color: ${(props) => props.$color || "white"};
  font-family: ${fonts.MainTypography};
  font-size: calc(2vw + .7rem);
  font-weight: 100;

  @media screen and (max-width: 820px){
    font-size: calc(2vw + .9rem);
    text-align: center;
    line-height: 1.6rem;
  }

  @media screen and (max-width: 525px){
    font-size: calc(2vw + .8rem);
    line-height: 1.5rem;
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

  @media screen and (max-width: 1440px){
    width: 160px;
    height: 160px;
    right: 200px;
    top: 20px;
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

export const Section = styled.section`
  background-color: #16093D;
  width: 100%;
  min-height: 100vh;
  padding: 0px 120px;
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1080px){
    padding: 60px 60px;
  }

  @media screen and (max-width: 425px){
    padding: 20px 60px;
  }
`

export const MaxWidth = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 820px){
    flex-direction: column;
    justify-content: center;
  }
`

export const LightBlue = styled.span`
  background-color: ${colors.lightBlue};
  width: 60%;
  height: 300px;
  border-radius: 100%;
  filter: blur(80px);

  position: absolute;
  top: -150px;
  right: -20%;

  @media screen and (max-width: 1440px){
    height: 200px;
  }
`

export const LightPurple = styled.span`
  background-color: ${colors.lightPurple};
  width: 800px;
  height: 800px;
  border-radius: 1000px;
  filter: blur(200px);

  position: absolute;
  left: -400px;
  bottom: -400px;

  @media screen and (max-width: 1440px){
    width: 700px;
    height: 700px;
  }

  @media screen and (max-width: 1080px){
    width: 500px;
    height: 500px;
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

  @media screen and (max-width: 1440px){
    width: 280px;
    height: 130px;
    right: 15px;
    bottom: 90px;
  }

  @media screen and (max-width: 1080px){
    width: 260px;
    height: 110px;
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
  width: 49%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 10px;
  z-index: 1;

  @media screen and (max-width: 820px){
    width: 100%;
    align-items: center;
  }
`

export const Greeting = styled.h1`
  ${paragraphStyles}
  font-size: 2.8vw;
  margin-bottom: -8px;

  @media screen and (max-width: 820px){
    font-size: 1.6rem;
    font-size: 5vw;
  }
`

export const BoxPresentation = styled.div`
  display: flex;
  gap: 15px;
`

export const Presentation = styled.h2`
  ${titleStyles}
`

export const Role = styled.h3`
  ${titleStyles}
`

export const Description = styled.p`
  ${paragraphStyles}
  font-size: 2vw;
  max-width: 94%;

  @media screen and (max-width: 1080px){
    max-width: 90%;
  }

  @media screen and (max-width: 820px){
    font-size: 1.5rem;
    font-size: 3vw;
    text-align: center;
    max-width: 69%;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 525px){
    font-size: .9rem;
    max-width: 280px;
  }

  @media screen and (max-width: 375px){
    font-size: .7rem;
    max-width: 450px;
  }
`

export const ContactButton = styled.button`
  background-color: ${colors.lightPurple};
  color: white;
  font-family: Nunito;
  font-size: 1.2rem;
  padding: 12px 35px;
  border-radius: 100px;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 1440px){
    font-size: 1.1rem;
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
  z-index: 5;

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