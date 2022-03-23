import styled from "styled-components";
import { Flex, Box, Image } from "reflexbox/styled-components";

export const Container = styled(Flex)`
  justify-content: space-between;
  align-items:center;
  flex-direction: row;
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
  width: 100px;
  cursor: pointer;
  z-index: 2;
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
	width: 18px;

`