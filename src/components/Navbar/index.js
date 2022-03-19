import React, { useState, useRef } from "react";
import { Wrapper, Container, Text, StyledMenu, StyledBurger } from "./styles";


const Burger = ({ open, setOpen }) => {
    return (
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    )
  }

const Navbar = props => {
    const [open, setOpen] = useState(false);
    const [tab, setTab] = useState(0);

    const handleOnclick = tab => {
        props.onClick(tab)
        setOpen(false)
    }
    const Menu = ({ open }) => {
        return (
          <StyledMenu open={open}>
              <Container>
                <Text onClick={() => handleOnclick(0)}>Genyses</Text>
                <Text onClick={() => handleOnclick(1)}>Synopsis</Text>
                <Text onClick={() => handleOnclick(2)}>Characters</Text>
                <Text onClick={() => handleOnclick(3)}>Roadmap</Text>
                <Text onClick={() => handleOnclick(4)}>Team</Text>
                <Text onClick={() => handleOnclick(5)}>FAQ</Text>
            </Container>
          </StyledMenu>
        )
    }

    const node = useRef();
    console.log(tab)
    return (
      <Wrapper>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </Wrapper>
    )
}

export default Navbar