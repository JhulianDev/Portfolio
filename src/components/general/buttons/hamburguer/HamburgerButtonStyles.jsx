import styled, { css } from 'styled-components';

const spinAnimation = css`
  transition-duration: 0.22s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
`;

const beforeAnimation = css`
  transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
`;

const afterAnimation = css`
  transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
`;

const activeInnerAnimation = css`
  transform: rotate(225deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
`;

const activeBeforeAnimation = css`
  top: 0;
  opacity: 0;
  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
`;

const activeAfterAnimation = css`
  bottom: 0;
  transform: rotate(-90deg);
  transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
`;

export const HamburgerContainer = styled.div`
  width: fit-content;
  height: 30px;
  position: fixed;
  top: 30px;
  right: 25px;
  overflow: hidden;
  z-index: 30;
  display: none;

  @media screen and (max-width: 820px){
    display: flex;
  }
`;

export const Button = styled.button`
  display: flex;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
`;

export const HamburgerBox = styled.span`
  width: 2rem;
  height: 1.2813rem;
  display: inline-block;
  position: relative;
`;

export const HamburgerInner = styled.span`
  display: block;
  top: 50%;

  &,
  &::before,
  &::after {
    width: 2rem;
    height: 0.1563rem;
    background-color: rgb(255, 255, 255);
    border-radius: 0.25rem;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  &::before,
  &::after {
    content: "";
    display: block;
  }

  &::before {
    top: -0.5rem;
  }

  &::after {
    bottom: -0.5rem;
  }

  ${spinAnimation}

  &::before {
    ${beforeAnimation}
  }

  &::after {
    ${afterAnimation}
  }

  ${props =>
    props.$open &&
    css`
      ${activeInnerAnimation}

      &::before {
        ${activeBeforeAnimation}
      }

      &::after {
        ${activeAfterAnimation}
      }
    `};
`;