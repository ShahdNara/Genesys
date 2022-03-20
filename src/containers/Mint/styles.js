import styled from "styled-components";
import { Flex, Box, Image } from "reflexbox/styled-components";

export const Container = styled(Flex)`
  justify-content: flex-end;
  flex-direction: column;
  height: 90vh;
  overflow: hidden;
  @media (max-width: 650px) {
    justify-content: center;
  }
`;

export const Genyses = styled(Flex)`
  font-family: Polaris;
  font-size: 100px;
  color: white;
  z-index: 2;
  height: 60vh;
  align-items: flex-end;
  @media (max-width: 1000px) {
    font-size: 90px;
  }
  @media (max-width: 800px) {
    font-size: 80px;
  }
  @media (max-width: 600px) {
    font-size: 70px;
  }
  @media (max-width: 450px) {
    font-size: 55px;
  }
`
export const Button = styled.button`
  width: 50%;
  align-self: center;
  margin-top: 30px;
`;

export const ArrowsWrapper = styled(Flex)`
  align-self: center;
  width: 100%;
  justify-content: center;
  flex-direction: column;  
  padding-top: 20px;
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

export const Subtitle = styled(Flex)`
  font-family: Polaris;
  font-size: 20px;
  color: rgba(255,255,255,0.6);
  z-index: 2;
  align-self: center;
  margin-bottom: 30px;
`;