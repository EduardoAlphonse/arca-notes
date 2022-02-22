import {
  Container,
  SideImageWrapper,
  FormContainer,
  Form,
  FormTitle,
} from './styles';

export function Login() {
  return (
    <Container>
      <SideImageWrapper></SideImageWrapper>
      <FormContainer>
        <Form>
          <FormTitle>
            Bem vindo ao
            <br />
            Customer Tracker
          </FormTitle>
        </Form>
      </FormContainer>
    </Container>
  );
}
