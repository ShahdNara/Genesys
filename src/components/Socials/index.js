import React, { useState, useEffect } from "react";
import { Container, Text, Logo, Link } from "./styles";
import Twitter from "./icons/twitter.png"
import Discord from "./icons/discord.png"

const Item = (props) => {
    return(
        <Link href={props.href} target="_blank" rel="noopener noreferrer">
            {/* <Text>{props.text}</Text> */}
            <Logo src={props.logo}/>
        </Link>
    )
}
const Socials = (props) => {
    
    return(
        <Container main={props.tab==0}>
            <Item href="https://twitter.com/genyses_nft" logo={Twitter} text="follow"/>
            <Item href="https://discord.gg/genyses" logo={Discord} text="join us"/>
        </Container>
        
    )
}

export default Socials