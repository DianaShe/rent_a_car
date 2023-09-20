import styled from "styled-components"
import { colors } from "utilities/colors"

export const List = styled.ul`
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 6px;
height: 40px;
overflow: hidden;
margin-bottom: 14px;
color: ${colors.features};`

export const Feature = styled.li`
font-family: 'Manrope', sans-serif;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 1.5;
padding-right: 6px;
&:not(:last-child) {
    border-right: 1px solid ${colors.features};
}
`




