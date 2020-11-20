import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MomTesT from "../components/MomTest"
import Lady from "../images/concept-1/lady.jpg"
import Warehouse from "../images/concept-1/warehouse.jpg"
import Ship from "../images/concept-1/ship.png"
function ConceptOne() {
  return (
    <Layout>
      <HeroWrapper>
        <NavBar>
          <NavLink>Suppli</NavLink>
          <NavMenu>
            <NavItem>Demos</NavItem>
            <NavItem>FAQs</NavItem>
            <NavItem>Contact Us</NavItem>
          </NavMenu>
        </NavBar>
        <LeftWrapper>
          <CatchLine>RELAX.</CatchLine>
          <CatchLine2>WE GOT THIS.</CatchLine2>
          <Description>
            We handle your supply chain while you focus on whats important.
          </Description>
          <Button>Request A Demo</Button>
        </LeftWrapper>

        <HeroImgVertical src={Lady} />
        <HeroImgHorizontial src={Ship} />
        <HeroImgVerticalW src={Warehouse} />
      </HeroWrapper>
    </Layout>
  )
}

export default ConceptOne

const NavBar = styled.div`
  position: absolute;
  display: flex;
  grid-template-columns: auto auto;
  justify-content: space-between;
  width: 100vw;
  padding: 20px 30px;
`
const NavLink = styled(Link)``
const NavMenu = styled.div`
  display: flex;
  grid-template-columns: auto auto auto;
  gap: 42px;
`
const NavItem = styled.p``
const HeroWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: #f2c94c;
`
const LeftWrapper = styled.div`
  width: 32vw;
  height: 100vh;
  background: #c4c4c4;
  display: grid;
  grid-template-rows: 50px 50px 50px 50px;
  align-content: center;
  justify-items: center;
  text-align: center;
`
const RightWrapper = styled.div``
const CatchLine = styled.h1`
  font-size: 3rem;
`
const CatchLine2 = styled.h3``
const Description = styled.p``
const Button = styled.button`
  width: 200px;
  background: #f2c94c;
  border: 3px black solid;
  font-size: 1.2rem;
`

const HeroImgHorizontial = styled.img`
  width: 575px;
  height: 300px;
  position: absolute;
  z-index: 4;
  left: 300px;
  left: 920px;
  top: 539px;
`
const HeroImgVertical = styled.img`
  width: 300px;
  height: 375px;
  position: absolute;
  z-index: 5;
  left: 1100px;
  top: 120px;
`
const HeroImgVerticalW = styled.img`
  width: 300px;
  height: 375px;
  position: absolute;
  z-index: 3;
  left: 850px;
  top: 187px;
`
