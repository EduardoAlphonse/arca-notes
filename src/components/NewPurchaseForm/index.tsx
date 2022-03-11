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

// import { saveNewPurchase } from '../../services/firebase/database';

import { Subtitle } from '../CommonComponents';
import { Button } from '../Button';
import { ItemList } from './components/ItemList';
import { theme } from '../../styles/theme';

import { saveNewPurchase } from '../../services/firebase/database';

import { ItemData } from './components/ItemList';
import { randomNumber } from '../../utils/randomNumber';

type NewClientFormProps = {
  isVisible: boolean;
  clientId: string;
  closeModal: () => void;
};

type FormData = {
  quantity: string;
  description: string;
  value: string;
};

export function NewPurchaseForm({
  isVisible = false,
  clientId,
  closeModal,
}: NewClientFormProps) {
  const [purchaseItemsList, setPurchaseItemsList] = useState<ItemData[]>([]);

  const { handleSubmit, register, reset } = useForm<FormData>();
  const descriptionInputRef = useRef<HTMLInputElement>(null);

  function handleAddNewItem(data: FormData) {
    const newItem = { ...data, key: randomNumber() };
    console.log(newItem);
    setPurchaseItemsList((prevItems) => [newItem, ...prevItems]);
    reset();
  }

  function handleRemoveItem(key: number) {
    const newPurchaseItemsList = purchaseItemsList.filter(
      (item) => item.key !== key
    );
    setPurchaseItemsList(newPurchaseItemsList);
  }

  function handleSavePurchase() {
    saveNewPurchase(clientId, {});
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
                type="number"
                step="0.01"
                min="0"
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
                  key={purchaseItem.key}
                  description={purchaseItem.description}
                  quantity={purchaseItem.quantity}
                  value={purchaseItem.value}
                  onClick={() => handleRemoveItem(purchaseItem.key)}
                />
              ))}
            </ProductsList>
          </Section>
        </FormFields>

        <FormOptions>
          <div>
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
                onClick = {},
              }}
            />
          </div>
        </FormOptions>
      </Form>
    </Container>
  );
}
