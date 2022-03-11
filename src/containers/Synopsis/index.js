import React, { useState, useEffect } from "react";
import { Container, Title, Text, Wrapper } from "./styles";
import "./styles.css"

export const Synopsis = () => {
    return (
        <Container>
            <div class="fade"></div>
            <section class="star-wars">
            <div class="crawl">
                <div class="title">
                <p>Synopsis</p>
                <h1>The Year is 2446</h1>
                </div>
                <p>Earth is no longer the home of the human race. After centuries of environmental catastrophe and the wars they caused, the planet is practically a wasteland.</p>
                <p>The new seat of power and influence in the solar system is now Mars, home to Genyses. A megacorporation turned quasi-government, Genyses is the first and largest of the human settlements spread throughout the solar system.</p>
                <p>For centuries, Mars has led this new age of humanity unchallenged, for the most part. But now, conflict with its colonies deeper in space as well as deep seated internal divisions threaten to destabilize the almighty spacefaring empire.</p>
            </div>
            </section>
        </Container>
    )
}