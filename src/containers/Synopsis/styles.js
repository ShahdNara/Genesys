import styled from "styled-components";
import { Flex, Box, Image } from "reflexbox/styled-components";

export const Container = styled(Flex)`
  height: 100%;
  width: 100%;
  // background-color:red;
  // justify-content: space-between;
  flex-direction: column;
  // padding-top: 40px;

//   border: 2px solid white;
//   border-radius: 10px;
//   box-shadow: 10px 8px 40px 2px white;
//   padding-left: 40px;
//   padding-right: 40px;
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
  font-family: Nebula;
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