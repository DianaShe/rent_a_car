import { Button } from "components/Button/Button";
import styled from "styled-components";
import { colors } from "utilities/colors";

export const Title = styled.h1`
margin-top: 20px;
margin-bottom: 60px;
color: ${colors.accent};
text-align: center;
`

export const AdvantagesList = styled.ul`
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
margin-bottom: 60px;`

export const Advantage = styled.li`
display: inline-block;
padding: 7px 14px;
border-radius: 35px;
background: #F9F9F9;
color: #363535;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.5;
letter-spacing: -0.24px;`

export const HeroButton = styled(Button)`
width: 300px;
`