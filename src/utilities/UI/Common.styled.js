import styled from "styled-components";
import { colors } from "utilities/colors";

export const Accent = styled.span`
font-family: 'Manrope', sans-serif;
color: ${colors.accent}`

export const LoadMore = styled.button`
margin-top: 100px;
border: none;
cursor: pointer;
background: transparent;
text-decoration: underline;
color: ${colors.accent};`

export const Container = styled.div`
display: grid`