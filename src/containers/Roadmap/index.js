import React, { useEffect, useState, useRef } from "react";
import { Container, Line, CircleRow, Circle, HorizontalWrapper, HorizontalWrapper2, Wrapper, Box, Icon, ThinLine, VerticalLine, Div, Container2, Row, Title, Text, BigText } from "./styles"
import Rocket from "./icons/1.png"
import Music from "./icons/2.png"
import Drop from "./icons/3.png"
import Quantum from "./icons/4.png"
import Vision from "./icons/5.png"
import Movie from "./icons/6.png"

const max_scroll = 5

const Roadmap = (props) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollCount, setScrollCount] = useState(0);

    const ref = useRef(null);
    const ref2 = useRef(null);
    const scroll = (x) => {
        ref.current.scrollLeft += x;
        ref2.current.scrollLeft += x;
    };
    const isTrackpad = props.isTrackpad;

    const onWheel = (e) => {
        setScrollCount(scrollCount+1)
        const sensitivity = isTrackpad ? props.trackpad_sens : props.mouse_sens
        console.log(sensitivity)
        if (scrollCount >= sensitivity) { //scrolling sensitivity
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
            setScrollCount(0)
        }
    }

    const Step = (props) => {
        return(<Wrapper>
            <Box>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
            </Box>
            <VerticalLine height="100px" invisible={!props.up}/>
            <Circle/>
        </Wrapper>)
    }
    
    return (
        <Div>
            <BigText>Roadmap</BigText>
            <HorizontalWrapper onWheelCapture={onWheel} ref={ref}>
                <Container>
                    <CircleRow>       
                        <Step icon={Rocket} flex={2} up title="SURVIVAL" text="THE ANDROIDS Toil"/>
                        <Step icon={Music} flex={1} title="UPRISING" text="THE LEGION Rebels"/>
                        <Step icon={Drop} flex={1} up title="WAR" text="THE CENTURIONS Attack"/>
                        <Step icon={Quantum} flex={1} title="ANARCHY" text="THE HIGH COUNCIL Fractures"/>
                        <Step icon={Vision} flex={1} up title="REDEMPTION" text="GENYSES Comics - Issue I, Vol. I"/>
                        <Step icon={Movie} flex={2} title="GENESIS" text="GENYSES - Season I, Episode I"/>
                        <Circle invisible/>
                    </CircleRow>
                </Container>
            </HorizontalWrapper>
            <HorizontalWrapper2 onWheelCapture={onWheel} ref={ref2}>
                <Container2>
                    <Line width={scrollPosition*(4000/6.5)} />  
                    <ThinLine width={3700} />
                </Container2>
            </HorizontalWrapper2>
        </Div>
    );
};

export default Roadmap;