import { FormEvent } from 'react';
import { FiLock } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { Container, SideImageWrapper, FormContainer, Form } from './styles';

import { LabeledInput } from '../../components/LabeledInput';
import { Button } from '../../components/Button';
import { Title, Subtitle } from '../../components/CommonComponents';

import Logo from '../../assets/logo.svg?component';

import { theme } from '../../styles/theme';

export function Login() {
  const navigate = useNavigate();

  function handleLogin(event: FormEvent) {
    event.preventDefault();

    navigate('/app');
  }

  return (
    <Container>
      <SideImageWrapper>
        <Logo width="40%" height="auto" color="#ffffff" />
      </SideImageWrapper>

      <FormContainer>
        <Form onSubmit={handleLogin}>
          <Title>
            Bem vindo ao
            <br />
            Arca Notes
          </Title>

          <Subtitle color={theme.colors.text.light}>
            Para continuar,
            <br />
            insira seu ID e senha
          </Subtitle>

          <FiLock size="2.25rem" color={theme.colors.text.light} />

          <LabeledInput
            label="ID de usuário"
            inputAttrs={{ type: 'text', placeholder: 'Seu ID' }}
          />
          <LabeledInput
            label="Senha"
            inputAttrs={{ type: 'password', placeholder: 'Sua senha' }}
          />

          <Button
            title="Entrar"
            icon="arrowRight"
            buttonAttrs={{
              onClick: () => {},
            }}
          />
        </Form>
      </FormContainer>
    </Container>
  );
}
