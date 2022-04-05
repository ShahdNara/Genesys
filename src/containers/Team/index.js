import React, { useState, useEffect } from "react";
import { Container, Row, Grid, Card, Picture, Info, Name, Role, Bio, Wrapper, BigText, Logo, Link, Socials, Icons } from "./styles";
import Shahd from "./imgs/shahd.PNG"
import Adham from "./imgs/adham.PNG"
import Jason from "./imgs/jason.PNG"
import Diaa from "./imgs/diaa.PNG"
import Salma from "./imgs/salma.PNG"
import Sherif from "./imgs/sherif.PNG"
import Samir from "./imgs/samir.PNG"
import Twitter from "./icons/twitter.png"
import LinkedIn from "./icons/linkedin.png"

import "./styles.css"

const Item = (props) => {
    const [flip, setFlip] = useState(0)

    const changeStyle=(e)=> {
        setFlip(!flip)
    }
    return(
        <div class="flip-card">
            <div class="flip-card-inner" style={{transform: flip ? "rotateY(180deg)": "rotateY(0deg)"}}>
                <div class="flip-card-front">
                    <Card>
                        <Wrapper onMouseOver={()=> setFlip(true)} onMouseLeave={()=> setFlip(false)}>
                            <Picture src={props.src} />
                        </Wrapper>
                        <Info>
                            <Socials>
                                <Name>{props.name}</Name>
                                <Icons>
                                    {props.twitter && <Link href={props.twitter}>
                                        <Logo src={Twitter}/>
                                    </Link>}
                                    {props.linkedin && <Link href={props.linkedin}>
                                        <Logo src={LinkedIn}/>
                                    </Link>}
                                </Icons>
                            </Socials>
                            <Role>{props.role}</Role>
                        </Info>
                    </Card>
                </div>
                <div class="flip-card-back">
                    <Card>
                        <Info>
                            <Bio>{props.bio}</Bio>
                        </Info>
                    </Card>
                </div>
            </div>
        </div>
    )
}


export const Team = () => {
    return(
    <Container>
        <BigText>Team</BigText>
        <Grid>
            <Row>
                <Item src={Adham} name="Adham" role="Managing Director" bio="London-based private equity investor focused on high-growth companies in Africa. Previously a M&A investment banker at J.P. Morgan in NYC. Web3 enthusiast and PA holder since mint. B.A. in Economics from Harvard." twitter="https://twitter.com/bedir_eth" linkedin="https://www.linkedin.com/in/adhambedir/"/>
                <Item src={Jason} name="Jason" role="Creative Director" bio="NYC-based screenwriter and media professional. Currently works at CAA, the world's largest talent agency. Previously a consultant at the Boston Consulting Group (BCG) in NYC. B.A. in History from Harvard." twitter="https://twitter.com/princechuk_eth" linkedin="https://www.linkedin.com/in/jason-chukwuma-827a51144/"/>
                <Item src={Shahd} name="Shahd" role="Lead Developer" bio="Seattle-based software engineer at Microsoft, focused on cybersecurity and machine learning applications. Previously the CTO of Carbin AI, a vehicular start-up based out of MIT. B.A. in Computer Science from Harvard." linkedin="https://www.linkedin.com/in/shahdnara/"/>
                <Item src={Sherif} name="Sherif" role="Lead Artist" bio="Cairo-based artist with a versatile portfolio spanning illustration, animation, photography, and directing. Degrees in Applied Arts and Animation from the German University in Cairo and Budapest Metropolitan University."/>

            </Row>
            <Row>
                <Item src={Salma} name="Salma" role="Branding Officer" bio="Based in Cairo, Egypt"/>
                <Item src={Diaa} name="Diaa" role="Community Manager" bio="Based in Cairo, Egypt"/>
                <Item src={Samir} name="Samir" role="Social Media Manager" bio="Based in Erlangen, Germany"/>
            </Row>
        </Grid>
    </Container>
    )
}
