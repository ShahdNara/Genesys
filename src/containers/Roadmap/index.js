import React, { useEffect, useState, useRef } from "react";
// import "./Timeline.css";
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

    const ref = useRef(null);
    const ref2 = useRef(null);
    const scroll = (x) => {
        ref.current.scrollLeft += x;
        ref2.current.scrollLeft += x;
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
        if (props.up) {
            return(
                <Wrapper>
                    <Box>
                        <Title>{props.title}</Title>
                        <Text>{props.text}</Text>
                    </Box>
                    <VerticalLine height="100px" invisible={!props.up}/>
                    <Circle>
                        <Icon src={props.icon} />
                    </Circle>
                </Wrapper>
            ) 
        } else {
            return(
                <Wrapper>
                    <Box>
                        <Title>{props.title}</Title>
                        <Text>{props.text}</Text>
                    </Box>
                    <VerticalLine height="100px" invisible={!props.up}/>
                    <Circle>
                        <Icon src={props.icon} />
                    </Circle>
                </Wrapper>
            )
        }
        }
        // return(
        //     <Wrapper>
        //         <Box up={!props.up}>
        //             <Title>{props.title}</Title>
        //             <Text>{props.text}</Text>
        //         </Box>
        //         <VerticalLine height="100px" invisible={!props.up}/>
        //         <Circle>
        //             <Icon src={props.icon} />
        //         </Circle>
        //         <VerticalLine height="100px" invisible={props.up}/>
        //     </Wrapper>
        // )
    
    return (
        <Div>
            <BigText>Roadmap</BigText>
            <HorizontalWrapper onWheelCapture={onWheel} ref={ref}>
                <Container>
                    <CircleRow>       
                        <Step icon={Rocket} flex={2} up title="GENYSES" text="Our first collection goes live"/>
                        <Step icon={Music} flex={1} title="EVENT HORIZON" text="The realm of music and otherworldly experience"/>
                        <Step icon={Drop} flex={1} up title="THE VOID" text="Our second virtual drop"/>
                        <Step icon={Quantum} flex={1} title="QUANTUM LEAP" text="Our first drop of real life collectibles"/>
                        <Step icon={Vision} flex={1} up title="VISION QUEST" text="Issue I, Vol. I of GENYSES comic released"/>
                        <Step icon={Movie} flex={2} title="SINGULARITY" text="Season I, Episode I of GENYSES released"/>
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