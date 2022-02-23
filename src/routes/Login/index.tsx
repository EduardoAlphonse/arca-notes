import { FiLock } from 'react-icons/fi';

import {
  Container,
  SideImageWrapper,
  FormContainer,
  Form,
  FormTitle,
  FormSubtitle,
} from './styles';

import { LabeledInput } from '../../components/LabeledInput';
import { Button } from '../../components/Button';

import Logo from '../../assets/logo.svg?component';

import { theme } from '../../styles/theme';

export function Login() {
  return (
    <Container>
      <SideImageWrapper>
        <Logo width="40%" height="auto" color="#ffffff" />
      </SideImageWrapper>

      <FormContainer>
        <Form>
          <FormTitle>
            Bem vindo ao
            <br />
            Arca Notes
          </FormTitle>

          <FormSubtitle>
            Para continuar,
            <br />
            insira seu ID e senha
          </FormSubtitle>

          <FiLock size="2.25rem" color={theme.colors.text.light} />

          <LabeledInput
            label="ID de usuário"
            inputAttrs={{ type: 'text', placeholder: 'Seu ID' }}
          />
          <LabeledInput
            label="Senha"
            inputAttrs={{ type: 'password', placeholder: 'Sua senha' }}
          />

          <Button title="Entrar" icon="arrowRight" onClick={() => {}} />
        </Form>
      </FormContainer>
    </Container>
  );
}
