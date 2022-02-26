import styled from 'styled-components';

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

const Container = styled.div`
  display: flex;
  padding: 1rem 0.5rem;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.normal};
  box-shadow: 0 1.5rem 1.5rem -1rem rgba(45, 138, 104, 0.5);
  border-radius: 6px;
`;

const Data = styled.div`
  flex: 1;
`;

const Text = styled.p`
  font: ${({ theme }) => theme.typography.subtitle};
  color: ${({ theme }) => theme.colors.common.white};
  text-align: center;
`;

const Separator = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.common.white};
`;
