import styled from "styled-components"
import { fonts } from "../../../assets/fonts/fontsHandler"

export const TitleSection = styled.h1`
  font-family: ${fonts.MainTypography};
  color: white;
  font-size: 3rem;
  font-weight: 100;
  text-align: center;
  margin-bottom: 40px;
  margin-top: -100px;

  @media screen and (max-width: 1800px){
    font-size: 2.8rem;
    margin-top: -80px;
  }

  @media screen and (max-width: 1440px){
    font-size: 2.3rem;
    margin-bottom: 20px;
    margin-top: -70px;
  }

  @media screen and (max-width: 820px){
    font-size: 1.9rem;
    margin-top: 0;
  }
`

export const BoxCards = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 820px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`

export const CardPortrait = styled.img`
  width: 414px;
  backdrop-filter: blur(3px);

  @media screen and (max-width: 1800px){
    width: 350px;
  }

  @media screen and (max-width: 1440px){
    width: 300px;
  }

  @media screen and (max-width: 1180px){
    width: 250px;
  }

  @media screen and (max-width: 900px){
    width: 200px;
  }

  @media screen and (max-width: 820px){
    width: 100%;
    order: 1;
    margin-bottom: -5px;
  }
`