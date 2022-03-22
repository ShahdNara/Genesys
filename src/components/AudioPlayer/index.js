import React, { useState, useEffect } from "react";
import { Container, Play, PlayArrow, Logo, Dot, Expand, Column, Title, Bar, ProgBar, Wrapper } from "./styles";
import PlayIcon from '../../media/playArrow2.png'
import PauseIcon from '../../media/pause.png'
import soundtrack from '../../media/soundtrack.mp4';
import LogoIcon from '../../media/logo_white.png';

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(true);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
    );
  
    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, []);
  
    return [playing, toggle];
  };
  
function AudioPlayer(props) {
    const [playing, toggle] = useAudio(soundtrack);
    const [open, setOpen] = useState(false);
    const [timer, setTimer] = useState(0);
    const totalSeconds = 210;

    useEffect(() => {
      const timeout = setTimeout(() => {
        if (playing) {
          setTimer(timer + 1);
        }
        if (timer >= 135) {
          setTimer(0);
        }
      }, 1000);
  
      return () => {
        clearTimeout(timeout);
      };
    }, [timer, playing]);

    const Dots = () => {
      return(
        <Expand onClick={()=>setOpen(!open)}>
          <Dot s={1} isPlaying={playing} expand={open}/>
          <Dot s={2} isPlaying={playing} expand={open}/>
          <Dot s={3} isPlaying={playing} expand={open}/>
        </Expand>
      )
    }

    return(
      // <Wrapper>
    <Container expand={open} visible={props.visible}>
      <Play>
        <PlayArrow src={playing ? PauseIcon : PlayIcon} onClick={toggle} active={playing}/>
      </Play>
      <Logo src={LogoIcon} expand={open}/>
      <Dots />
      <Column expand={open}>
        <Title>Into The Void</Title>
        <Bar />
        <ProgBar width={timer/totalSeconds*100}/>
      </Column>
    </Container>
    // </Wrapper>
    )
}

export default AudioPlayer