import { Container, Data, Text, Separator } from './styles';

type SummaryCardProps = {
  sales: number;
  total: number;
};

export function SummaryCard({ sales, total }: SummaryCardProps) {
  return (
    <Container>
      <Data>
        <Text>Vendas</Text>
        <Text>{sales}</Text>
      </Data>
      <Separator />
      <Data>
        <Text>Total</Text>
        <Text>R$ {total.toFixed(2)}</Text>
      </Data>
    </Container>
  );
}
