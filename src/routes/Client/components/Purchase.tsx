import styled from 'styled-components';

export type PurchaseData = {
  id: string;
  clientId: string;
  value: number;
  date: string;
  items: {
    description: string;
    quantity: number;
    value: number;
  }[];
};

type PurchaseProps = {
  data: PurchaseData;
};

export function Purchase({ data: { value, date, items } }: PurchaseProps) {
  return (
    <StyledPurchase>
      <Header>
        <TotalValue>R$ {value.toFixed(2)}</TotalValue>
        <Date>{date}</Date>
      </Header>

      <ItemList>
        {items.map((item) => (
          <Item key={item.description}>
            <Description>
              {item.quantity} x {item.description}
            </Description>
            <Value>
              <MoneySign>R$</MoneySign> {item.value.toFixed(2)}
            </Value>
          </Item>
        ))}
      </ItemList>
    </StyledPurchase>
  );
}

const StyledPurchase = styled.div`
  display: flex;
  align-self: flex-start;
  flex: 1;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 13rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.common.divider};

  padding: 1rem;

  background-color: ${({ theme }) => theme.colors.common.white};
  border-radius: ${({ theme }) => theme.shapes.borderRadius};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TotalValue = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: ${({ theme }) => theme.shapes.borderRadius};
  background-color: ${({ theme }) => theme.colors.primary.normal};
  font: ${({ theme }) => theme.typography.textSmallMedium};
  color: ${({ theme }) => theme.colors.common.white};
`;

export const Date = styled.span`
  font: ${({ theme }) => theme.typography.textSmall};
  color: ${({ theme }) => theme.colors.text.light};
`;

export const ItemList = styled.div``;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;

  color: ${({ theme }) => theme.colors.text.normal};
  font: ${({ theme }) => theme.typography.textSmall};

  padding: 0.25rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.common.divider};

  &:last-child {
    border: none;
  }
`;

export const Description = styled.p``;

export const Value = styled.span`
  min-width: 4rem;
  text-align: right;
  font: ${({ theme }) => theme.typography.textSmallSemiBold};
`;

export const MoneySign = styled.span`
  font: ${({ theme }) => theme.typography.textSmallestSemiBold};
`;
