import styled from 'styled-components';

export const FlexRow = styled.div`
  display: flex;
  flex: 1;
  padding: 13px 0 5px;
  &:first-child {
    padding: 18px 0 5px;
  }
  &:last-child {
    padding: 28px 0 0;
    justify-content: space-between;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;
