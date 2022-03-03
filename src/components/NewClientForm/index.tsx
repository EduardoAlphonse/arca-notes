import {
  Container,
  Form,
  Section,
  SectionTitle,
  FormFields,
  Separator,
  FormOptions,
} from './styles';

import { saveNewClient } from '../../services/firebase/database';

import { Subtitle } from '../CommonComponents';
import { LabeledInput } from '../LabeledInput';
import { Button } from '../Button';

type NewClientFormProps = {
  isVisible: boolean;
  closeModal: () => void;
};

export function NewClientForm({
  isVisible = false,
  closeModal,
}: NewClientFormProps) {
  function handleSaveNewClient() {
    saveNewClient({
      id: '71259341',
      name: 'Eduardo Oliveira',
      phone: '32998099878',
      address: 'Rua São Mateus 632/201',
      sales: [],
    });
  }

  return (
    <Container isVisible={isVisible}>
      <Form>
        <Subtitle>Cadastrar novo cliente</Subtitle>

        <FormFields>
          <Section>
            <SectionTitle>Informações pessoais</SectionTitle>
            <LabeledInput
              label="Nome"
              inputAttrs={{ placeholder: 'Nome do cliente' }}
            />
            <LabeledInput
              label="Telefone"
              inputAttrs={{ placeholder: '32988887777' }}
            />
            <LabeledInput
              label="CPF"
              inputAttrs={{ placeholder: '12306029244' }}
            />
          </Section>
          <Separator />
          <Section>
            <SectionTitle>Endereço</SectionTitle>
            <LabeledInput
              label="Logradouro"
              inputAttrs={{ placeholder: 'Nome da rua' }}
            />
            <div>
              <LabeledInput label="Número" inputAttrs={{ placeholder: '42' }} />
              <LabeledInput
                label="Bairro"
                inputAttrs={{ placeholder: 'Nome do bairro' }}
              />
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
            <Button
              title="Cadastrar"
              buttonAttrs={{ onClick: handleSaveNewClient, type: 'submit' }}
            />
          </div>
        </FormOptions>
      </Form>
    </Container>
  );
}
