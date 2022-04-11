import styled from "styled-components";
import { Flex, Box, Image } from "reflexbox/styled-components";

export const Container = styled(Flex)`
  justify-content: flex-end;
  flex-direction: column;
  //height: 90vh;
  overflow: hidden;
  //background: red;
  bottom: 9%;
  position: absolute;
  @media (max-width: 650px) {
    justify-content: center;
  }
  @media (max-height: 800px) {
    bottom: 7%;
  }
  @media (max-height: 500px) {
    bottom: 1%;
  }
`;

export const Genyses = styled(Flex)`
  font-family: Polaris;
  font-size: 100px;
  color: white;
  z-index: 2;
  top: 40%;
  align-items: flex-end;
  @media (max-width: 1000px), (max-height: 800px) {
    font-size: 90px;
  }
  @media (max-width: 800px), (max-height: 750px) {
    font-size: 80px;
  }
  @media (max-width: 600px), (max-height: 650px) {
    font-size: 70px;
  }
  @media (max-width: 450px), (max-height: 580px) {
    font-size: 55px;
  }
  @media (max-height: 500px) {
    font-size: 48px;
  }
`
export const Button = styled.button`
  width: 50%;
  align-self: center;
  margin-top: 30px;
`;

export const ArrowsWrapper = styled(Flex)`
  align-self: center;
  //width: 30%;
  justify-content: center;
  flex-direction: column;  
  //padding-top: 20px;
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


export const BeginMobile = styled(Flex)`
  color: white;
  font-size: 34px;
  font-family: 'Agency FB';
  cursor: pointer;
  @media (min-width: 900px) {
    display: none;
  }
`