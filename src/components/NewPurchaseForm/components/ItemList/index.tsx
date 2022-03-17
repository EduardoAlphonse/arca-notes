import { ButtonHTMLAttributes } from 'react';
import { FiTrash } from 'react-icons/fi';
import { theme } from '../../../../styles/theme';

import { Container, Quantity, Description, Value, RemoveItem } from './styles';

export type ItemListProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  quantity: string;
  description: string;
  value: number;
};

export function ItemList({
  quantity,
  description,
  value,
  ...rest
}: ItemListProps) {
  return (
    <Container>
      <Quantity>{quantity}</Quantity>
      <Description>{description}</Description>
      <Value>{value.toFixed(2)}</Value>
      <RemoveItem {...rest} type="button">
        <FiTrash size="1.125rem" color={theme.colors.danger.normal} />
      </RemoveItem>
    </Container>
  );
}
