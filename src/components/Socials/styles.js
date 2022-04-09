import styled from "styled-components";
import { Flex, Box, Image } from "reflexbox/styled-components";

export const Container = styled(Flex)`
  justify-content: space-between;
  align-items:center;
  flex-direction: row;
  position: absolute;
  top: 5%;
  right: 2rem;
  //width: 200px;
  cursor: pointer;
  z-index: 2;
  //background:red;
  // @media (max-width: 600px) {
  //   display: ${props=>props.main || "none"}
  // }
  
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
`

export const Link = styled.a`
  display: flex;  
  flex-direction: row;
  text-decoration: none;
  margin-left: 7px;
`