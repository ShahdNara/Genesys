import styled from "styled-components";
import { Flex, Box, Image } from "reflexbox/styled-components";
import bg from "../../media/bg1.png";

export const Container = styled(Flex)`
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${bg});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const genyses = styled.div`
  font-family: Polaris;
  font-size: 100px;
  color: white;
  text-shadow: 2px 2px 9px red;
  z-index: 2;
  margin-bottom: 170px;
`
export const PlanetWrapper = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  position: absolute;
`

export const Section = styled(Flex)`
  align-items: center;
  height: 80%;
  width: 80%;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
`
