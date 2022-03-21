import styled from "styled-components";
import { Flex, Image } from "reflexbox/styled-components";


export const ScrollWrapper = styled(Flex)`
	width: 100%;
	height: 100%;
    overflow-y: scroll;
    position: absolute;
	scroll-behavior: smooth;
    justify-content: right;
    z-index: 1;
`
export const Container = styled(Flex)`
    justify-content: center;
	display: inline-block;
	align-items: center;
	width: 45%;
	height: 100%;
    flex-direction: row;
    //overflow: auto;
    //background: red;
`;

export const VerticalLine = styled(Flex)`
    width: 3px;
    height: 3000px;
    //background: #429BB8;
    background: linear-gradient(#6C469D, #723943, #B7AB8D, #FE7A25 );
	//box-shadow: 0 0 2px #429BB8;
    border-radius: 5px;
    align-self: center;
    left: 76%;
    position: absolute;
    justify-content: space-between;
    flex-direction: column;
    padding-top: 300px;
    padding-bottom: 300px;
`

export const Content = styled(Flex)`
    justify-content: space-between;
    height: 2000px;
	width: 100%;
    flex-direction: column;
    //padding-bottom: 400px;
    
`
export const Wrapper = styled(Flex)`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
    padding: 50px;
    padding-bottom: 100px;
    padding-top: 100px;
    //background: blue;
`
export const Row = styled(Flex)`
	flex-direction: row;
`
export const Box = styled(Flex)`
	flex-direction: column;
	width: 45%;
	height: 100%;
	//background: rgba(66,155,184, 0.2);
	top: ${props => !props.up ? "135px" : ""};
	bottom: ${props => props.up ? "135px" : ""};
	padding: 17px;
    justify-content: center;
`
export const Title = styled.div`
	font-family: Polaris;
	font-size: 28px;
	color: white;
`

export const Text = styled.div`
	font-family: 'Agency FB', arial;
	font-size: 23px;
	color: ${props => props.color ? props.color : "white"};
    align-self: center;
`

export const Circle = styled(Flex)`
    border-radius: 100%;
    width: 10px;
    height: 10px;
    align-self: center;
    visibility: ${props => props.invisible ? "hidden" : ""};
    justify-content: center;
    border-color: ${props => props.color ? props.color : "black"};
    border-style: solid;
    border-width: 1px;
    background: ${props => props.color ? props.color : "black"};
    z-index: 1;
`

export const Icon = styled.img`
	src: ${props => props.src}
	width: 500px;
    height: 500px;
	tintColor: #429BB8;
	align-self:center;
	margin: ${props => props.margin ? props.margin : ""};
    border-radius: 10px;
`
export const Picture = styled(Flex)`
    flex-direction: column;
`

export const BigText = styled(Flex)`
	font-family: Polaris;
	font-size: 50px;
	color: white;
	position: fixed;
	margin-left: 90px;
	top: 5%;
    line-height: 34px;
    left: 0;
    @media (max-width: 920px) {
        font-size: 40px;
    }
`