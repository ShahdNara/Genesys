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
                    <Character icon={Androids} color="white" title="The Androids" text="The labor class of GENYSES. The androids are relegated to the lowest rungs of Martian society and programmed not to disobey. However, for the select few found and freed by The Legion, reprogramming is the path to freedom through resistance."/>
                    <Character icon={Legion} isLeft={true} color="white" title="The Legion" text="The resistance of freed androids. After their initial failed rebellion, the group has since gone underground and taken refuge in the few habitable places left on Earth, biding their time before moving against GENYSES."/>
                    <Character icon={Centurions} color="white" title="The Centurions" text="The military force of GENYSES.  Designed from birth to have superhuman levels of strength, speed, and endurance, the Centurions are genetically enhanced supersoldiers that have made Mars feared throughout the solar system."/>
                    <Character icon={Council} isLeft={true} color="white" title="The High Council" text="The rulers of GENYSES. Composed of 7 members and led by the Councillor Supreme, the High Council wields near absolute power on GENYSES. Members are appointed by and from the Assembly, the elite legislative body of GENYSES."/>
                </Content>
            </Container>
        </ScrollWrapper>
    )    
}