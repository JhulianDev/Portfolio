import styled, { css, keyframes } from "styled-components";
import { fonts } from "../../../assets/fonts/fontsHandler";
import { levitate } from "../../general/styles/generalStyles";
import { colors } from "../../../assets/colors/Colors";

const inputStyles = css`
  background-color: transparent;
  color: white;
  width: 100%;
  font-family: ${fonts.SecundaryTypography};
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid #ffffff63;
  border-radius: 8px;
  padding: 13px 15px;
  outline: none;
  transition: border 1s ease;

  &::placeholder{
    font-weight: 400;
    color: #ffffff63;
  }

  &:focus{
    border: 1px solid white;
  }

  @media screen and (max-width: 1440px){
    font-size: .8rem;
    padding: 8px 15px;
  }
`

const Flicker = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`

export const CardContact = styled.div`
  width: 80%;
  max-width: 1200px;
  border: 1px solid #ffffff92;
  border-radius: 20px;
  backdrop-filter: blur(6px);

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 820px){
    flex-direction: column;
    width: 100%;
    padding: 30px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 375px){
    padding: 15px;
  }
`

export const BoxImg = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 820px){
    width: 100%;
    border: 1px solid #ffffff92;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 10px 10px 0;
  }
`

export const AstronautImg = styled.img`
  width: 75%;
  animation: ${levitate} 4s ease-in-out infinite;
  z-index: 1;

  @media screen and (max-width: 820px){
    width: 100%;
  }
`

export const StarsImg = styled.img`
  width: 100%;
  opacity: 0;
  position: absolute;
  animation: ${Flicker} 6s ease-in-out infinite;
  animation-delay: ${(props) => props.$delay || "1s"};

  @media screen and (max-width: 820px){
    display: none;
  }
`

export const Form = styled.form`
  width: 50%;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #ffffff92;
  padding: 40px;
  gap: 20px;

  @media screen and (max-width: 1440px){
    aspect-ratio: initial;
    padding: 30px;
    gap: 10px;
  }

  @media screen and (max-width: 820px){
    width: 100%;
    padding: 0;
    border: none;
  }
`

export const Input = styled.input`
  ${inputStyles};
`

export const TextArea = styled.textarea`
  ${inputStyles};
  height: 80px;
  resize: none;

  &::-webkit-scrollbar {
    width: 15px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${colors.bgColor};
    margin-block: 11px; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffffff8b;
    border-radius: 10px;
    border: 4px solid ${colors.bgColor};
  }
`

export const ButtonForm = styled.button`
  ${inputStyles};
  color: #ffffff83;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover{
    border: 1px solid white;
    text-shadow: 0 0 6px white;
    color: white;
  }

  &:active{
    transform: scale(.95);
  }
`

export const TitleSection = styled.h1`
  font-family: ${fonts.MainTypography};
  color: white;
  font-size: 3rem;
  font-weight: 100;
  text-align: center;
  margin-bottom: 40px;
  margin-top: -100px;

  @media screen and (max-width: 1440px){
    font-size: 2.3rem;
    margin-bottom: 20px;
    margin-top: -70px;
  }

  @media screen and (max-width: 820px){
    font-size: 1.9rem;
    margin-top: -30px;
  }
`

