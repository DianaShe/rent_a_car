import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "utilities/colors";

export const NavBar = styled.div`
display: flex;
flex-direction: column;
margin-top: 28px;`

export const NavItem = styled(NavLink)`
text-decoration: none;
padding: 20px;
background: ${colors.accent};
color: ${colors.white};
margin-bottom: 20px;
border-radius: 24px;

&.active {
    background: ${colors.buttonActive};
}
`