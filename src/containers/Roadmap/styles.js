import styled from "styled-components";
import { Flex, Image } from "reflexbox/styled-components";
import { FormHelperText } from "@material-ui/core";

export const HorizontalWrapper = styled(Flex)`
	width: 100%;
	overflow-x: scroll;
	height: 100%;
	align-items: center;	
	scroll-behavior: smooth;
	position: absolute;
	z-index: 1;
`

export const HorizontalWrapper2 = styled(Flex)`
	width: 100%;
	overflow-x: scroll;
	height: 100%;
	align-items: center;	
	scroll-behavior: smooth;
`

export const Container = styled(Flex)`
  justify-content: center;
	display: inline-block;
	align-items: center;
	width: auto;
	margin-left: 50%;
	height: 100%;
`;

export const Container2 = styled(Flex)`
  justify-content: center;
	display: inline-block;
	align-items: center;
	margin-left: 50%;
`;

export const CircleRow = styled(Flex)`
  justify-content: space-between;
  width: 3700px;
	height: 100%;
`

export const Wrapper = styled(Flex)`
	flex-direction: column;
	height: 100%;
	justify-content: center;
	align-items: center;
`
export const Row = styled(Flex)`
	flex-direction: row;
`
export const Box = styled(Flex)`
	flex-direction: column;
	border-radius: 5px;
	width: 250px;
	height: 150px;
	border-style: solid;
	border-width: 1px;
	border-color: #429BB8;
	background: rgba(66,155,184, 0.2);
	box-shadow: 0 0 5px #429BB8;
	position: absolute;
	top: ${props => !props.up ? "160px" : ""};
	bottom: ${props => props.up ? "160px" : ""};
	margin-left: 120px;
	padding: 17px;
`
export const Title = styled.div`
	font-family: Teko-Bold;
	font-size: 28px;
	color: white;
`

export const Text = styled.div`
	font-family: Teko;
	font-size: 18px;
	color: white;
`

export const Circle = styled(Flex)`
    border-radius: 100%;
    width: 100px;
    height: 100px;
    border-color: #429BB8;
		border-style: solid;
		border-width: 1px;
		align-self: center;
		visibility: ${props => props.invisible ? "hidden" : ""};
		justify-content: center;
		background: black;
		z-index: 1
`

export const Icon = styled.img`
	src: ${props => props.src}
	width: 50px;
  height: 50px;
	tintColor: #429BB8;
	align-self:center;
	margin: ${props => props.margin ? props.margin : ""};
`
export const Line = styled(Flex)`
  height: 5px;
  width: ${props => props.width};
  background: #429BB8;
  transition-property: width;
  transition-duration: 0.2s;
  box-shadow: 0 0 5px #429BB8;
  border-radius: 5px;
	flex-direction: column;
	align-self: center;
	margin-bottom: -4px;
`

export const ThinLine = styled(Flex)`
	height: ${props => props.height ? props.height : "1px"};
	width: ${props => props.width ? props.width : "1px"};
  background: #429BB8;
  transition-property: width;
  transition-duration: 0.2s;
  box-shadow: 0 0 5px #429BB8;
  border-radius: 5px;
	flex-direction: column;
	align-self: center;
	margin-bottom: -4px;
`

export const VerticalLine = styled(Flex)`
	height: ${props => props.height ? props.height : "1px"};
	width: 1px;
	background: #429BB8;
	box-shadow: 0 0 2px #429BB8;
  border-radius: 5px;
	visibility: ${props => props.invisible ? "hidden" : ""};
`

export const Div = styled(Flex)`
	width: 100%;
	height: 100%;
`

