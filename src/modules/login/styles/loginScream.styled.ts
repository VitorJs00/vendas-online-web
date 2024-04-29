import { Typography } from 'antd';
import styled from 'styled-components';
const { Title } = Typography;

export const ContainerLoginScream = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

export const LogoImage = styled.img`
  width: 202px;
`;

export const TitleLogin = styled(Title)``;

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px;
  background-color: white;
  width: 100%;
  max-width: 646px;
  height: 100vh;
  right: 0;
  top: 0;
  z-index: 2;
`;

export const LimetedContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 498px;
  flex-direction: column;
  align-items: center;
`;
