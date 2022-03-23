import styled from 'styled-components';
import styles from '../../constants/styles';

export const CloseButton = styled.div`
  position: absolute;
  display: block;
  cursor: pointer;
  top: 11px;
  right: 11px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: none;
  transition: background 0.3s;
  background: ${styles.colors.LIGHT_GRAY};
  &:after,
  &:before {
    display: block;
    content: '';
    width: 10px;
    border-radius: 15%;
    border-bottom: 1px solid ${styles.colors.BLACK};
    position: absolute;
    margin: 9px auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  &:hover {
    &:after,
    &:before {
      border-bottom: 1px solid ${styles.colors.RED};
    }
  }
  &:after {
    transform: rotate(45deg);
  }
  &:before {
    transform: rotate(-45deg);
  }
`;

export const InputRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  background-color: ${styles.colors.LIGHT_GRAY_2};
  border: none;
  border-radius: 8px;
  color: ${styles.colors.BLACK};
  font-weight: 700;
  font-size: 15px;
  line-height: 1.33;
  display: inline-block;
  outline: 0 none;
  width: 100%;
  ${({ bigRightPadding }) => (bigRightPadding ? 'padding: 11px 40px 9px 12px;' : 'padding: 11px 12px 9px;')}
  &::placeholder {
    color: ${styles.colors.LIGHT_GRAY};
  }

  ${({ invalid }) =>
    invalid &&
    `
    border: 1px solid ${styles.colors.RED};
    box-shadow: none;
  `}

  &:active,
  &:focus {
    outline: 0 none;
    box-shadow: 0 0 0 0.1em ${({ invalid }) => (invalid ? `${styles.colors.RED}` : `${styles.colors.GRAY}`)};
    background: ${styles.colors.WHITE};
    border: none;
  }

  &[disabled],
  &[readOnly] {
    color: ${styles.colors.GRAY};
    box-shadow: none;
    background: ${styles.colors.LIGHT_GRAY_2};
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin-left: 24px;
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
