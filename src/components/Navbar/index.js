import React, { useState, useRef, useEffect } from "react";
import { Wrapper, Container, Text, StyledMenu, StyledBurger, Banner, Announcement } from "./styles";


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

    useEffect(() => {
      setOpen(props.openMenu)
    }, [props.openMenu]);
    
    const handleOnclick = tab => {
        props.onClick(tab)
        setOpen(false)
    }
    const Menu = ({ open }) => {
        return (
          <StyledMenu open={open}>
              <Container>
                <Text onClick={() => handleOnclick(0)}>GENYSES</Text>
                <Text onClick={() => handleOnclick(1)}>SYNOPSIS</Text>
                <Text onClick={() => handleOnclick(2)}>OVERVIEW</Text>
                <Text onClick={() => handleOnclick(3)}>CHARACTERS</Text>
                <Text onClick={() => handleOnclick(4)}>ROADMAP</Text>
                <Text onClick={() => handleOnclick(5)}>TEAM</Text>
                {/* <Text onClick={() => handleOnclick(5)}>FAQ</Text> */}
            </Container>
          </StyledMenu>
        )
    }

    const node = useRef();
    console.log(props.banner)
    return (
      <Wrapper>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <Banner visible={props.banner} href="https://discord.gg/genyses" target="_blank" rel="noopener noreferrer"><Announcement>JOIN THE DISCORD NOW</Announcement></Banner>
      </Wrapper>
    )
}

export default Navbar