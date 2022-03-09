import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';

import {
  Container,
  Form,
  FormHeader,
  Section,
  SectionTitle,
  FormFields,
  Separator,
  ProductsList,
  FormOptions,
  LabeledInput,
  Label,
} from '../NewClientForm/styles';

// import { ClientData } from '../../@types/entities';
import { ClientData } from '../../@types/entities';
import { saveNewClient } from '../../services/firebase/database';

import { Subtitle } from '../CommonComponents';
// import { input } from '../input';
import { Button } from '../Button';
import { ItemList } from './components/ItemList';
import { theme } from '../../styles/theme';

type NewClientFormProps = {
  isVisible: boolean;
  closeModal: () => void;
};

type ItemData = {
  quantity: number;
  description: string;
  value: string;
};

type ItemListData = {
  data: ItemData[];
};

export function NewPurchaseForm({
  isVisible = false,
  closeModal,
}: NewClientFormProps) {
  const { handleSubmit, register, reset } = useForm<ItemData>();

  function handleAddNewItem(data: ItemData) {
    console.log(data);
    // reset();
  }

  return (
    <Container isVisible={isVisible}>
      <Form onSubmit={handleSubmit(handleAddNewItem)}>
        <FormHeader>
          <Subtitle>Inserir nova compra</Subtitle>
          <button onClick={closeModal}>
            <FiX size="1.25rem" color={theme.colors.text.normal} />
          </button>
        </FormHeader>

        <FormFields>
          <Section>
            <SectionTitle>Dados da venda</SectionTitle>
            <LabeledInput>
              <Label>Descrição</Label>
              <input
                autoComplete="off"
                placeholder="Descrição do produto/serviço"
                {...register('description', { required: true })}
              />
            </LabeledInput>
            <LabeledInput>
              <Label>Quantidade</Label>
              <input
                autoComplete="off"
                placeholder="15kg / 2"
                {...register('quantity', { required: true })}
              />
            </LabeledInput>
            <LabeledInput>
              <Label>Valor</Label>
              <input
                autoComplete="off"
                placeholder="89,90"
                {...register('value', { required: true })}
              />
            </LabeledInput>
          </Section>
          <Separator />
          <Section>
            <SectionTitle>Produtos/Serviços</SectionTitle>
            <ProductsList>
              <ItemList />
              <ItemList />
              <ItemList />
              <ItemList />
              <ItemList />
              <ItemList />
            </ProductsList>
          </Section>
        </FormFields>

        <FormOptions>
          <div>
            <Button
              title="Adicionar"
              buttonAttrs={{
                type: 'button',
                onClick: () => {},
                style: { flex: 'unset' },
              }}
            />
          </div>
        </FormOptions>
      </Form>
    </Container>
  );
}
