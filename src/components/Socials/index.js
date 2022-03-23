import React, { useState, useEffect } from "react";
import { Container, Text, Logo } from "./styles";
import Twitter from "./icons/twitter.png"

const Socials = () => {
    return(
        <a href={'https://twitter.com/genyses_nft'}>
            <Container>
                <Text>follow</Text>
                <Logo src={Twitter}/>
            </Container>
        </a>
    )
}

export default Socials