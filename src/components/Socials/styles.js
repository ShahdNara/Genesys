import styled from "styled-components";
import { Flex, Box, Image } from "reflexbox/styled-components";

export const Container = styled(Flex)`
  justify-content: space-between;
  align-items:center;
  flex-direction: row;
  position: absolute;
  top: 5%;
  right: 2rem;
  cursor: pointer;
  z-index: 2;
  @media (max-width: 480px) {
    top: 5.4%;
  }
`;

export const Text = styled(Flex)`
  font-family: Polaris;
  font-size: 13px;
  color: white;
  align-self: center;
`

export const Logo = styled.img`
	src: ${props => props.src}	
	height: 100%;
	width: 26px;
  margin-left: 6px;
  @media (max-width: 480px) {
    width: 22px;
    margin-left: 2px;
  }
`

export const Link = styled.a`
  display: flex;  
  flex-direction: row;
  text-decoration: none;
  margin-left: 7px;
`