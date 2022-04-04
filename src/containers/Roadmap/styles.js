import styled from "styled-components";
import { Flex, Image } from "reflexbox/styled-components";

export const HorizontalWrapper = styled(Flex)`
	width: 100%;
	overflow-x: hidden;
	height: 100%;
	align-items: center;	
	scroll-behavior: smooth;
	position: absolute;
	z-index: 1;
`

export const HorizontalWrapper2 = styled(Flex)`
	width: 100%;
	overflow-x: hidden;
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
	margin-left: 52%;
`;

export const CircleRow = styled(Flex)`
	justify-content: space-between;
	width: 7500px;
	height: 100%;
`

export const Wrapper = styled(Flex)`
	flex-direction: column;
	height: 100%;
	justify-content: center;
	align-items: center;
	margin-left: -200px;
	margin-top: -73px;
	// margin-top:${props=>props.down ? "00px" : "-70px"}
	//background:blue;
	//overflow-y: hidden;
`
export const Row = styled(Flex)`
	flex-direction: row;
`
export const Box = styled(Flex)`
	flex-direction: column;
	border-radius: 5px;
	width: 340px;
	height: 150px;
	border-style: solid;
	border-width: 1px;
	border-color: #3bc5cc;
	background: rgba(66,155,184, 0.2);
	box-shadow: 0 0 5px #3bc5cc;
	//position: absolute;
	//top: 50%;
	top: ${props => !props.up ? "305px" : ""};
	bottom: ${props => props.up ? "135px" : ""};
	margin-left: 120px;
	padding: 17px;
`
export const Title = styled.div`
	font-family: Polaris;
	font-size: 24px;
	color: white;
`

export const Text = styled.div`
	font-family: 'Agency FB', arial;
	font-size: 20px;
	color: white;
`

export const Circle = styled(Flex)`
    border-radius: 100%;
    width: 30px;
    height: 30px;
    border-color: #3bc5cc;
	border-style: solid;
	border-width: 1px;
	align-self: center;
	visibility: ${props => props.invisible ? "hidden" : ""};
	justify-content: center;
	background: #3bc5cc;
	z-index: 1
`

export const Icon = styled.img`
	src: ${props => props.src}
	width: 70px;
  	height: 70px;
	align-self:center;
	margin: ${props => props.margin ? props.margin : ""};
`
export const Line = styled(Flex)`
  height: 5px;
  width: ${props => props.width};
	max-width: 6800px;
  background: #3bc5cc;
  transition-property: width;
  transition-duration: 0.2s;
  box-shadow: 0 0 5px #3bc5cc;
  border-radius: 5px;
	flex-direction: column;
	align-self: center;
	margin-bottom: -4px;
	margin-top: 50px;

`

export const ThinLine = styled(Flex)`
	height: ${props => props.height ? props.height : "1px"};
	width: ${props => props.width ? props.width : "1px"};
  background: #3bc5cc;
  transition-property: width;
  transition-duration: 0.2s;
  box-shadow: 0 0 5px #3bc5cc;
  border-radius: 5px;
	flex-direction: column;
	align-self: center;
	margin-bottom: -4px;
`

export const VerticalLine = styled(Flex)`
	// height: ${props => props.height ? props.height : "1px"};
	height: 50px;
	width: 1px;
	background: #3bc5cc;
	box-shadow: 0 0 2px #3bc5cc;
  border-radius: 5px;
	//visibility: ${props => props.invisible ? "hidden" : ""};
`

export const Div = styled(Flex)`
	width: 100%;
	height: 100%;
	//margin-top: 4%;
	overflow: hidden;
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
`