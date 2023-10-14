import styled, { css } from "styled-components"
import { fonts } from "../../../assets/fonts/fontsHandler"

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 0px 120px;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1080px){
    padding: 60px 60px;
  }
`

export const MaxWidth = styled.div`
  max-width: 1400px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 820px){
    flex-direction: column;
    justify-content: center;
    gap: 40px;
  }
`

export const TitleSection = styled.h1`
  font-family: ${fonts.MainTypography};
  color: white;
  font-size: calc(2vw + 1.6rem);
  font-weight: 100;
  text-align: center;
  margin-bottom: 60px;
  margin-top: -100px;

  @media screen and (max-width: 1440px){
    margin-bottom: 40px;
  }

  @media screen and (max-width: 820px){
    margin-top: -60px;
  }
`