import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Cat from "../images/concept-1/cat.jpg"
import Paw from "../images/concept-1/paw.svg"

export default function Concept_2() {
  return (
    <HomepageWrapper>
      <Nav>
        <NavLogo to="/">Sit R Us</NavLogo>
        <NavMenu>
          <NavItem>About Us</NavItem>
          <NavItem>Testimonies</NavItem>
          <NavItem>Plans</NavItem>
          <NavItem>FAQs</NavItem>
        </NavMenu>
        <NavSignIn>Sign In</NavSignIn>
      </Nav>
      <HeroWrapper>
        <img className="paw-1" src={Paw} />
        <img className="paw-2" src={Paw} />
        <LeftSide>
          <HomeButton>Sign Up</HomeButton>
          <HomeP>One Fee</HomeP>
          <HomeP>No Hassle</HomeP>
          <HomeP>Unlimited Sits</HomeP>
        </LeftSide>
        <RightSide>
          <HeroH1>SIT R US</HeroH1>
          <ImageSquares>
            <div className="square-1" />
            <div className="square-2" />
            <div className="square-3" />
            <div className="square-4" />
          </ImageSquares>
        </RightSide>
      </HeroWrapper>
    </HomepageWrapper>
  )
}

const HomepageWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: #cbffe6;
  overflow: hidden;
`
const Nav = styled.nav`
  position: absolute;
  width: 10vw;
  height: 100vh;
  background: #f9c5fa;
  padding: 20px;
  font-size: 1.2rem;

  display: grid;
  grid-template-rows: auto auto auto;
  align-content: space-between;
`

const NavLogo = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 600;
  font-size: 2rem;
`
const NavMenu = styled.div``
const NavItem = styled.p`
  padding: 10px 0;
`
const NavSignIn = styled.p``
const HeroWrapper = styled.div`
  position: relative;
  height: 100vh;
  display: grid;
  grid-template-columns: 200px auto;
  margin-left: 20vw;
  align-content: center;

  .paw-1 {
    position: absolute;
    width: 1012.39px;
    height: 506.2px;
    left: -30px;
    top: 200px;
    opacity: 0.2;
    transform: rotate(-47.03deg);
  }

  .paw-2 {
    position: absolute;
    width: 1012.39px;
    height: 506.2px;
    left: -250px;
    top: 20px;
    opacity: 0.2;
    transform: rotate(-47.03deg);
    z-index: 1;
  }
`
const LeftSide = styled.div`
  text-align: center;
  align-self: end;
  padding-bottom: 200px;
`
const RightSide = styled.div`
  height: 100vh;
  position: relative;
`
const HomeButton = styled.button`
  background: #de94df;
  border-radius: 11px;
  font-size: 1.5rem;
  padding: 10px 40px;
  border: none;
  z-index: 100;
`
const HomeP = styled.p`
  font-size: 1.2rem;
`
const HeroH1 = styled.h1`
  position: absolute;
  font-size: 6rem;

  top: 100px;
  left: 300px;
  transition: 1s ease;

  color: #de94df;

  transform: rotate(7.47deg);
  &:hover {
    scale: 1.2;
  }
`
const ImageSquares = styled.div`
  .square-1 {
    position: absolute;
    width: 586px;
    height: 375px;
    left: 403px; //3
    top: 293px; //2

    background: #efacf0;
  }

  .square-2 {
    position: absolute;
    width: 586px;
    height: 375px;
    left: 400px;
    top: 300px;

    background: #f9c5fa;

    transform: rotate(3.4deg);
  }

  .square-3 {
    position: absolute;
    width: 586px;
    height: 375px;
    left: 410px;
    top: 280px;

    background: #de94df;

    transform: rotate(-4.27deg);
  }

  .square-4 {
    position: absolute;
    width: 549.65px;
    height: 341.54px;
    left: 425px;
    top: 295px;

    background: url(${Cat});
    transform: rotate(-4.12deg);
  }
`
const Squares = styled.div`
  position: absolute;
  width: 586px;
  height: 375px;
  left: 687px;
  top: 510.65px;

  background: #de94df;

  transform: rotate(-4.27deg);
`
