import { FiTrash } from 'react-icons/fi';
import { theme } from '../../../../styles/theme';

import { Container, Quantity, Description, Value, RemoveItem } from './styles';

export type ItemData = {
  quantity: string;
  description: string;
  value: string;
};

export function ItemList({ quantity, description, value }: ItemData) {
  const convertedValue = Number(value.replace(',', '.'));

  return (
    <Container>
      <Quantity>{quantity}</Quantity>
      <Description>{description}</Description>
      <Value>{convertedValue.toFixed(2)}</Value>
      <RemoveItem>
        <FiTrash size="1.125rem" color={theme.colors.danger.normal} />
      </RemoveItem>
    </Container>
  );
}
