import React from "react"

import styled from "styled-components"
import { Link } from "gatsby"

export default function MomTesT() {
  return (
    <LandingWrapper>
      <Nav>
        <NavLink>Cookie St.</NavLink>
        <NavMenu>
          <NavItem>About Me</NavItem>
          <NavItem>Past Work</NavItem>
          <NavItem>FAQs</NavItem>
        </NavMenu>
      </Nav>
      <HeroWrapper>
        <HeroH1>148 Cookie St</HeroH1>
        <HeroP>The Best Custom Cookies for all events big or small</HeroP>
        <Button>Order Now</Button>
      </HeroWrapper>
    </LandingWrapper>
  )
}

const LandingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #eee4dd;
  overflow: hidden;
`
const Nav = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 100vw;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  height: 60px;
`

const NavMenu = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 40px;
  background: #be4b27;
  padding: 25px;
  color: #eee4dd;
`
const NavLink = styled(Link)``
const NavItem = styled.p``
const HeroWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto auto 50px;
  align-content: center;
  justify-content: center;

  text-align: center;
`
const HeroH1 = styled.h1`
  font-size: 140px;
  line-height: 192px;
  color: #be4b27;
`
const HeroP = styled.p`
  font-size: 40px;
  line-height: 55px;
  width: 500px;
  margin: 0 auto;
`
const Button = styled.button`
  width: 300px;
  height: 90px;
  margin: 0 auto;
  margin-top: 50px;
  background: #be4b27;
  color: #eee4dd;
  font-size: 35px;
  border: none;
`
