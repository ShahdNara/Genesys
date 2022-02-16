import React, { Component } from "react";
import { Wrapper, Container, Text } from "./styles";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tab: 0,
          mouse: this.props.mouse
        };
    }
    handleClick = async tab => {
        await this.setState({ tab });
        this.props.onClick(tab);
    };
    render() {
        return(
        <Wrapper>
            <Container>
                <Text onClick={() => this.handleClick(0)}>Genyses</Text>
                <Text onClick={() => this.handleClick(1)}>Synopsis</Text>
                <Text onClick={() => this.handleClick(2)}>Gallery</Text>
                {/* <Text onClick={() => this.handleClick(3)}>Roadmap</Text>
                <Text onClick={() => this.handleClick(4)}>Team</Text> */}
            </Container>
        </Wrapper>)
    }
}

export default Navbar