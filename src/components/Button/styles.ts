import styled from 'styled-components';

export const Container = styled.button<{
  buttonStyle: 'primary' | 'secondary';
}>`
  display: flex;
  align-items: center;
  min-width: 14rem;
  min-height: 44px;

  background-color: ${({ theme, buttonStyle }) =>
    buttonStyle === 'primary' ? theme.colors.primary.normal : 'transparent'};

  border-radius: ${({ theme }) => theme.shapes.borderRadius};
  border: 2px solid
    ${({ theme, buttonStyle }) =>
      buttonStyle === 'primary'
        ? theme.colors.primary.normal
        : theme.colors.text.normal};

  transition: 300ms;
  cursor: pointer;

  span {
    flex: 1;
    padding: 0 2rem;
    font: ${({ theme }) => theme.typography.button};
    color: ${({ theme, buttonStyle }) =>
      buttonStyle === 'primary'
        ? theme.colors.common.white
        : theme.colors.primary.normal};
    text-align: center;
  }

  &:hover {
    background-color: ${({ theme, buttonStyle }) =>
      buttonStyle === 'primary' ? theme.colors.primary.medium : 'transparent'};
  }

  &:active {
    background-color: ${({ theme, buttonStyle }) =>
      buttonStyle === 'primary' ? theme.colors.primary.dark : 'transparent'};
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
