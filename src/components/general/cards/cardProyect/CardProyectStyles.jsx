import { Link } from "react-router-dom"
import styled, { css } from "styled-components"
import { fonts } from "../../../../assets/fonts/fontsHandler"

const lightStyles = css`
  background-color: ${(props) => props.$color};
  width: 200px;
  height: 200px;
  border-radius: 1000px;
  filter: blur(80px);
  position: absolute;

  @media screen and (max-width: 1800px){
    width: 185px;
    height: 185px;
  }

  @media screen and (max-width: 1440px){
    width: 170px;
    height: 170px;
  }

  @media screen and (max-width: 1080px){
    width: 160px;
    height: 160px;
  }
`

export const BoxInfoProyect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  display: none;
`

export const BoxIcon = styled.a`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 15px;
  right: 15px;
  display: none;

  &:hover{
    box-shadow: 0 0 20px #ffffff4b;
  }

  @media screen and (max-width: 1800px){
    width: 27px;
    height: 27px;
  }

  @media screen and (max-width: 1440px){
    width: 25px;
    height: 25px;
  }

  @media screen and (max-width: 820px){
    width: 40px;
    height: 40px;
  }
`

export const Logo = styled.img`
  width: 70%;
`

export const LightBottom = styled.span`
  ${lightStyles}
  bottom: -100px;
  left: -100px;
`

export const LightTop = styled.span`
  ${lightStyles}
  top: -100px;
  right: -100px;
`

export const Title = styled.h1`
  font-family: ${fonts.SecundaryTypography};
  font-size: 1.3rem;
  font-weight: 500;

  @media screen and (max-width: 1800px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 1440px){
    font-size: 1.1rem;
  }
`

export const Subtitle = styled.h2`
  font-family: ${fonts.SecundaryTypography};
  font-size: 1.2rem;
  font-weight: 500;

  @media screen and (max-width: 1440px){
    font-size: 1.1rem;
  }

  @media screen and (max-width: 1440px){
    font-size: 1rem;
  }
`

export const Description = styled.p`
  font-family: ${fonts.SecundaryTypography};
  font-size: 1rem;
  margin-top: 5px;
  font-weight: lighter;

  @media screen and (max-width: 1440px){
    font-size: .9rem;
  }

  @media screen and (max-width: 1440px){
    font-size: .8rem;
  }
`

export const GitHubIcon = styled.img`
  width: 100%;
  cursor: pointer;
  opacity: .8;
  transition: opacity .2s ease;

  &:hover{
    opacity: 1;
  }
`

export const LinkProyect = styled.a`
  background-color: #00005253;
  color: white;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border: 1px solid #ffffff7d;
  border-radius: 100px;

  font-family: ${fonts.SecundaryTypography};
  text-align: center;
  transition: border .2s ease;

  &:hover{
    border: 1px solid #ffffffb2;
    text-shadow: 0 0 10px white;
    box-shadow: 0 0 10px #ffffff4b;
  }

  @media screen and (max-width: 1800px){
    padding: 8px;
    margin-top: 10px;
  }

  @media screen and (max-width: 1440px){
    font-size: .8rem;
  }

  @media screen and (max-width: 1080px){
    font-size: .9rem;
    padding: 8px;
  }
`

export const InfoIcon = styled.span`
  color: #ffffffe8;
  height: 30px;
  padding: 5px 12px;
  font-family: ${fonts.SecundaryTypography};
  font-size: .9rem;
  text-align: center;
  text-shadow: 0 0 5px white;
  box-shadow: 0 0 4px #ffffff75;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 1px solid #ffffff7d;
  position: absolute;
  left: 10px;
  top: 10px;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 820px){
    display: flex;
  }
`

export const CardBox = styled.div`
  width: 30%;
  height: 350px;
  
  background: rgba(255, 255, 255, 0.0);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  /* -webkit-backdrop-filter: blur(6.7px); */
  border: 1px solid rgba(255, 255, 255, 0.36);
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  z-index: 1;

  @media screen and (max-width: 1800px){
    height: 300px;
  }

  @media screen and (max-width: 1440px){
    height: 260px;
  }

  @media screen and (max-width: 820px){
    max-width: 400px;
    min-width: 100%;
    width: 100%;
    height: 450px;
  }

  &:hover{
    align-items: start;
    padding: 40px;

    & ${Logo} {
      margin-bottom: 10px;

      @media screen and (max-width: 1800px){
        width: 60%;
      }

      @media screen and (max-width: 1440px){
        width: 55%;
      }

      @media screen and (max-width: 820px){
        width: 70%;
      }
    }

    & ${BoxInfoProyect}, 
      ${BoxIcon}{
      display: flex;
    }

    & ${InfoIcon} {
      display: none;
    }
  }
`