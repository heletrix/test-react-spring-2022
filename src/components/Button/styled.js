import styled from 'styled-components';
import styles from '../../constants/styles';

export const StyledButton = styled.button`
  background: ${({ buttonStyle, isPlain, transparent }) => {
    if (isPlain || transparent) return 'transparent';
    if (buttonStyle === 'secondary' || buttonStyle === 'secondaryGray') return styles.colors.WHITE;
    return styles.colors.RED;
  }};
  color: ${({ buttonStyle, isPlain, transparent }) => {
    if (isPlain) return styles.colors.DARK_BLUE;
    if (buttonStyle === 'secondary' || buttonStyle === 'secondaryRed') return styles.colors.BLACK;
    if (buttonStyle === 'secondaryGray') return styles.colors.GRAY;
    if (transparent) return styles.colors.DARK_BLUE;
    return styles.colors.WHITE;
  }};
  border: ${({ buttonStyle, transparent }) =>
    transparent
      ? `1px solid ${styles.colors.DARK_BLUE}`
      : buttonStyle === 'secondaryGray' || buttonStyle === 'secondary'
      ? `1px solid ${styles.colors.LIGHT_GRAY}`
      : '1px solid transparent'};
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  ${({ defaultCase }) => defaultCase && 'text-transform: initial'};
  box-shadow: none;
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  min-width: ${({ buttonStyle }) => {
    if (buttonStyle === 'big') return '180px';
    return '160px';
  }};
  padding: ${({ buttonStyle, isPlain }) => {
    if (isPlain) return '9px 0 5px 0';
    if (buttonStyle === 'big') return '17px 12px 16px';
    return '3px 0 1px';
  }};
  margin-bottom: 10px;
  ${({ margin }) => margin && `margin: ${margin}`};
  font-family: 'HKGrotesk', sans-serif;
  transition: all 0.3s ease;
  width: ${({ isPlain }) => (isPlain ? 'auto' : '160px')};
  max-height: ${({ buttonStyle }) => {
    if (buttonStyle === 'big') return '55px';
    return '40px';
  }};
  min-height: ${({ buttonStyle }) => {
    if (buttonStyle === 'big') return '55px';
    return '40px';
  }};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:focus {
    outline: 0;
  }
  &:active {
    background: ${({ buttonStyle, isPlain, transparent }) =>
      buttonStyle === 'secondary' || buttonStyle === 'secondaryGray'
        ? styles.colors.WHITE
        : isPlain || transparent
        ? 'transparent'
        : styles.colors.DARK_RED};
    box-shadow: none;
  }

  &:hover:not([disabled]) {
    background: ${({ buttonStyle, disabled, isPlain, transparent }) => {
      if (buttonStyle === 'secondary' || buttonStyle === 'secondaryGray') return styles.colors.WHITE;
      if (isPlain || transparent) return 'transparent';
      if (disabled) return styles.colors.DISABLED_RED;
      return styles.colors.DARK_RED;
    }};
    color: ${({ buttonStyle, disabled, isPlain, transparent }) => {
      if (isPlain || transparent) return styles.colors.DARK_BLUE;
      if (buttonStyle === 'secondary' || buttonStyle === 'secondaryGray') return styles.colors.RED;
      return styles.colors.WHITE;
    }};
    box-shadow: none;
  }

  &:disabled {
    background: ${({ buttonStyle, disabled, isPlain, transparent }) => {
      if (isPlain || transparent) return transparent;
      if (buttonStyle === 'secondary' || buttonStyle === 'secondaryGray') return styles.colors.WHITE;
      return styles.colors.DISABLED_RED;
    }};
    color: ${({ buttonStyle, disabled, isPlain, transparent }) => {
      if (isPlain || transparent || buttonStyle === 'secondary' || buttonStyle === 'secondaryGray')
        return styles.colors.LIGHT_GRAY;
      return styles.colors.WHITE;
    }};
  }

  div {
    margin: 7px;
  }

  cursor: pointer;
`;

export const StyledLink = styled.a`
  background: ${styles.colors.RED};
  color: ${styles.colors.WHITE};
  cursor: pointer;
  text-decoration: none;
  border: none;
  outline: 0;
  text-transform: uppercase;
  box-shadow: 0 0 20px rgba(195, 54, 90, 0.43);
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 1px;
  min-width: 160px;
  display: inline-block;
  text-align: center;
  padding: 10px;
  font-family: NunitoSansSemiBold, serif;
  transition: all 0.3s;
  &:focus {
    outline: 0;
    border: none;
  }
  &:active {
    background: ${styles.colors.DARK_RED};
    color: ${styles.colors.WHITE};
  }
  &:hover {
    box-shadow: none;
    color: ${styles.colors.WHITE};
    text-decoration: none;
  }
`;
