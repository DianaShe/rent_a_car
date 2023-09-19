import styled from 'styled-components';
import { closeIcon } from '../../utilities/icons/icons';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(18, 20, 23, 0.50);
  display: flex;
  justify-content: center;
  z-index: 1200;
  overflow: scroll;
`;

export const ModalStyled = styled.div`
  position: absolute;
  top: 20px;
  width: 461px;
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.5s ease, transform 0.3s ease;
  background: #fff;
  border-radius: 24px;
  padding: 40px;

  &.modal-open {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CloseButton = styled(closeIcon)`
  content: '';
  position: absolute;
  top: 16px;
  right: 16px;
  background-size: contain;
  background-repeat: no-repeat;
  stroke: #121417;
  cursor: pointer;
`;
