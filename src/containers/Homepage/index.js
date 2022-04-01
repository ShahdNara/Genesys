import React, { useState, useEffect, useCallback, useRef } from "react";
import { Container, Genesys, PlanetWrapper, Section } from "./styles";
import Navbar from "../../components/Navbar";
import { Scene } from "../../components/Scene";
import { Mint } from "../Mint";
import { Synopsis } from "../Synopsis";
import { Overview } from "../Overview";
import { Characters } from "../Characters";
import { FAQ } from "../FAQ";
import Roadmap from "../Roadmap";
import { Team } from "../Team";
import AudioPlayer from "../../components/AudioPlayer";
import Socials from "../../components/Socials";

function HomePage() {
    // const handleScroll = (e) => {
    //     console.log("eh")
    //     if ((tab == 0) || (tab == 1) || (tab == 4)){
    //         if (e.nativeEvent.wheelDelta > 0) {
    //         setTab(tab == 0 ? 0 : tab - 1)
    //     } else {
    //         setTab(tab == 4 ? 4 : tab + 1)
    //         }
    //     }
    // }

    // useEffect(() => {
    //     // initiate the event handler
    //     window.addEventListener("scroll", handleScroll);
    
    //     // this will clean up the event every time the component is re-rendered
    //     return function cleanup() {
    //       window.removeEventListener("scroll", handleScroll);
    //     }
    // })
    
    const [tab, setTab] = useState(0);
    const handleClick  = (e) => {
        setTab(e);
    }
    const sections = {
        0: <Mint/>,
        1: <Synopsis/>,
        2: <Overview/>,
        3: <Characters next={() => setTab(4)} back={() => setTab(2)}/>,
        4: <Roadmap next={() => setTab(5)} back={() => setTab(3)}/>,
        5: <Team />
    }

    const onWheel = (e) => {
        if ((tab == 0) || (tab == 1) || (tab == 2) || (tab == 5)){
            if (e.nativeEvent.wheelDelta > 0) {
            setTab(tab == 0 ? 0 : tab - 1)
        } else {
            setTab(tab == 5 ? 5 : tab + 1)
            }
        }
    }

    console.log(tab)
    if(tab != 6) {
    return(
        <Container onWheel={onWheel} onScroll={onWheel}>
            <Socials tab={tab}/>
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
    else{ return(
        <Container>
            <Socials />
            <Navbar onClick={handleClick}/>
            <Section>
                <FAQ />
            </Section>
        </Container>)}
    
}

export default HomePage;