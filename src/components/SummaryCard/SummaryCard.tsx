import { Container, Data, Text, Separator } from './styles';

export function SummaryCard() {
  return (
    <Container>
      <Data>
        <Text>Vendas</Text>
        <Text>48</Text>
      </Data>
      <Separator />
      <Data>
        <Text>Total</Text>
        <Text>R$ 8.548,05</Text>
      </Data>
    </Container>
  );
}
