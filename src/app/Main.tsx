'use client'
import styled from "styled-components";
import {Container} from "@/components/Container";

const StyledMain = styled.div`
  background-color: #FFF;
  color: #000;
  padding-top: 50px;
  @media (max-width: 768px) {
    padding-top: 20px;
  }
`

const StyledLightTitle = styled.div`
  font-size: 128px;
  font-weight: 300;
  line-height: 0.85;
  font-variant: all-small-caps;
  @media (max-width: 768px) {
    font-size: 50px;
  }
`

const StyledBoldTitle = styled.div`
  font-size: 128px;
  font-weight: bold;
  line-height: 0.85;
  font-variant: all-small-caps;
  @media (max-width: 768px) {
    font-size: 50px;
  }
`

const StyledLine = styled.div`
  border-left: 4px solid #000;
  height: 80px;
  margin-top: 30px;
  margin-bottom: 10px;
`

const StyledLi = styled.li`
  font-variant: all-small-caps;
  font-size: 18px;
  font-weight: 250;
`

const StyledWeAreContainer = styled.div`
  background-image: url("/background.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 75vh;
  margin-top: 40px;
`

const StyledWeAreTitle = styled.div`
  font-size: 78px;
  color: #FFF;
  font-weight: bold;
  padding-top: 50vh;
  @media (max-width: 768px) {
    font-size: 38px;
  }
`

const StyledWeDoContainer = styled.div`
  background-color: #000;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 60px;
  padding-right: 60px;
  position: absolute;
  width: 65%;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: start;
  }
`

const StyledWeDoContent1 = styled.div`
  font-size: 28px;
  font-weight: 200;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 20px;
  }
`

const StyledWeDoContent2 = styled.div`
  font-size: 16px;
  text-align: center;
  width: 35%;
  font-weight: 300;
  @media (max-width: 768px) {
    width: 100%;
    text-align: start;
    margin-top: 40px;
  }
`

export const Main = () => {
    return <StyledMain>
        <Container>
            <StyledLightTitle>Spécialistes en prespectives 3D</StyledLightTitle>
            <StyledBoldTitle>Architecture & immobilier</StyledBoldTitle>
            <StyledLine />
            <ul>
                <StyledLi>Perspectives 3D hyperréalistes</StyledLi>
                <StyledLi>Animations 3D</StyledLi>
                <StyledLi>Aménagement intérieur</StyledLi>
            </ul>
        </Container>
        <StyledWeAreContainer>
            <Container>
                <StyledWeAreTitle>
                    Nous sommes Anonym
                </StyledWeAreTitle>

                <StyledWeDoContainer>
                    <StyledWeDoContent1>
                        Nous aidons les promoteurs et les architectes à vendre rapidement leurs projets en moins de
                        15 jours.
                    </StyledWeDoContent1>
                    <StyledWeDoContent2>
                        Nous sommes leaders dans la création d'expériences qui suscitent des émotions et génèrent
                        des résultats garantis à 100 %.
                    </StyledWeDoContent2>
                </StyledWeDoContainer>
            </Container>
        </StyledWeAreContainer>
    </StyledMain>
}