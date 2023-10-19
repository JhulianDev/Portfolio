import styled, { css } from "styled-components"
import { colors } from "../../../assets/colors/Colors"

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 60px 120px;
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
    padding: 60px 60px;
    min-height: auto;
  }
`

export const MaxWidth = styled.div`
  max-width: 1400px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.$justify || "space-between"} ;

  @media screen and (max-width: 820px){
    flex-direction: column;
    justify-content: center;
    gap: 40px;
  }
`

export const Light = styled.span`
  width: 600px;
  height: 600px;
  border-radius: 1000px;
  filter: blur(200px);
  position: absolute;
  opacity: ${(props) => props.$opacity || "1"};
  z-index: -1;

  background-color: ${(props) => 
    props.$blue ? `${colors.lightBlue}` : 
    props.$purple ? `${colors.lightPurple}` : 
    props.$turquoise ? `${colors.lightTurquoise}` : "white"} 
  ;

  ${(props) => 
    props.$left ? css`
      left: -400px;
    ` : 
    props.$right ? css`
      right: -400px;
    ` : ''
  }

  ${(props) => 
    props.$top ? css`
      top: -400px;
    ` : 
    props.$bottom ? css`
      bottom: -400px;
    ` : ''
  }

  @media screen and (max-width: 820px){
    width: 480px;
    height: 480px;
  }
`