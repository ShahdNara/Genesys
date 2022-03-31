import React, { useState, useEffect } from "react";
import { Container, Row, Grid, Card, Picture, Info, Name, Role, Bio, Wrapper, BigText } from "./styles";
import Shahd from "./imgs/shahd.PNG"
import Adham from "./imgs/adham.PNG"
import Jason from "./imgs/jason.PNG"
import Diaa from "./imgs/diaa.PNG"
import Salma from "./imgs/salma.PNG"
import Sherif from "./imgs/sherif.PNG"
import Samir from "./imgs/samir.PNG"
import "./styles.css"

const Item = (props) => {
    return(
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <Card>
                        <Wrapper>
                            <Picture src={props.src} />
                        </Wrapper>
                        <Info>
                            <Name>{props.name}</Name>
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
                <Item src={Adham} name="Adham" role="Managing Director" bio="London-based private equity investor focused on high-growth companies in Africa. Previously a M&A investment banker at J.P. Morgan in NYC. Web3 enthusiast and PA holder since mint. B.A. in Economics from Harvard."/>
                <Item src={Jason} name="Jason" role="Creative Director" bio="NYC-based screenwriter and media professional. Currently works at CAA, the world's largest talent agency. Previously a consultant at the Boston Consulting Group (BCG) in NYC. B.A. in History from Harvard."/>
                <Item src={Shahd} name="Shahd" role="Lead Developer" bio="Seattle-based software engineer at Microsoft, focused on cybersecurity and machine learning applications. Previously the CTO of Carbin AI, a vehicular start-up based out of MIT. B.A. in Computer Science from Harvard."/>
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
