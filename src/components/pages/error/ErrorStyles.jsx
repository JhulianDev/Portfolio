import styled from "styled-components"
import { fonts } from "../../../assets/fonts/fontsHandler"
import { levitate } from "../../general/styles/generalStyles"
import { Link } from "react-router-dom"
import { colors } from "../../../assets/colors/Colors"

export const Section404 = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const BoxIllustations = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 1550px){
    width: 450px;
  }
`

export const Astronaut = styled.img`
  width: 100%;
  z-index: 1;
  animation: ${levitate} 4s ease-in-out infinite;
`

export const Icon404 = styled.img`
  width: 100%;
  position: absolute;
`

export const Info = styled.span`
  font-family: ${fonts.SecundaryTypography};
  font-size: 2.2rem;
  font-weight: 100;
  color: white;
  position: absolute;
  bottom: 27%;

  @media screen and (max-width: 1550px){
    font-size: 1.6rem;
  }
`

export const ButtonLink = styled(Link)`
  border: 1px solid #ffffff89;
  color: white;
  border-radius: 100px;
  padding: 6px 20px;
  position: absolute;
  bottom: 18%;
  font-family: ${fonts.SecundaryTypography};
  backdrop-filter: blur(3px);
  cursor: pointer;
  transition: all .2s ease;
  z-index: 1;

  &:hover{
    text-shadow: 0 0 8px white;
    box-shadow: 0 0 8px white;
  }

  &:active{
    transform: scale(.98);
  }

  @media screen and (max-width: 1550px){
    bottom: 15%;
  }

`