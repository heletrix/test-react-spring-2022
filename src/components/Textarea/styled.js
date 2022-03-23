import styled from 'styled-components';
import styles from '../../constants/styles';

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  &:first-child {
    margin: 0;
  }
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;
  color: ${styles.colors.GRAY};
  margin-bottom: 5px;
`;

export const Error = styled(Label)`
  color: ${styles.colors.RED};
  margin-top: 5px;
`;

export const StyledTextarea = styled.textarea`
  display: inline-block;
  outline: 0 none;
  text-align: left;
  background: ${styles.colors.LIGHT_GRAY_2};
  border-radius: 4px;
  border: none;
  color: ${styles.colors.BLACK};
  font-weight: 700;
  font-size: 15px;
  line-height: 1.33;
  padding: 4px 8px;
  resize: none;
  flex: 1;
  margin-bottom: 0;
  margin-top: 5px;
  min-width: ${({ width }) => width || 0}px;
  &::placeholder {
    color: ${styles.colors.LIGHT_GRAY};
  }
  &:active,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.1em ${styles.colors.GRAY};
    background: ${styles.colors.WHITE};
  }
  &[disabled] {
    box-shadow: none;
    color: ${styles.colors.GRAY};
    background: ${styles.colors.LIGHT_GRAY_2};
  }
`;
