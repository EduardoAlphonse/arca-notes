import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: ${({ theme }) => theme.shapes.borderRadius};
  gap: 0.75rem;
  font: ${({ theme }) => theme.typography.textSmall};
  color: ${({ theme }) => theme.colors.text.normal};
  background-color: ${({ theme }) => theme.colors.common.white};
`;

export const Quantity = styled.span``;

export const Description = styled.p``;

export const Value = styled.span``;

export const RemoveItem = styled.button`
  font-size: 0;
  padding: 0.25rem;
  background-color: ${({ theme }) => theme.colors.common.white};
  border: none;

  cursor: pointer;
`;
