import styled from "styled-components";
import { Flex } from "reflexbox/styled-components";

export const Container = styled(Flex)`
	position: relative;
	height: 56px;
	width: ${props=> props.expand ? "250px" : "114px"};
	align-self: flex-start;
	border-radius: 5px;
	margin: 30px;
	//bottom: 0px;
	flex-direction: ${props=> props.expand ? "row" : "column"};;
	background: rgba(66,155,184, 0.2);
	box-shadow: 0 0 5px #3bc5cc;
  	border-radius: 5px;
	z-index: 1;
	@media (max-width: 650px) {
		display: none;
	}
	transition-property: width;
  	transition-duration: 0.2s;
`;

export const Play = styled(Flex)`
	height: 35px;
	width: 35px;
	border-radius: 100%;
	// border: 4px solid black;
	background: #0D1F25;
	right: 0px;
	margin: -15px -15px 0px 0px;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	// z-index: 1;
	position: absolute;
	box-shadow: 0 0 5px #3bc5cc;
`
export const PlayArrow = styled.img`
	src: ${props => props.src}	
	height: 100%;
	width: 20px;
	align-self: center;
`

export const Logo = styled.img`
	src: ${props => props.src}	
	height: 100%;
	width: 40px;
	align-self: ${props=> props.expand ? "flex-start" : "center"};
	margin-top: 3px;
	margin-left: ${props=> props.expand ? "10px" : "-20px"};
	transition-property: margin-left;
  	transition-duration: 0.2s;
`

export const Dot = styled(Flex)`
	height: 3px;
	width: 3px;
	background: rgba(225,225,225,0.5);
	animation: ${props=>(!props.isPlaying || !props.expand) || `MoveUpDown ${props.s}s linear infinite`};
	transition-property: height;
	@keyframes MoveUpDown {
		0%, 100% {
		    height: 3px;
		}
		50% {
			height: 25px;
		}

	  }
`
export const Expand = styled(Flex)`
	cursor: pointer;
	height: 10px;
	width: 25px;
	position: absolute;
	bottom: 7px;
	right: 10px;
	justify-content: space-between;
	align-items: flex-end;
	padding: 5px;
	//background:red;
`

export const Title = styled(Flex)`
	font-family: 'Agency FB', arial;
	font-size: 22px;
	color: white;
`
export const Column = styled(Flex)`
	display: ${props=>props.expand? "" : "none"};
	height: 100%;
	width: 100%;
	flex-direction: column;
	padding: 5px;
	padding-left: 15px;
	padding-bottom: 12px;
	overflow: hidden;
	white-space: nowrap;
	justify-content: space-between;
`
export const Bar = styled(Flex)`
	width: 75%;
	height: 2px;
	border-radius: 10px;
	background: rgba(225,225,225,0.3);
`

export const ProgBar = styled(Flex)`
	width: ${props=>props.width};
	height: 2px;
	border-radius: 10px;
	background: rgba(225,225,225,0.7);
	position: absolute;
	bottom: 12px;
	max-width: 135px;
`