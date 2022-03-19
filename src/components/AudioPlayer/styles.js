import styled from "styled-components";
import { Flex, Box, Image } from "reflexbox/styled-components";

export const Container = styled(Flex)`
	position: absolute;
	height: 56px;
	width: 114px;
	align-self: flex-start;
	border-radius: 10px;
	margin: 30px;
	bottom: 0px;
	align-items: flex-end;
	flex-direction: column;
	//background: #d9d9d9;
	background: linear-gradient(315deg, #d9d9d9 0%, #f6f2f2 74%);
`;

export const Play = styled.div`
	height: 35px;
	width: 35px;
	border-radius: 100%;
	border: 4px solid black;
	// box-shadow: -3px 3px 10px 1px black;
	// align-self: flex-start
	background-color: white;
	right: 0px;
	margin: -15px -15px 0px 0px;
	justify-content: center;
	cursor: pointer;
	z-index: 1;
	// &:hover {
	// 	height: 40px;
	// 	width: 40px;
	// }
`
export const PlayArrow = styled.img`
	src: ${props => props.src}	
	height: 26px;
	width: 26px;
	align-self: center;

`