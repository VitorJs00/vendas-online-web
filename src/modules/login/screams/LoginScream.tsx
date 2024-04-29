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
  return (
    <ContainerLoginScream>
      <ContainerLogin>
        <LimetedContainer>
          <LogoImage src="./logo.png" />
          <TitleLogin level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <Input title="USUARIO"></Input>
          <Input title="SENHA"></Input>
          <Button type="primary" margin="64px 0px 16px 0px">
            ENTRAR
          </Button>
        </LimetedContainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png" />
    </ContainerLoginScream>
  );
};
export default LoginScream;
