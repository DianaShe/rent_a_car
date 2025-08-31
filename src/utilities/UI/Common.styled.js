import styled from 'styled-components';
import { colors } from 'utilities/colors';

export const Accent = styled.span`
  font-family: 'Manrope', sans-serif;
  color: ${colors.accent};
`;

export const LoadMore = styled.button`
  margin: 100px auto;
  min-width: 250px;
  max-height: 50px;
  border: none;
  border-radius: 12px;
  padding-top: 18px;
  padding-bottom: 18px;
  cursor: pointer;
  background: ${colors.accent};
  color: ${colors.white};

  &:hover {
    background: ${colors.buttonActive};
}
`;

export const Container = styled.div`
width: 100%;
// height: 100vh;
background-image: url("https://cdn.pixabay.com/photo/2021/09/07/11/53/car-6603726_1280.jpg");
background-position: center;
background-color: #2a2a2a;
background-repeat: no-repeat;
background-attachment: fixed;
  display: grid;
  width: 100%;
`;

export const Page = styled.div`
  display: flex;
 `
