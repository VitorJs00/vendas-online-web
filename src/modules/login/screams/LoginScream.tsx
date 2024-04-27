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
        </LimetedContainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png" />
    </ContainerLoginScream>
  );
};
export default LoginScream;
