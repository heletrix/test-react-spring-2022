import styled, { keyframes } from 'styled-components';

const loadingSpinnerSpin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
  margin: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  animation: ${loadingSpinnerSpin} 1s linear infinite;
  border: 2px solid ${props => props.secondaryColor || 'rgba(0,0,0,0.4)'};
  border-top: 2px solid ${props => props.mainColor || 'rgba(0,0,0,1)'};
`;

export const LogoSpinnerWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: rgba(255, 255, 255);
  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    margin-top: 2px;
  }
`;

export const LogoSpinner = styled.div`
  margin: 2px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  animation: ${loadingSpinnerSpin} 1s linear infinite;
`;
