import styled from "styled-components";
import { Flex, Box, Image } from "reflexbox/styled-components";

export const Container = styled(Flex)`
  height: 100%;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
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
	position: absolute;
	margin-left: 90px;
	top: 5%;
  z-index: 2;
  line-height: 34px;
  @media (max-width: 920px) {
    font-size: 40px;
  }
  @media (max-width: 480px) {
    font-size: 36px;
  }
  @media (max-width: 430px) {
    font-size: 30px;
    top: 4.8%;
    margin-left: 80px;
  }
`