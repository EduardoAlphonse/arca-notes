import { Container, Data, Text, Separator } from './styles';

export type SummaryCardProps = {
  purchasesNumber: number;
  purchasesTotalValue: number;
};

export function SummaryCard({
  purchasesNumber = 0,
  purchasesTotalValue = 0,
}: SummaryCardProps) {
  return (
    <Container>
      <Data>
        <Text>Vendas</Text>
        <Text>{purchasesNumber}</Text>
      </Data>
      <Separator />
      <Data>
        <Text>Total</Text>
        <Text>R$ {Number(purchasesTotalValue).toFixed(2)}</Text>
      </Data>
    </Container>
  );
}
