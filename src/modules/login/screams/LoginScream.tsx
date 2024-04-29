import { useState } from 'react';

import Button from '../../../shared/buttons/buton/Button';
import Input from '../../../shared/Inputs/Input/input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScream,
  LimetedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/loginScream.styled';

const LoginScream = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handlelogin = () => {
    alert(`Username: ${username}  Password: ${password}`);
  };

  return (
    <ContainerLoginScream>
      <ContainerLogin>
        <LimetedContainer>
          <LogoImage src="./logo.png" />
          <TitleLogin level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <Input
            title="USUARIO"
            margin="32px 0px 0px"
            onChange={handleUsername}
            value={username}
          ></Input>
          <Input
            title="SENHA"
            margin="32px 0px 0px"
            onChange={handlePassword}
            value={password}
            type="password"
          ></Input>
          <Button type="primary" margin="64px 0px 16px 0px" onClick={handlelogin}>
            ENTRAR
          </Button>
        </LimetedContainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png" />
    </ContainerLoginScream>
  );
};
export default LoginScream;
