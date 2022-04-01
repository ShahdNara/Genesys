import styled from "styled-components";
import { Flex, Box, Image } from "reflexbox/styled-components";

export const Container = styled(Flex)`
  height: 100%;
  width: 100%;
  justify-content:center;
  flex-direction: column;
  overflow: hidden;
`;

export const Text = styled.div`
  font-family: 'Agency FB', arial;
  font-size: 38px;
  color: white;
  z-index: 2;
  text-align: center;
  align-self:center;
  width: 80%;
  @media (max-width: 920px) {
    font-size: 35px;
    text-align: justify;
  }
  @media (max-width: 640px) {
    font-size: 32px;
  }
  @media (max-width: 540px) {
    font-size: 30px;
  }
  @media (max-width: 470px) {
    font-size: 25px;
  }
  @media (max-height: 670px) {
    font-size: 23px;
  }
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
  @media (max-width: 470px) {
    font-size: 37px;
  }
`