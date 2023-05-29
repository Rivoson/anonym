'use client'

import styled from "styled-components";
import {Container} from "@/components/Container";

const StyledSection = styled.section`
  background-color: #FFF;
  color: black;
  display: flex;
  align-items: center;
  height: 100px;
  border-bottom: .5px solid silver;
  padding-right: 10px;
  padding-left: 30px;
`

const StyledLogo = styled.div`
  font-size: 30px;
`

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`

const StyledUl = styled.ul`
  display: flex;
`

const StyledLi = styled.li`
  padding-left: 30px;
  padding-right: 30px;
  font-weight: 240;
  font-size: 15px;
`

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`

export const Header = () => {
    return <StyledSection>
        <StyledContainer>
            <StyledLogo>Logo</StyledLogo>
            <StyledNav>
                <StyledUl>
                    <StyledLi>Prestations de Service</StyledLi>
                    <StyledLi>Portfolio</StyledLi>
                    <StyledLi>Blog</StyledLi>
                    <StyledLi>Études de cas</StyledLi>
                    <StyledLi>Contact</StyledLi>
                </StyledUl>
            </StyledNav>
        </StyledContainer>
    </StyledSection>
}