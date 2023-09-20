import { NavBar, NavItem } from './Navigation.styled';

export const Navigation = () => {
    return (
        <NavBar>
            <NavItem to='/'>Home</NavItem>
            <NavItem to='/catalog'>Cars</NavItem>
            <NavItem to='/favorites'>Favorite</NavItem>
        </NavBar>
    )
}