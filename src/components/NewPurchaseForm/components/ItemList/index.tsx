import { FiTrash } from 'react-icons/fi';
import { theme } from '../../../../styles/theme';

import { Container, Quantity, Description, Value, RemoveItem } from './styles';

export function ItemList() {
  return (
    <Container>
      <Quantity>15kg</Quantity>
      <Description>Magnus Todo Dia Adulto</Description>
      <Value>89,90</Value>
      <RemoveItem>
        <FiTrash size="1.125rem" color={theme.colors.danger.normal} />
      </RemoveItem>
    </Container>
  );
}
