import PropTypes from 'prop-types';
import { LoadingSpinner } from 'components';
import { StyledButton, StyledLink } from './styled';

const Button = ({
  onClick,
  inputType = 'button',
  styles,
  loading = false,
  title,
  type,
  transparent,
  href,
  disabled = false,
  isPlain,
  defaultCase,
  form,
  margin
}) =>
  type !== 'link' ? (
    <StyledButton
      onClick={!disabled ? onClick : () => {}}
      type={inputType}
      buttonStyle={type}
      disabled={disabled}
      transparent={transparent}
      isPlain={isPlain}
      defaultCase={defaultCase}
      margin={margin}
      {...(form ? { form } : {})}>
      {title}{' '}
      {loading ? (
        <LoadingSpinner
          color={type === 'small' || type === 'big' ? 'light' : 'dark'}
        />
      ) : null}
    </StyledButton>
  ) : (
    <StyledLink
      styles={styles}
      href={href}
      disabled={disabled}
      target="_blank"
      rel="noopener noreferrer">
      {title}
    </StyledLink>
  );

Button.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['small', 'big', 'secondary', 'secondaryGray', 'link']),
  href: PropTypes.string, // only if it is 'link'
  disabled: PropTypes.bool,
  isPlain: PropTypes.bool,
  transparent: PropTypes.bool
};

Button.defaultProps = {
  type: 'small',
  onClick: () => {},
  href: '#',
  disabled: false,
  isPlain: false,
  transparent: false
};

export default Button;
