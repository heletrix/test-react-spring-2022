import { StyledTextarea, Label, FlexColumn, Error } from './styled';

const Textarea = ({ label, name, register, rules = {}, error = {}, ...props }) => (
  <FlexColumn>
    {label && <Label>{label}</Label>}
    <StyledTextarea component="textarea" {...props} {...register(name, rules)} />
    {Boolean(error?.type) && <Error>{error.message || 'Invalid field'}</Error>}
  </FlexColumn>
);

export default Textarea;
