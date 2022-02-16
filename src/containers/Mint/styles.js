import styled from "styled-components";
import { Flex, Box, Image } from "reflexbox/styled-components";

export const Container = styled(Flex)`
  justify-content: space-between;
  flex-direction: column;
  // margin-bottom: 170px;
  // background-color: red;
  height: 100%;
`;

export const Genyses = styled(Flex)`
  font-family: Polaris;
  font-size: 100px;
  color: white;
  text-shadow: 2px 2px 9px red;
  z-index: 2;
  align-self: center;
  height: 80%;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`
export const Button = styled.button`
  width: 50%;
  align-self: center;
  margin-top: 30px;
`;

export const ArrowsWrapper = styled(Flex)`
  align-self: center;
  width: 100%;
  height: 20%;
  justify-content: center;
  flex-direction: column;
`
export const Arrows = styled.div`

  position: relative;
  align-items: center;
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