import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  min-width: 14rem;

  background-color: ${({ theme }) => theme.colors.primary.normal};

  border-radius: ${({ theme }) => theme.shapes.borderRadius};
  border: none;

  transition: 300ms;
  cursor: pointer;

  span {
    flex: 1;
    font: ${({ theme }) => theme.typography.button};
    color: ${({ theme }) => theme.colors.common.white};
    text-align: center;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.medium};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 44px;
  height: 44px;

  border-right: 1px solid rgba(255, 255, 255, 0.2);
`;
