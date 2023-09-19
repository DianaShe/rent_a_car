import styled from "styled-components";
import {heartIcon} from '../../utilities/icons/icons'
import { Button } from "components/Button/Button";

export const CardWrapper = styled.li`
width: 274px; 
`

export const ImageWrapper = styled.div`
// width: 274px; 
// height: 286px;
margin-bottom: 14px;
position: relative;
`

export const Icon = styled(heartIcon)`
position: absolute;
top: 14px;
right: 14px;
stroke: #fff;

&:hover {
    stroke: #3470FF;
    fill: #3470FF;
}
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
color: #121417;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 1.5;
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
margin-bottom: 28px;`

