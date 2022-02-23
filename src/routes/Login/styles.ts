import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const SideImageWrapper = styled.div`
  display: flex;
  flex: 6;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary.normal};
`;

export const FormContainer = styled.div`
  display: flex;
  flex: 4;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h2 {
    text-align: center;
  }
`;
