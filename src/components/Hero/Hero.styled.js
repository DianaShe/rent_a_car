import { Button } from "components/Button/Button";
import styled from "styled-components";
import { colors } from "utilities/colors";
import { tickIcon } from "utilities/icons";


export const TextWrapper = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;

`

export const Title = styled.h1`
margin-top: 20px;
margin-bottom: 60px;
color: ${colors.accent};
text-align: center;
`

export const AdvantagesList = styled.ul`
margin-bottom: 60px;`

export const Advantage = styled.li`
display: flex;
align-items: center;
gap: 10px;
padding: 7px 30px;
border-radius: 35px;
background: ${colors.background};

margin-bottom: 16px;
`
export const TickIcon = styled(tickIcon)`
content: " ";
stroke: ${colors.accent};

`

export const Text = styled.p`
display: inline-block;
color: #0b44cd;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.5;`

export const HeroButton = styled(Button)`
width: 300px;
`
