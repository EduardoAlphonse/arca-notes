import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    top: 10px;
  }

  to {
    top: 0;
  }
`;

export const Container = styled.div<{ isVisible: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.15);

  animation: ${fadeIn} 300ms linear forwards;
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background.light};
  border-radius: ${({ theme }) => theme.shapes.borderRadius};

  box-shadow: 0px 58px 52px -31px rgba(0, 0, 0, 0.25);

  animation: ${slideUp} 300ms forwards;
`;

export const FormFields = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const Section = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    gap: 0.75rem;
  }
`;

export const SectionTitle = styled.p`
  font: ${({ theme }) => theme.typography.textSmallMedium};
  color: ${({ theme }) => theme.colors.text.normal};
`;

export const Separator = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.colors.common.divider};
  margin: 2.5rem 0;
`;

export const FormOptions = styled.div`
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    flex: 1;
    gap: 1.5rem;

    button {
      min-width: 0px;
      flex: 1;
    }
  }
`;

export const LabeledInput = styled.label`
  width: 100%;

  input {
    width: 100%;
    padding: 0.5rem 0.75rem;
    border: 2px solid ${({ theme }) => theme.colors.common.white};
    border-radius: ${({ theme }) => theme.shapes.borderRadius};

    font: ${({ theme }) => theme.typography.text};
    color: ${({ theme }) => theme.colors.text.normal};
    text-align: left;

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
