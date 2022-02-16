import styled from "styled-components";
import { Flex, Box, Image } from "reflexbox/styled-components";
import '../../fonts/fonts.css'

export const Wrapper = styled(Flex)`
  top: 0;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
  padding: 30px 60px 0px 0px;
  position: absolute;
`;

export const Container = styled(Flex)`
  width: 50%;
  justify-content: space-between;
  align-self: center;
  z-index: 2;
`;

export const Text = styled.div`
  color: ${props => (props.active ? "#E9C82D" : "#e2e2e2")};
  font-size: 20px;
  font-family: Nebula;
  cursor: pointer;
  &:hover {
    color: #75EB98;
  }
  font-height: 10px;
`;

export const genyses = styled.div`
  font-family: Polaris;
  font-size: 70px;
  color: white;
  text-shadow: 2px 2px 5px red;
  align-self: center;
`