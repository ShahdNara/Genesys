import styled from "styled-components";
import { Flex, Box, Image } from "reflexbox/styled-components";

export const Container = styled(Flex)`
    height: 50%;
    //background:red;
    align-self: flex-end;
    top: 0px;
    position: absolute;
    align-items: center;
`

export const Row = styled(Flex)`
    flex-direction: row;
    width: 100%;
    justify-content: center;
`

export const Grid = styled(Flex)`
    flex-direction: column;
`

export const Card = styled(Flex)`
    height: 214px;
    width: 167px;
    background: rgba(14,20,32, 0.5);
    border-style: solid;
	border-width: 1px;
	border-color: rgba(14,20,32, 1);
    padding: 10px;
    flex-direction: column;
    justify-content: space-between;
`
export const Picture = styled.img`
    src: ${props=>props.src}
    height: 100%;
    width: 100%;
    //align-self: center;
`
export const Wrapper = styled(Flex)`
    height: 75%;
    width: 100%;
`
export const Info = styled(Flex)`
    flex-direction: column;
`
export const Name = styled(Flex)`
    font-family: Polaris;
    color: white;
`
export const Role = styled(Flex)`
    font-family: 'Agency FB';
    font-size: 17px;
    letter-spacing: 1px;
    color: #999999
`
export const Bio = styled(Flex)`
    flex-direction: column;
`

export const BigText = styled(Flex)`
	font-family: Polaris;
	font-size: 50px;
	color: white;
	position: fixed;
	margin-left: 90px;
	margin-top: 30px;
    left: 0;
    top: 0;
`