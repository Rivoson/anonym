'use client'
import styled from "styled-components";
import {Container} from "@/components/Container";
import {Button} from "@/components/Button";

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

const StyledLine = styled.div<{thin?: boolean, height?: number}>`
  border-left: ${props => props.thin ? "2px" : "4px"}  solid #000;
  height: ${props => props.height || 80}px;
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

const BlackContainer = styled.div`
  background-color: #000;
`

const StyledWeDoContainer = styled(BlackContainer)`
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

const InProductionCard = styled.div`
  background-image: url("/background3.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 32%;
  min-height: 65vh;
  display: flex;
  align-items: flex-end;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`

const InProductionContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  margin-top: 140px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 310px;
  }
`

const InProductionLabel = styled.div`
  background-color: #FFF;
  width: 100%;
  text-align: center;
  font-size: 19px;
  font-weight: 500;
  padding-top: 20px;
  padding-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const PerspectiveType = styled(BlackContainer)`
  background-color: #000;
  margin-top: 50px;
`

const PerspectiveTypeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
`

const PerspectiveTypeTitle = styled.div`
  font-size: 49px;
  color: #FFF;
  font-weight: 200;
  margin-bottom: 12px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`

const PerspectiveTypeCard = styled.div`
  background-image: url("/background3.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 32%;
  min-height: 50vh;
  display: flex;
  align-items: flex-end;
  @media (max-width: 768px) {
    width: 100%;
    min-height: 60vh;
  }
`

const PerspectiveTypeCardTitle = styled.div`
  color: #FFFF;
  font-size: 24px;
  margin-bottom: 16px;
  line-height: 30px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const PerspectiveTypeCardDescription = styled.div`
  color: #FFFF;
  font-size: 14px;
  font-weight: 300;
`

const PerspectiveTypeCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const PerspectiveTypeCardContent = styled.div`
  background-color: #000;
  height: 170px;
  padding-top: 12px;
  padding-bottom: 12px;
`

const PerspectiveDivider = styled.div`
  width: 10%;
  height: 1px;
  background-color: #FFF;
  margin-bottom: 40px;
  margin-top: 20px;
  @media (max-width: 768px) {
    width: 20%;
  }
`

const UseOurProject = styled.div`
  ::before {
    content: "";
    background-image: url("/background4.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 75vh;
    filter: brightness(30%);
    position: absolute;
  }
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    min-height: 60vh;
  }
`

const UseOurProjectTitle = styled.div`
  font-size: 40px;
  font-weight: 250;
  color: #FFF;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const UseOurProjectContent = styled.div`
  position: absolute;
  top: 30vh;
  left: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    left: 3vw;
  }
`

const ProtfolioButtonLbl = styled.div`
  font-variant: all-small-caps;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 22px;
  padding-right: 22px;
  @media (max-width: 768px) {
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 18px;
    padding-right: 18px;
    font-size: 14px;
  }
`

const ContainerWithVideo = styled(Container)`
  margin-top: 80vh;
`

const H1 = styled.h1`
  font-size: 49px;
`

const Thin = styled.span`
  font-weight: 200;
`

const Regular = styled.span`
  font-weight: 300;
`

const VideoContainer = styled.div`
  background-color: black;
  height: 50vh;
  width: 100%;
  flex: 0.7
`

const ContentWithVideo = styled.div`
  display: flex;
  margin-top: 30px;
`

const ClientNeedContainer = styled(BlackContainer)`
  color: white;
  font-size: 14px;
  padding-right: 60px;
  padding-left: 60px;
  padding-top: 30px;
  padding-bottom: 30px;
  font-weight: 300;
  line-height: 1.7;
`

const VideoRightContent = styled.div`
  flex: 0.3;
  margin-right: 50px;
  margin-left: 50px;
`

const MoreVideoButton = styled(Button)`
  background-color: white;
  color: black;
  font-size: 15px;
  font-weight: 500;
  width: 100%;
  height: 4vh;
  margin-top: 35px;
`

const Bold = styled.span`
  font-weight: 600;
`

const VideoLi = styled.li`
  margin-bottom: 14px;
  font-weight: 400;
  font-size: 14px;
