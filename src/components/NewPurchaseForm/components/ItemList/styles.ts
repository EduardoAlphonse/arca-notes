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

export const Quantity = styled.span`
  position: relative;
  width: 2.5rem;
  text-align: center;

  padding-right: 0.75rem;

  &::after {
    content: '';
    position: absolute;
    right: -1.5px;
    top: 50%;
    transform: translateY(-50%);

    display: block;
    width: 3px;
    height: 3px;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.colors.text.lighter};
  }
`;

export const Description = styled.p`
  flex: 1;
`;

export const Value = styled.span``;

export const RemoveItem = styled.button`
  font-size: 0;
  padding: 0.25rem;
  background-color: ${({ theme }) => theme.colors.common.white};
  border: none;

  cursor: pointer;
`;
