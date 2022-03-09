import { useState, useRef } from 'react';
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

import { saveNewPurchase } from '../../services/firebase/database';

import { Subtitle } from '../CommonComponents';
import { Button } from '../Button';
import { ItemList } from './components/ItemList';
import { theme } from '../../styles/theme';

import { ItemData } from './components/ItemList';

type NewClientFormProps = {
  isVisible: boolean;
  closeModal: () => void;
};

type ItemListData = ItemData[];

export function NewPurchaseForm({
  isVisible = false,
  closeModal,
}: NewClientFormProps) {
  const [purchaseItemsList, setPurchaseItemsList] = useState<ItemListData>([]);

  const { handleSubmit, register, reset, control } = useForm<ItemData>();
  const descriptionInputRef = useRef<HTMLInputElement>(null);

  function handleAddNewItem(data: ItemData) {
    // console.log('test');
    // console.log(data);
    setPurchaseItemsList((prevItems) => [...prevItems, data]);
    reset();
    // descriptionInputRef.current?.focus();
  }

  return (
    <Container isVisible={isVisible}>
      <Form onSubmit={handleSubmit(handleAddNewItem)}>
        <FormHeader>
          <Subtitle>Inserir nova compra</Subtitle>
          <button onClick={closeModal} type="button">
            <FiX size="1.25rem" color={theme.colors.text.normal} />
          </button>
        </FormHeader>

        <FormFields>
          <Section>
            <SectionTitle>Dados da venda</SectionTitle>
            <LabeledInput>
              <Label>Descrição</Label>
              <input
                {...register('description', { required: true })}
                autoComplete="off"
                placeholder="Descrição do produto/serviço"
                // ref={descriptionInputRef}
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
              {purchaseItemsList.map((purchaseItem) => (
                <ItemList
                  key={purchaseItem.description}
                  description={purchaseItem.description}
                  quantity={purchaseItem.quantity}
                  value={purchaseItem.value}
                />
              ))}
            </ProductsList>
          </Section>
        </FormFields>

        <FormOptions>
          <div style={{}}>
            <Button
              title="Adicionar"
              buttonAttrs={{
                type: 'submit',
                style: { flex: 'unset' },
              }}
            />

            <Button
              title="Finalizar"
              buttonAttrs={{
                type: 'button',
                style: { flex: 'unset' },
              }}
            />
          </div>
        </FormOptions>
      </Form>
    </Container>
  );
}
