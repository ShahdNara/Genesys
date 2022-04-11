import styled from "styled-components";
import { Flex, Box, Image } from "reflexbox/styled-components";

export const Container = styled(Flex)`
    height: 100%;
    align-self: flex-end;
    margin-right: 80px;
    @media (max-width: 1200px) {
        align-self: center;
        margin-right: 0px;
    }
`

export const Row = styled(Flex)`
    flex-direction: row;
    width: 100%;
    justify-content: center;
`

export const Grid = styled(Flex)`
    flex-direction: column;
    margin-top: 15%;
    @media (max-width: 1100px) {
        margin-top: 0;
        align-self: center;
    }

`

export const Card = styled(Flex)`
    height: 100%;
    width: 100%;
    border-style: solid;
	border-width: 1px;
	border-color: #3bc5cc;
	background: rgba(66,155,184, 0.2);
	box-shadow: 0 0 5px #3bc5cc;
    flex-direction: column;
    justify-content: space-between;

`
export const Picture = styled.img`
    src: ${props=>props.src}
    height: 100%;
    width: 100%;
    //align-self: center;
`
export const Wrapper = styled.div`
    height: 73%;
    width: 100%;
`
export const Info = styled(Flex)`
    flex-direction: column;
    padding: 10px;
    z-index: 10;
`
export const Name = styled(Flex)`
    font-family: Polaris;
    color: white;
`
export const Role = styled(Flex)`
    font-family: 'Agency FB';
    font-size: 17px;
    letter-spacing: 1px;
    color: #999999;
    @media (max-width: 1100px) {
        font-size: 15px;
    }
    display: ${props=>props.back && "none"};

`
export const Bio = styled(Flex)`
    flex-direction: column;
    font-family: 'Agency FB';
    font-size: 15.5px;
    letter-spacing: 1px;
    text-align: left;
    
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

export const Logo = styled.img`
	src: ${props => props.src}	
	height: 100%;
	width: 20px;
`

export const Link = styled.a`
  display: flex;  
  flex-direction: row;
  text-decoration: none;
  margin-left: 4px;
`

export const Socials = styled(Flex)` 
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  display: ${props=>props.back && "none"};
`

export const Icons = styled(Flex)` 
  flex-direction: row;
  justify-content: flex-end;
`

export const Div = styled(Flex)`
	width: 100%;
	height: 100%;
	//margin-top: 4%;
	overflow: hidden;
`

export const MobileContainer = styled(Flex)`
	width: 100%;
	height: 100vh;
	overflow-y: scroll;
	position: absolute;
	scroll-behavior: smooth;
	justify-content: center;
	top: 20%;
    padding-top: 10px;
`

export const Column = styled(Flex)`
	flex-direction: column;
    height: 2100px;
    justify-content: space-between;
    padding-bottom: 60%;
`

export const MobileWrapper = styled(Flex)`
	flex-direction: column;
	height: 100%;
`