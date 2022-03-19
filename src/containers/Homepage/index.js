import React, { useState, useEffect, useCallback, useRef } from "react";
import { Container, Genesys, PlanetWrapper, Section } from "./styles";
import Navbar from "../../components/Navbar";
import { Scene } from "../../components/Scene";
import { Mint } from "../Mint";
import { Synopsis } from "../Synopsis";
import { Characters } from "../Characters";
import Roadmap from "../Roadmap";
import { Team } from "../Team";
import AudioPlayer from "../../components/AudioPlayer";

function HomePage() {

    const [tab, setTab] = useState(0);
    const handleClick  = (e) => {
        setTab(e);
    }
    const sections = {
        0: <Mint/>,
        1: <Synopsis/>,
        2: <Characters next={() => setTab(3)} back={() => setTab(1)}/>,
        3: <Roadmap next={() => setTab(4)} back={() => setTab(2)}/>,
        4: <Team />
    }

    const onWheel = (e) => {
        if ((tab == 0) || (tab == 1) || (tab == 4)){
            if (e.nativeEvent.wheelDelta > 0) {
            setTab(tab == 0 ? 0 : tab - 1)
        } else {
            setTab(tab == 4 ? 4 : tab + 1)
            }
        }
    }

    console.log(tab)
    if(tab != 5) {
    return(
        <Container onWheel={onWheel}>
            <Navbar onClick={handleClick}/>
            <Section>
                {sections[tab]}
            </Section>
            <PlanetWrapper>
                <Scene tab={tab} />
            </PlanetWrapper>
            <AudioPlayer/>
        </Container>
    ) }
    else{ return(<><Navbar onClick={handleClick}/></>)}
    
}

export default HomePage;