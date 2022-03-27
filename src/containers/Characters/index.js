import React, { useRef, useEffect } from "react";
import { Container, VerticalLine, Text, Wrapper, Box, Title, Circle, Icon, Content, ScrollWrapper, Picture, BigText } from "./styles";
import Androids from "./icon/androids.png"
import Centurions from "./icon/centurions.png"
import Council from "./icon/council.png"
import Legion from "./icon/legio.png"
import useWindowDimensions from '../../components/useWindowDimensions';

export const Characters = (props) => {
    const ref = useRef();
    const { height, width } = useWindowDimensions();
    const onScroll = (e) => {
        if (ref.current) {
          const { scrollTop, scrollHeight, clientHeight } = ref.current;
          if (scrollTop == 0 && e.nativeEvent.wheelDelta > 0) {
            props.back()
          }
          if (scrollTop + clientHeight >= scrollHeight) {
            props.next()
          }
        }
      };
    const Character = (props) => {
        if (width <= 750) {
            return(
                <Wrapper>
                    <Picture>
                        <Title>{props.title}</Title>
                        <Icon src={props.icon}/>
                    </Picture>
                    <Box>
                        <Text color={props.color}>{props.text}</Text>
                    </Box>
                </Wrapper>)
        }
        else if(props.isLeft) {
            return(
            <Wrapper>
                <Box>
                    <Text color={props.color}>{props.text}</Text>
                </Box>
                <Picture>
                    <Title>{props.title}</Title>
                    <Icon src={props.icon}/>
                </Picture>
            </Wrapper>)
        } else {
        return(
        <Wrapper>
            <Picture>
                <Title>{props.title}</Title>
                <Icon src={props.icon}/>
            </Picture>
            <Box>
                <Text color={props.color}>{props.text}</Text>
            </Box>
        </Wrapper>)
        }
    }
    // const Character = (props) => {
    //     const visible = props.isLeft
    //     return(
    //     <Wrapper>
    //         <Box style={{display: visible ? 'block' : 'none' }}>
    //             <Text color={props.color}>{props.text}</Text>
    //         </Box>
    //         <Picture>
    //             <Title>{props.title}</Title>
    //             <Icon src={props.icon}/>
    //         </Picture>
    //         <Box style={{display: !visible ? 'block' : 'none' }}>
    //             <Text color={props.color}>{props.text}</Text>
    //         </Box>
    //     </Wrapper>
    //     )
    // }
    return(
        <ScrollWrapper onWheelCapture={onScroll} ref={ref}>
            <BigText>Characters</BigText>
            <Container>
                
                <Content>
                    <VerticalLine>
                        <Circle color="#6C469D"/>
                        <Circle color="#723943"/>
                        <Circle color="#B7AB8D"/>
                        <Circle color="#FE7A25"/>
                    </VerticalLine>       
                    <Character icon={Androids} color="white" title="The Androids" text="The labor class of Genesys. Although they feel themselves to be human in every way, the androids are excluded from most of Martian society: relegated to the lowest rungs of society, unable to vote or hold office, and programmed to be incapable of resistance or physical violence. However, for the select few found and freed by The Legion, reprogramming is the path to freedom through resistance."/>
                    <Character icon={Centurions} isLeft={true} color="white" title="The Legion" text="The paramilitary organization of freed androids that leads the resistance against the government of Genyses. Having been driven out of Genesys after their initial failed rebellion, the organization has since gone underground and taken refuge in the few habitable places left on Earth."/>
                    <Character icon={Council} color="white" title="The Centurions" text="The genetically enhanced supersoldiers who serve as Genesys' military forces. Having been designed from birth to have superhuman levels of strength, speed, and endurance, the Centurions have made Mars feared throughout the solar system."/>
                    <Character icon={Legion} isLeft={true} color="white" title="The High Council" text="The ruling governmental body of Genesys. In the corporate structure of Genesys, the High Council is essentially the board of directors with a Chair(wo)man that effectively serves as the president and head of state. "/>
                </Content>
            </Container>
        </ScrollWrapper>
    )    
}