import styled from "styled-components";
import { Flex, Box, Image } from "reflexbox/styled-components";

export const Container = styled(Flex)`
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

export const Title = styled.div`
  font-family: Nebula;
  font-size: 80px;
  color: white;
  text-shadow: 2px 2px 9px red;
  z-index: 2;
  align-self: center;
`
export const Text = styled.div`
  font-family: 'Agency FB', arial;
  font-size: 38px;
  color: white;
  z-index: 2;
  text-align: center;
`

export const Wrapper = styled(Flex)`
    height: ${props => (props.height ? props.height : "50%")};
    width: 100%;
    justify-content: ${props => (props.center ? "center" : "")};
`

export const BigText = styled(Flex)`
	font-family: Polaris;
	font-size: 50px;
	color: white;
	position: fixed;
	margin-left: 90px;
	margin-top: 30px;
  z-index: 2;
`