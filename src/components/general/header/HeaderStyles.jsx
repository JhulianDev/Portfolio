import { Link } from 'react-router-dom';
import styled, { keyframes } from "styled-components"

const animateButton = keyframes`
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 400%;
  }
`;

export const HeaderContainer = styled.header`
  background-color: #3f3f3f;
  width: fit-content;
  position: fixed;
  inset: auto 0 40px 0;
  margin: auto;

  background: rgba(255, 255, 255, 0);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.233);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  padding: 9px 8px;
  border-radius: 100px;
  border-top: 1px solid #ffffff83;
  border-left: 1px solid #ffffff47;
  border-right: 1px solid #ffffff47;
  border-bottom: 1px solid #ffffff26;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Navbar = styled.nav`

`

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const Item = styled.li`

`

export const ItemLink = styled(Link)`
  color: ${(props) => (props.$active ? "white" : "#ffffffb3")};
  text-shadow: ${(props) => (props.$active ? "0 0 10px white" : "none")};
  font-family: Nunito;
  font-size: .9rem;
  font-weight: bold;
  text-align: center;
  text-rendering: optimizeLegibility;
  
  position: relative;
  border: ${(props) => (props.$active ? "1px solid rgba(255, 255, 255, 0.4)" : "1px solid transparent")};
  border-radius: 100px;
  padding: 7px 16px;
  background: ${(props) => (props.$active ? "linear-gradient(90deg,#03a8f4dc,#ad66e0d8,#00ffffda,#03a8f4dc)" : "transparent")};
  background-size: 300%;
  animation: ${animateButton} 12s alternate-reverse infinite;
  transition-duration: .1s;

  &:hover{
    color: white;
    text-shadow: 0 0 10px white;
  }

  ${(props) => props.$active && `
    &::before {
      content: '';
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      z-index: -1;
      background: linear-gradient(90deg,#03a9f4,#ae66e0,#00FFFF,#03a9f4);
      background-size: 400%;
      border-radius: 35px;
      transition-duration: 1s;
      filter: blur(10px);
      opacity: .7;
    }
  `}
`;


export const ArrowIcon = styled.img`
  height: 60%;
  margin-left: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: .3s;
`

export const DownloadText = styled.span`
  width: 0%;
  opacity: 0;
  color: white;
  font-family: Nunito;
  font-size: 1em;
  font-weight: 500;
  transition-duration: .6s;
`

export const DownloadButton = styled.button`
  width: 30px;
  height: 30px;
  margin-left: 10px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: none;
  border-radius: calc(45px/2);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
  background: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  transition-duration: .5s;

  &:hover {
    width: 130px;
    transition-duration: .4s;
    gap: 2px;

    ${ArrowIcon} {
      padding-right: 15px;
      transition-duration: .1s;
    }

    ${DownloadText} {
      opacity: 1;
      width: 100%;
      padding-left: 15px;
      text-shadow: 0 0 20px white;
      transition-duration: .1s;
    }
  }

  &:active{
    transform: scale(.95);
    transition-duration: .1s;
  }
`;