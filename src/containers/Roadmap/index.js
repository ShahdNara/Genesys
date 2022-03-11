import React, { useEffect, useState, useRef } from "react";
// import "./Timeline.css";
import { Container, Line, CircleRow, Circle, HorizontalWrapper, HorizontalWrapper2, Wrapper, Box, Icon, ThinLine, VerticalLine, Div, Container2, Row, Title, Text } from "./styles"
import Rocket from "./icons/1.png"
import Music from "./icons/2.png"
import Drop from "./icons/3.png"
import Quantum from "./icons/4.png"
import Vision from "./icons/5.png"
import Movie from "./icons/6.png"

const max_scroll = 5

const Roadmap = (props) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const ref = useRef(null);
    const ref2 = useRef(null);
    const scroll = (x) => {
        ref.current.scrollLeft += x;
        ref2.current.scrollLeft += x;
        console.log(ref2.current)
        console.log(ref.current)
    };

    const onWheel = (e) => {
        if (e.nativeEvent.wheelDelta < 0) {
            if (scrollPosition < max_scroll) {
                scroll(630)
                setScrollPosition(scrollPosition+1)
                
            } else {
                props.next()
            }
        } else if (scrollPosition > 0) {
            if (scrollPosition < max_scroll) {
                scroll(-630)
            }
            setScrollPosition(scrollPosition-1)
            
        } else {
            props.back()
        }
    }

    const Step = (props) => {
        return(
            <Wrapper>
                <Box up={!props.up}>
                    <Title>{props.title}</Title>
                    <Text>{props.text}</Text>
                </Box>
                <VerticalLine height="100px" invisible={!props.up}/>
                <Circle>
                    <Icon src={props.icon} />
                </Circle>
                <VerticalLine height="100px" invisible={props.up}/>
            </Wrapper>
        )
    }
    return (
        <Div>
            <HorizontalWrapper onWheelCapture={onWheel} ref={ref}>
                <Container>
                    <CircleRow>       
                        <Step icon={Rocket} flex={2} up title="GENYSES" text="Our first collection goes live"/>
                        <Step icon={Music} flex={1} title="EVENT HORIZON" text="The space where all are equal... let music take you on a journey through the GENYSES empire"/>
                        <Step icon={Drop} flex={1} up title="THE VOID" text="All it takes is a leap of faith, but will your fear stop you?... our second virtual drop"/>
                        <Step icon={Quantum} flex={1} title="SINGULARITY" text="Every hero deserves a reward… our first IRL drop"/>
                        <Step icon={Vision} flex={1} up title="THE LORE" text="The 1st ever edition of GENYSES comics gets released"/>
                        <Step icon={Movie} flex={2} title="THE PILOT" text="S1:E1 gets released… bringing it all together"/>
                        <Circle invisible/>
                    </CircleRow>
                </Container>
            </HorizontalWrapper>
            <HorizontalWrapper2 onWheelCapture={onWheel} ref={ref2}>
                <Container2>
                    <Line width={scrollPosition*(4000/6.4)} />  
                    <ThinLine width={3700} />
                </Container2>
            </HorizontalWrapper2>
        </Div>
    );
};

export default Roadmap;