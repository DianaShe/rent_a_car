import { Button } from "components/Button/Button";
import styled from "styled-components";
import { colors } from "utilities/colors";


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
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
margin-bottom: 60px;`

export const Advantage = styled.li`
display: inline-block;
padding: 7px 30px;
border-radius: 35px;
background: ${colors.background};
color: #0b44cd;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.5;
margin-bottom: 16px;
`

export const HeroButton = styled(Button)`
width: 300px;
`
