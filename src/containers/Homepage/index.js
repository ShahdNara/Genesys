import React, { useState, useEffect, useCallback, useRef } from "react";
import { Container, Genesys, PlanetWrapper, Section } from "./styles";
import Navbar from "../../components/Navbar";
import { Scene } from "../../components/Scene";
import { Mint } from "../Mint";
import { Synopsis } from "../Synopsis";
import Roadmap from "../Roadmap";
import AudioPlayer from "../../components/AudioPlayer";
import ReactAudioPlayer from 'react-audio-player';


function HomePage() {
    const [tab, setTab] = useState(0);
    const handleEnd = (e) => {
        setTab(e);
    }
    const sections = {
        // 0: <Mint />,
        0: <Mint/>,
        1: <Synopsis/>,
        2: <></>,
        3: <Roadmap next={() => setTab(4)} back={() => setTab(2)}/>
    }

    
    
    // useEffect(() => console.log(tab), [tab])
    const onWheel = (e) => {
        if (tab != 3) {
            if (e.nativeEvent.wheelDelta > 0) {
            setTab(tab == 0 ? 0 : tab - 1)
        } else {
            setTab(tab == 4 ? 4 : tab + 1)
            }
        }
    }

    return(
        <Container onWheel={onWheel}>
            {/* <Navbar onClick={handleClick}/> */}
            <Section>
                {sections[tab]}
            </Section>
            <PlanetWrapper>
                <Scene tab={tab} />
            </PlanetWrapper>
            <AudioPlayer/>
        </Container>
    )
    
}

export default HomePage;