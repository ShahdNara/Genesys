import React, { useState, useEffect, useCallback, useRef } from "react";
import { Container, Genesys, PlanetWrapper, Section } from "./styles";
import Navbar from "../../components/Navbar";
import { Scene } from "../../components/Scene";
import { Mint } from "../Mint";
import { Synopsis } from "../Synopsis";

const sections = {
    // 0: <Mint />,
    0: <Mint/>,
    1: <Synopsis/>
}



function HomePage() {


    const [tab, setTab] = useState(0);
    const handleClick = (e) => {
        setTab(e);
    }
    // useEffect(() => console.log(tab), [tab])
    const onWheel = (e) => {
        if (e.nativeEvent.wheelDelta > 0) {
            setTab(tab == 0 ? 0 : tab - 1)
        } else {
            setTab(tab == 3 ? 3 : tab + 1)
        }
    }

    return(
        <Container onWheel={onWheel}>
            <Navbar onClick={handleClick}/>
            <Section>
                {sections[tab]}
            </Section>
            <PlanetWrapper>
                <Scene tab={tab} />
            </PlanetWrapper>
        </Container>
    )
    
}

export default HomePage;