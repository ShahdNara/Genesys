import { useState, useEffect, useRef } from 'react';

export default function TrackpadDetector() {
    const [isTrackpad, setTrackPad] = useState(false);
    const counter = useRef(0);

    function detectTrackPad(e) {
        if (e.wheelDeltaY) {
          if (e.wheelDeltaY === (e.deltaY * -3)) {
            setTrackPad(true);
          } 
        }
        else if (e.deltaMode === 0) {
            setTrackPad(true);
        }
    }
  
    useEffect(() => {
        console.log(isTrackpad)
        document.addEventListener("mousewheel", detectTrackPad, false);
        document.addEventListener("DOMMouseScroll", detectTrackPad, false);

        counter.current += 1;
        const timer = setTimeout(() => {setTrackPad(false); console.log('clear')}, 10000);

        return () => clearTimeout(timer);
        
    }, [isTrackpad])
  
    return isTrackpad;
  }
  