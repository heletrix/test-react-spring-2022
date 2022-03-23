import styled from 'styled-components';

export const ModalShadow = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  background-color: ${({ theme }) => theme.colors.SHADOW_BLACK};
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.colors.WHITE};
  padding: ${({ middlePaddings, bundleModal }) =>
    bundleModal ? '10px 25px 10px' : middlePaddings ? '24px 24px 14px' : '40px 42px'};
  ${({ padding }) => padding && `padding: ${padding}`};
  margin: 10px;
  border-radius: 8px;
  ${({ maxWidth, bundleModal }) => (maxWidth && !bundleModal ? `max-width: ${maxWidth}px` : null)};
  min-width: ${({ minWidth }) => minWidth}px;
  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}px` : `100vh`)};
  overflow: ${({ overflowMode = 'auto' }) => overflowMode};
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.LIGHT_BLACK};
  }
`;

export const Heading = styled.span`
  flex: 1;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
`;

export const FlexRow = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  ${({ withoutHeading }) => withoutHeading && 'flex-direction: row-reverse'};
`;
