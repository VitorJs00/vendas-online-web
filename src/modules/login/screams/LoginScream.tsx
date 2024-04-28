import Input from '../../../shared/Inputs/Input/input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScream,
  LimetedContainer,
  LogoImage,
} from '../styles/loginScream.styled';

const LoginScream = () => {
  return (
    <ContainerLoginScream>
      <ContainerLogin>
        <LimetedContainer>
          <LogoImage src="./logo.png" />
          <Input title="USUARIO"></Input>
          <Input title="SENHA"></Input>
        </LimetedContainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png" />
    </ContainerLoginScream>
  );
};
export default LoginScream;
