import React, { useState, useEffect, useCallback, useRef } from "react";
import useSound from 'use-sound';
import { Container, Play, PlayArrow } from "./styles";
import PlayIcon from '../../media/playArrow.png'
import PauseIcon from '../../media/pause.png'
import soundtrack from '../../media/soundtrack.mp4';

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
  
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
  
function AudioPlayer() {
    // const [play, { stop, isPlaying }] = useSound(soundtrack);
    const [playing, toggle] = useAudio(soundtrack);

    return(
    <Container>
            <Play><PlayArrow src={playing ? PauseIcon : PlayIcon} onClick={toggle} active={playing}/></Play>
    </Container>)
}

export default AudioPlayer