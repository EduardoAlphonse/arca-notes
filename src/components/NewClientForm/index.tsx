import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';

import {
  Container,
  Form,
  Section,
  SectionTitle,
  FormFields,
  Separator,
  FormOptions,
  LabeledInput,
  Label,
} from './styles';

// import { ClientData } from '../../@types/entities';
import { ClientData } from '../../@types/entities';
import { saveNewClient } from '../../services/firebase/database';

import { Subtitle } from '../CommonComponents';
// import { input } from '../input';
import { Button } from '../Button';

type NewClientFormProps = {
  isVisible: boolean;
  closeModal: () => void;
};

export function NewClientForm({
  isVisible = false,
  closeModal,
}: NewClientFormProps) {
  const { handleSubmit, register, reset } = useForm<ClientData>();

  function handleSaveNewClient(data: ClientData) {
    saveNewClient(data);
    // reset();
  }

  return (
    <Container isVisible={isVisible}>
      <Form onSubmit={handleSubmit(handleSaveNewClient)}>
        <Subtitle>Cadastrar novo cliente</Subtitle>

        <FormFields>
          <Section>
            <SectionTitle>Informações pessoais</SectionTitle>
            <LabeledInput>
              <Label>Nome</Label>
              <input
                autoComplete="off"
                placeholder="Nome do cliente"
                {...register('name', { required: true })}
              />
            </LabeledInput>
            <LabeledInput>
              <Label>Telefone</Label>
              <input
                autoComplete="off"
                placeholder="32988887777"
                {...register('phone', { required: true })}
              />
            </LabeledInput>
            <LabeledInput>
              <Label>CPF</Label>
              <input
                autoComplete="off"
                placeholder="12306029244"
                {...register('cpf', { required: true })}
              />
            </LabeledInput>
          </Section>
          <Separator />
          <Section>
            <SectionTitle>Endereço</SectionTitle>
            <LabeledInput>
              <Label>Logradouro</Label>
              <input
                autoComplete="off"
                placeholder="Nome da rua"
                {...register('address', { required: true })}
              />
            </LabeledInput>
            <div>
              <LabeledInput>
                <Label>Número</Label>
                <input
                  autoComplete="off"
                  placeholder="42"
                  {...register('addressNumber', { required: true })}
                />
              </LabeledInput>
              <LabeledInput>
                <Label>Bairro</Label>
                <input
                  autoComplete="off"
                  placeholder="Nome do bairro"
                  {...register('district', { required: true })}
                />
              </LabeledInput>
            </div>
          </Section>
        </FormFields>

        <FormOptions>
          <div />
          <div>
            <Button
              title="Cancelar"
              buttonAttrs={{ onClick: closeModal, type: 'button' }}
              buttonStyle="secondary"
            />
            <Button title="Cadastrar" buttonAttrs={{ type: 'submit' }} />
          </div>
        </FormOptions>
      </Form>
    </Container>
  );
}
