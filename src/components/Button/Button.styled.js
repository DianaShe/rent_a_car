import styled from "styled-components";
import { colors } from "utilities/colors";

export const ActionButton = styled.button`
width: 100%;
border-radius: 12px;
border: none;
background: ${colors.accent};
color: ${colors.white};
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 1.43;
padding-top: 12px;
padding-bottom: 12px;
cursor: pointer;
opacity: 1;

&:active, &:hover {
    background: ${colors.buttonActive};
}`
