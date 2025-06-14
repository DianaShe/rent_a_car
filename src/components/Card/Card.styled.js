import styled from "styled-components";
import {heartIcon} from '../../utilities/icons'
import { Button } from "components/Button/Button";
import { colors } from "utilities/colors";

export const CardWrapper = styled.li`
width: 274px;
max-height: 447px;
background-color: ${colors.background};
border-radius: 14px;
`

export const ImageWrapper = styled.div`
margin-bottom: 14px;
position: relative;
`

export const Icon = styled(heartIcon)`
position: absolute;
top: 14px;
right: 14px;
stroke: ${colors.white};
cursor:pointer;

&:hover {
    stroke: ${colors.accent};
    fill: ${colors.accent};
}
`
export const IconActive = styled(Icon)`
stroke: ${colors.accent};
fill: ${colors.accent};
`

export const Image = styled.img`
width: 274px;
height: 286px;
border-radius: 14px;
object-fit: cover;
`

export const TitleWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding-right: 10px;
padding-left: 10px;
color: ${colors.text};
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 1.5;
opacity: 1;
`
export const Title = styled.h2`
margin-bottom: 8px;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 1.5;`

export const ModalButton = styled(Button)`
width: auto;
padding-left: 50px;
padding-right: 50px;
`

export const FeaturesWrapper = styled.div`
margin-bottom: 28px;
padding-left: 5px;
`

