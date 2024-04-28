import { Input as InputAntd, InputProps as InputPropsAntd } from 'antd';

interface InputProps extends InputPropsAntd {
  title?: string;
}

import { BoxInput, TitleInput } from './input.styles';
const Input = ({ title, ...props }: InputProps) => {
  return (
    <BoxInput>
      {title && <TitleInput>{title}</TitleInput>}

      <InputAntd {...props} />
    </BoxInput>
  );
};
export default Input;
