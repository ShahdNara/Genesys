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
import TrackpadDetector from "../../components/TrackpadDetector";
import useWindowDimensions from '../../components/useWindowDimensions';
import bg from "../../media/bg3.png";
import MintBg from "./bgs/mint_mobile.png";
import SynposisBg from "./bgs/synposis_mobile.png";
import CharactersBg from "./bgs/characters_mobile.png";
import TeamBg from "./bgs/team_mobile.png";


export const TRACKPAD_SENS = 25
export const MOUSE_SENS = 5

function HomePage() {
  
    const [tab, setTab] = useState(0);
    const [scrollCount, setScrollCount] = useState(0);
    const [open, setOpen] = useState(false);
    const isTrackpad = TrackpadDetector();
    const { height, width } = useWindowDimensions();
    const childRef = useRef();

    const handleClick  = (e) => {
        setTab(e);
    }

    const sections = {
        0: <Mint openMenu={() => setOpen(!open)}/>,
        1: <Synopsis/>,
        2: <Overview/>,
        3: <Characters next={() => setTab(4)} back={() => setTab(2)} isTrackpad={isTrackpad} trackpad_sens={TRACKPAD_SENS} mouse_sens={MOUSE_SENS}/>,
        4: <Roadmap next={() => setTab(5)} back={() => setTab(3)} isTrackpad={isTrackpad} trackpad_sens={TRACKPAD_SENS} mouse_sens={MOUSE_SENS}/>,
        5: <Team />
    }

    const bgs = {
        0: MintBg,
        1: SynposisBg,
        2: bg,
        3: CharactersBg,
        4: bg,
        5: TeamBg
    }

    const onWheel = (e) => {
        setScrollCount(scrollCount+1)
        const sensitivity = isTrackpad ? TRACKPAD_SENS : MOUSE_SENS
        console.log(sensitivity)
        if ((scrollCount >= sensitivity)) { //scrolling sensitivity
            if ((tab == 0) || (tab == 1) || (tab == 2) || (tab == 5)){
                if (e.nativeEvent.wheelDelta > 0) {
                setTab(tab == 0 ? 0 : tab - 1)
            } else {
                setTab(tab == 5 ? 5 : tab + 1)
                }
            }
            setScrollCount(0)
        }
    }

    if (width >= 820) {
        if(tab != 6) {
            return(
                <Container onWheel={onWheel} onScroll={onWheel} style={{backgroundImage: `url(${bg})`}}>
                    <Socials tab={tab}/>
                    <Navbar onClick={handleClick} ref={childRef} openMenu={open}/>
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
        else { 
                return(
                <Container style={{backgroundImage: `url(${bg})`}}>
                    <Socials />
                    <Navbar onClick={handleClick} ref={childRef} openMenu={open}/>
                    <Section>
                        <FAQ />
                    </Section>
                </Container>)
            }
    } else {
        return(
            <Container onWheel={onWheel} onScroll={onWheel} style={{backgroundImage: `url(${bgs[tab]})`, backgroundPosition: "center"}}>
                <Socials tab={tab}/>
                <Navbar onClick={handleClick} ref={childRef} openMenu={open}/>
                <Section>
                    {sections[tab]}
                </Section>
                <AudioPlayer/>
            </Container>
        )
    }
      
}

export default HomePage;