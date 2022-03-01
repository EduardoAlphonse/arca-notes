import styled from 'styled-components';

import { theme } from '../../../styles/theme';

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

export function Purchase({ data: {} }: PurchaseProps) {
  return (
    <StyledPurchase>
      <Header>
        <TotalValue>R$ 200,15</TotalValue>
        <Date>30/01/2022</Date>
      </Header>

      <ItemList>
        <Item>
          <Description>3 x Sachê Whiskas</Description>
          <Value>
            <MoneySign>R$</MoneySign> 8,25
          </Value>
        </Item>
        <Item>
          <Description>3 x Sachê Whiskas</Description>
          <Value>
            <MoneySign>R$</MoneySign> 8,25
          </Value>
        </Item>
      </ItemList>
    </StyledPurchase>
  );
}

const StyledPurchase = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 30%;

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
`;

export const Description = styled.p``;

export const Value = styled.span``;

export const MoneySign = styled.span`
  font: ${({ theme }) => theme.typography.textSmallest};
`;
