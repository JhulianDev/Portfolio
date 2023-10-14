import styled from "styled-components"
import { colors } from "../../../assets/colors/Colors"

export const LightPurple = styled.span`
  background-color: ${colors.lightPurple};
  width: 700px;
  height: 700px;
  border-radius: 1000px;
  filter: blur(200px);

  position: absolute;
  left: -400px;
  top: -400px;

  @media screen and (max-width: 1440px){
    width: 600px;
    height: 600px;
  }

  @media screen and (max-width: 820px){
    width: 480px;
    height: 480px;
  }
`

export const LightBlue = styled.span`
  background-color: ${colors.lightBlue};
  width: 600px;
  height: 600px;
  border-radius: 1000px;
  filter: blur(200px);

  position: absolute;
  right: -400px;
  bottom: -400px;

  @media screen and (max-width: 820px){
    width: 480px;
    height: 480px;
  }
`

export const PlanetPurple = styled.img`
  width: 20%;
  position: absolute;
  bottom: -30%;
  left: -8%;

  @media screen and (max-width: 1440px){
    width: 17%;
    bottom: -25%;
    left: -6%;
  }

  @media screen and (max-width: 1080px){
    width: 17%;
    bottom: -26%;
    left: -4%;
  }

  @media screen and (max-width: 820px){
    width: 40%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-top: 200px;
    margin-left: -140px;
  }

  @media screen and (max-width: 425px){
    margin-top: 200px;
    margin-left: -120px;
  }

  @media screen and (max-width: 375px){
    margin-top: 210px;
    margin-left: -90px;
  }
`

export const PlanetBlue = styled.img`
  width: 10%;
  position: absolute;
  top: -50%;
  right: -6%;
  z-index: 1;

  @media screen and (max-width: 1080px){
    top: -45%;
    right: -4%;
  }

  @media screen and (max-width: 820px){
    width: 15%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-top: -230px;
    margin-left: 180px;
  }

  @media screen and (max-width: 425px){
    width: 25%;
    margin-top: -220px;
    margin-left: 140px;
  }

  @media screen and (max-width: 375px){
    margin-top: -230px;
    margin-left: 100px;
  }
`

export const BoxSlider = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media screen and (max-width: 820px){
    max-width: 400px;
    min-width: 250px;
    height: 450px;
    overflow: hidden;
  }
`

export const Slider = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: ${(props) => props.$position};
`

export const BoxArrows = styled.div`
  display: none;
  margin-top: 15px;
  gap: 40px;

  @media screen and (max-width: 820px){
    display: flex;
  }
`

export const Arrow = styled.img`
  border: 1px solid #ffffff7a;
  padding: 8px 18px;
  border-radius: 100px;
  width: 45px;
  display: flex;
  transform: ${(props) => (props.$left ? "rotate(180deg)" : "none")};
  transition: all .1s ease;

  &:hover{
    border: 1px solid white;
  }

  &:active{
    background-color: #ffffff7a;
  }
`