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
import Socials from "../../components/Socials";

function HomePage() {

    const [tab, setTab] = useState(0);
    const [width, setWidth]   = useState(window.innerWidth);

    const handleClick = (e) => {
        setTab(e);
    }
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const sections = {
        0: <Mint width={width}/>

        // 1: <Synopsis/>,
        // 2: <Characters next={() => setTab(3)} back={() => setTab(1)}/>,
        // 3: <Roadmap next={() => setTab(4)} back={() => setTab(2)}/>,
        // 4: <Team />
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
    return(
        <Container>
            <Socials />
            {/* <Navbar onClick={handleClick}/> */}
            <Section>
                {sections[tab]}
            </Section>
            <PlanetWrapper>
                <Scene tab={tab} />
            </PlanetWrapper>
            <AudioPlayer visible={width >= 650}/>
        </Container>
    )
    
}

export default HomePage;