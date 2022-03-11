import styled from "styled-components";
import { Flex, Box, Image } from "reflexbox/styled-components";

export const Container = styled(Flex)`
  justify-content: flex-end;
  flex-direction: column;
  height: 80%;
`;

export const Genyses = styled(Flex)`
  font-family: Polaris;
  font-size: 100px;
  color: white;
  z-index: 2;
  height: 80%;
  align-items: flex-end;
  margin-bottom: 30px;
`
export const Button = styled.button`
  width: 50%;
  align-self: center;
  margin-top: 30px;
`;

export const ArrowsWrapper = styled(Flex)`
  align-self: center;
  width: 100%;
  height: 10%;
  justify-content: flex-end;
  flex-direction: column;
`
export const Arrows = styled.div`
  position: relative;
  align-items: flex-start;
`;

export const Scroll = styled(Flex)`
  font-size: 15px;
  text-shadow: none;
  font-family: Nebula;
  position: absolute;
  align-self: center;
  justify-content: space-between;
  flex-direction: column;
`

export const Wrapper = styled(Flex)`
  position: relative;
  
`;