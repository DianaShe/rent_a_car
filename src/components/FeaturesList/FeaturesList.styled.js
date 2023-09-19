import styled from "styled-components"

export const List = styled.ul`
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 6px;
height: 40px;
overflow: hidden;
margin-bottom: 14px;
color: rgba(18, 20, 23, 0.50);`

export const Feature = styled.li`
font-family: 'Manrope', sans-serif;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 1.5;
padding-right: 6px;
&:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.10);
}
`




