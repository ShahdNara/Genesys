import React, { useState, useEffect } from "react";
import { Button, Genyses, Container, Section, ArrowsWrapper, Arrows, Scroll, Wrapper, BeginMobile } from "./styles";
import "./styles.css"

export const Mint = (props) => {
    return(
        <Container>
            <Genyses>Genyses</Genyses>
            <ArrowsWrapper>
                <Wrapper>
                    <div class="mouse_scroll">
                        <div class="mouse">
                            <div class="wheel"></div>
                        </div>
                        <div>
                            <span class="m_scroll_arrows unu"></span>
                            <span class="m_scroll_arrows doi"></span>
                            <span class="m_scroll_arrows trei"></span>
                        </div>
                    </div>
                    <BeginMobile onClick={()=> props.openMenu()}>BEGIN</BeginMobile>
                </Wrapper>
            </ArrowsWrapper>
        </Container>
    )
}