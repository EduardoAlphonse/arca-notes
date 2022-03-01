import styled from 'styled-components';

export const Container = styled.label`
  width: 100%;

  input {
    width: 100%;
    padding: 0.5rem 0.75rem;
    border: 2px solid ${({ theme }) => theme.colors.common.white};
    border-radius: ${({ theme }) => theme.shapes.borderRadius};

    font: ${({ theme }) => theme.typography.text};
    color: ${({ theme }) => theme.colors.text.normal};
    text-align: center;

    outline: none;
    transition: 300ms;

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary.normal};
    }
  }
`;

export const Label = styled.p`
  font: ${({ theme }) => theme.typography.textSmall};
  color: ${({ theme }) => theme.colors.text.normal};
  margin-bottom: 6px;
`;
