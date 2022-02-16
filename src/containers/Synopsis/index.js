import React, { useState, useEffect } from "react";
import { Container, Title, Text, Wrapper } from "./styles";

export const Synopsis = () => {
    return (
        <Container>
            <Wrapper height="20%" center>
                <Title>Synosis</Title>
            </Wrapper>
            <Wrapper height="80%">
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </Wrapper>
        </Container>
    )
}