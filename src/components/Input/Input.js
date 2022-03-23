import React from 'react';
import { StyledInput, InputRow, CloseButton, Label, FlexColumn, Error } from './styled';

const Input = ({
  name,
  register,
  rules,
  error,
  inputConfig = {},
  reset,
  wrapperStyle,
  placeholder,
  label,
  ...otherProps
}) => {
  return (
    <FlexColumn>
    {label && <Label>{label}</Label>}
    <InputRow closeButton={Boolean(reset)} style={wrapperStyle}>
      <StyledInput
        {...otherProps}
        {...inputConfig}
        bigRightPadding={Boolean(reset)}
        {...register(name, rules)}
        placeholder={placeholder}
      />
      {Boolean(reset) && <CloseButton onClick={reset} />}
    </InputRow>
    {Boolean(error?.type) && <Error>{error.message || 'Invalid field'}</Error>}
  </FlexColumn>
  );
};

export default Input;
