import styled from "styled-components";
import { Flex, Box, Image } from "reflexbox/styled-components";
import '../../fonts/fonts.css'

export const Wrapper = styled(Flex)`
  z-index:5;
  justify-content: center;
  align-items: center;
`;

export const Container = styled(Flex)`
  height: 50%;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 100px;
`;

export const Text = styled(Flex)`
  color: #e2e2e2;
  font-size: 30px;
  font-family: 'Agency FB';
  cursor: pointer;
  &:hover {
    color: #E3DDA8;
  }
  font-height: 10px;
`;


export const StyledMenu = styled.nav`
  display: flex;
  width: 300px;
  background: rgba(0, 0, 0, 0.3);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  justify-content: center;
  
  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: right;
    }

    &:hover {
      color: #343078;
    }
  }
`
export const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#EFFFFA' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`