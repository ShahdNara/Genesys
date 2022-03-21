import React, { useState, useEffect } from "react";
import { Button, Genyses, Container, Section, ArrowsWrapper, Arrows, Scroll, Wrapper, Subtitle } from "./styles";
import "./styles.css"
import AudioPlayer from "../../components/AudioPlayer";

export const Mint = (props) => {
    return(
        <Container>
            <Genyses>Genyses</Genyses>
            <ArrowsWrapper>
                <Subtitle>Coming soon...</Subtitle>
                {/* <Wrapper>
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
                </Wrapper> */}
            </ArrowsWrapper>
        </Container>
    )
}