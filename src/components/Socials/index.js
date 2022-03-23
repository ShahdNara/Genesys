import React, { useState, useEffect } from "react";
import { Container, Text, Logo } from "./styles";
import Twitter from "./icons/twitter.png"

const Socials = (props) => {
    return(
        <a href={'https://twitter.com/genyses_nft'}>
            <Container main={props.tab==0}>
                <Text>follow</Text>
                <Logo src={Twitter}/>
            </Container>
        </a>
    )
}

export default Socials