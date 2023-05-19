import React, { useEffect, useState, useRef } from "react";
import { Container, Line, CircleRow, Circle, HorizontalWrapper, HorizontalWrapper2, Wrapper, Box, Icon, ThinLine, VerticalLine, Div, Container2, Row, Title, Text, BigText } from "./styles"
import { MobileContainer, Column, MobileWrapper, MobileBox, MidLine } from "./styles"
import useWindowDimensions from '../../components/useWindowDimensions';

const max_scroll = 9

const Roadmap = (props) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollCount, setScrollCount] = useState(0);
    const { height, width } = useWindowDimensions();

    const ref = useRef(null);
    const ref2 = useRef(null);
    const scroll = (x) => {
        ref.current.scrollLeft += x;
        ref2.current.scrollLeft += x;
    };
    const isTrackpad = props.isTrackpad;

    const onWheel = (e) => {
        setScrollCount(scrollCount+1)
        const sensitivity = isTrackpad ? props.trackpad_sens : props.mouse_sens - 2
        console.log(scrollPosition)
        if (scrollCount >= sensitivity) { //scrolling sensitivity
            if (e.nativeEvent.wheelDelta < 0) {
                if (scrollPosition < max_scroll) {
                    scroll(760)
                    setScrollPosition(scrollPosition+1)
                    
                } else {
                    props.next()
                }
            } else if (scrollPosition > 0) {
                if (scrollPosition < max_scroll) {
                    scroll(-760)
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

    const MobileStep = (props) => {
        return(
        <MobileWrapper>
            <MobileBox last={props.last}>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
            </MobileBox>
            <MidLine invisible={props.last}/>
        </MobileWrapper>
        )
    }
    
    if (width >= 1000) {
        return (
            <Div>
                <BigText>Roadmap</BigText>
                <HorizontalWrapper onWheelCapture={onWheel} ref={ref}>
                    <Container>
                        <CircleRow>       
                            <Step flex={2} up title="SURVIVAL" text="THE ANDROIDS collection drops"/>
                            <Step flex={1} title="THE GAMES BEGIN" text="The introduction of interact-to-earn experiences as part of THE ANDROIDS story arc"/>
                            <Step flex={1} up title="UPRISING" text="THE LEGION collection drops"/>
                            <Step flex={1} title="CLOSING RANKS" text="The introduction of user-generated storylines as part of THE LEGION story arc"/>
                            <Step flex={1} up title="WAR" text="THE CENTURIONS collection drops"/>
                            <Step flex={1} title="BATTLE TESTED" text="The introduction of competitive gaming with prizes as part of THE CENTURIONS story arc"/>
                            <Step flex={1} title="ANARCHY" text="THE HIGH COUNCIL collection drops"/>
                            <Step flex={1} title="POWER TRIP" text="The introduction of exclusive membership rewards for holders of THE HIGH COUNCIL collection"/>
                            <Step flex={1} title="REDEMPTION" text="GENYSES Comics - Issue I, Vol. I released"/>
                            <Step flex={1} title="SINGULARITY" text="GENYSES - Season I, Episode I released"/>
                            {/* <Step flex={2} title="GENESIS" text="Our ecosystem expands into a DAO that takes control over the story"/> */}

                            <Circle invisible/>
                        </CircleRow>
                    </Container>
                </HorizontalWrapper>
                <HorizontalWrapper2 onWheelCapture={onWheel} ref={ref2}>
                    <Container2>
                        <Line width={scrollPosition*(4720/6)} />  
                        <ThinLine width={10000} />
                    </Container2>
                </HorizontalWrapper2>
            </Div>
            );
    } else {
        return(
            <Div>
                <BigText>Roadmap</BigText>
                <MobileContainer>
                    <Column>       
                        <MobileStep flex={2} up title="SURVIVAL" text="THE ANDROIDS collection drops"/>
                        <MobileStep flex={1} title="THE GAMES BEGIN" text="The introduction of interact-to-earn experiences as part of THE ANDROIDS story arc"/>
                        <MobileStep flex={1} up title="UPRISING" text="THE LEGION collection drops"/>
                        <MobileStep flex={1} title="CLOSING RANKS" text="The introduction of user-generated storylines as part of THE LEGION story arc"/>
                        <MobileStep flex={1} up title="WAR" text="THE CENTURIONS collection drops"/>
                        <MobileStep flex={1} title="BATTLE TESTED" text="The introduction of competitive gaming with prizes as part of THE CENTURIONS story arc"/>
                        <MobileStep flex={1} title="ANARCHY" text="THE HIGH COUNCIL collection drops"/>
                        <MobileStep flex={1} title="POWER TRIP" text="The introduction of exclusive membership rewards for holders of THE HIGH COUNCIL collection"/>
                        <MobileStep flex={1} title="REDEMPTION" text="GENYSES Comics - Issue I, Vol. I released"/>
                        <MobileStep flex={1} title="SINGULARITY" text="GENYSES - Season I, Episode I released" last/>
                    </Column>
                </MobileContainer>
            </Div>
        )
    }
};

export default Roadmap;