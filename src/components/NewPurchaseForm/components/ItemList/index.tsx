import { ButtonHTMLAttributes } from 'react';
import { FiTrash } from 'react-icons/fi';
import { theme } from '../../../../styles/theme';

import { Container, Quantity, Description, Value, RemoveItem } from './styles';

export type ItemListProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  key: number;
  quantity: string;
  description: string;
  value: string;
};

export function ItemList({
  quantity,
  description,
  value,
  ...rest
}: ItemListProps) {
  const convertedValue = Number(value.replace(',', '.'));

  return (
    <Container>
      <Quantity>{quantity}</Quantity>
      <Description>{description}</Description>
      <Value>{convertedValue.toFixed(2)}</Value>
      <RemoveItem {...rest} type="button">
        <FiTrash size="1.125rem" color={theme.colors.danger.normal} />
      </RemoveItem>
    </Container>
  );
}