`

const Video3DHelpToContainer = styled.div`
  margin-top: 20px;
`

export const Main = () => {
    const perspectiveTypes = [
        {
            title: "Développement immobilier",
            description: "Des expériences visuelles uniques pour positionner votre projet immobilier mieux " +
                "que vos concurrents."
        },
        {
            title: "Architecture et décoration intérieure",
            description: "Transformez vos idées en réalité et dépassez même vos attentes grâce à nos" +
                " visualisations de projets."
        },
        {
            title: "Catalogues de produits",
            description: "Améliorez vos conversions grâce à des perspective 3ds améliorés de vos produits. " +
                "Nous avons couvert tous les angles."
        },
    ];
    const animation3dHelps = [
        "Transmettre visuellement et émotionnellement le projet pour que vos clients l'aiment.",
        "Mieux présenter la géométrie, l'éclairage et les matériaux de votre projet.",
        "Faire preuve de professionnalisme et de sécurité de votre part pour la présentation avec le client."
    ];
    return <StyledMain>
        <Container>
            <StyledLightTitle>Spécialistes en prespectives 3D</StyledLightTitle>
            <StyledBoldTitle>Architecture & immobilier</StyledBoldTitle>
            <StyledLine height={60} />
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
        <InProductionContainer>
            <InProductionCard>
                <InProductionLabel>+ 7 ans d'expérience</InProductionLabel>
            </InProductionCard>
            <InProductionCard>
                <InProductionLabel>+ 1 500 clients satisfaits</InProductionLabel>
            </InProductionCard>
            <InProductionCard>
                <InProductionLabel>+ 15 000 images 3D produites</InProductionLabel>
            </InProductionCard>
        </InProductionContainer>
        <PerspectiveType>
            <PerspectiveTypeContainer>
                <PerspectiveTypeTitle>
                    Types de perspectives 3D
                </PerspectiveTypeTitle>
                <PerspectiveDivider />
                <PerspectiveTypeCardContainer>
                    {perspectiveTypes.map(perspective => (<PerspectiveTypeCard key={perspective.title}>
                        <PerspectiveTypeCardContent>
                            <PerspectiveTypeCardTitle>
                                {perspective.title}
                            </PerspectiveTypeCardTitle>
                            <PerspectiveTypeCardDescription>
                                {perspective.description}
                            </PerspectiveTypeCardDescription>
                        </PerspectiveTypeCardContent>
                    </PerspectiveTypeCard>) )}
                </PerspectiveTypeCardContainer>
            </PerspectiveTypeContainer>
        </PerspectiveType>
        <UseOurProject>
            <UseOurProjectContent>
                <UseOurProjectTitle>
                    Visitez nos projets rendus architecturaux
                </UseOurProjectTitle>
                <Button rounded>
                    <ProtfolioButtonLbl>
                        Voir portfolio
                    </ProtfolioButtonLbl>
                </Button>
            </UseOurProjectContent>
        </UseOurProject>
        <ContainerWithVideo>
            <H1><Thin>Conceptions et</Thin> <Regular>animations 3D</Regular></H1>
            <StyledLine {...{thin: true, height: 40}} />
            <ContentWithVideo>
                <VideoContainer />
                <VideoRightContent>
                    <ClientNeedContainer>
                        Apportez de la valeur ajoutée à vos clients potentiels grâce à des finitions hyperréalistes qui feront la différence dans la rapidité de vos ventes pour obtenir un financement rapide.
                        <MoreVideoButton>Voir plus d'animation 3D</MoreVideoButton>
                    </ClientNeedContainer>
                    <Video3DHelpToContainer>
                        <Bold><span style={{fontSize: 14}}>Les animations 3D vous aideront à:</span></Bold>
                        <ul style={{marginTop: 10}}>
                            {animation3dHelps.map((item, index) => <VideoLi key={index}>{item}</VideoLi>)}
                        </ul>
                    </Video3DHelpToContainer>
                </VideoRightContent>
            </ContentWithVideo>
        </ContainerWithVideo>
    </StyledMain>
}