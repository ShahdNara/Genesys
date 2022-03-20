import React, { useState, useEffect } from "react";
import { Container, Row, Grid, Card, Picture, Info, Name, Role, Bio, Wrapper, BigText } from "./styles";
import Person from "./imgs/test.png"

const Item = (props) => {
    return(
        <Card>
            <Wrapper>
                <Picture src={props.src} />
            </Wrapper>
            <Info>
                <Name>{props.name}</Name>
                <Role>{props.role}</Role>
                <Bio>{props.bio}</Bio>
            </Info>
        </Card>
    )
}


export const Team = () => {
    return(
    <Container>
        <BigText>Team</BigText>
        <Grid>
            <Row>
                <Item src={Person} name="Adham" role="Managing Director"/>
                <Item src={Person} name="Jason" role="Creative Director"/>
                <Item src={Person} name="Shahd" role="Lead Developer"/>
                <Item src={Person} name="Sherif" role="Lead Artist"/>

            </Row>
            <Row>
                <Item src={Person} name="Jeff" role="Marketing Officer"/>
                <Item src={Person} name="Salma" role="Branding Officer"/>
                <Item src={Person} name="Diaa" role="Community Manager"/>
                <Item src={Person} name="Samir" role="Social Media Manager"/>
                <Item src={Person} name="Youssef" role="Graphic Designer"/>
            </Row>
        </Grid>
    </Container>
    )
}
