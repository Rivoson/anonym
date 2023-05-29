'use client'

import styled from "styled-components";
import {Mail} from "@/components/icons/Mail";
import {Phone} from "@/components/icons/Phone";
import {Instagram} from "@/components/icons/Instagram";
import {Vimeo} from "@/components/icons/Vimeo";
import {Youtube} from "@/components/icons/Youtube";
import {Container} from "@/components/Container";

const StyledSectionContactInfo = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`

const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`

const StyledText = styled.div`
  margin-left: 8px;
  font-size: 14px;
  font-weight: lighter;
`

const StyledSection = styled.div`
  display: flex;
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`

const StyledIconContainer = styled.div`
  margin-left: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const SocialNetworkIconSize = 20
const SectionColor = "#FFF"

export const SectionContactInfo = () => <StyledSectionContactInfo>
    <StyledContainer>
        <StyledSection>
            <StyledInfo>
                <Mail fill={SectionColor} />
                <StyledText>
                    mail@mail.com
                </StyledText>
            </StyledInfo>

            <StyledInfo>
                <Phone fill={SectionColor} />
                <StyledText>
                    261 34 56 743 32
                </StyledText>
            </StyledInfo>
        </StyledSection>

        <StyledSection>
            <StyledIconContainer>
                <Youtube fill={SectionColor} width={SocialNetworkIconSize} height={SocialNetworkIconSize} />
            </StyledIconContainer>
            <StyledIconContainer>
                <Instagram fill={SectionColor} width={SocialNetworkIconSize} height={SocialNetworkIconSize} />
            </StyledIconContainer>
            <StyledIconContainer>
                <Vimeo fill={SectionColor} width={SocialNetworkIconSize} height={SocialNetworkIconSize} />
            </StyledIconContainer>
        </StyledSection>
    </StyledContainer>
</StyledSectionContactInfo>