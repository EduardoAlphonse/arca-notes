import styled from 'styled-components';
import { FiDollarSign } from 'react-icons/fi';

import { Subtitle } from '../../../components/CommonComponents';

import { theme } from '../../../styles/theme';

export function Client() {
  return (
    <StyledClient>
      <Subtitle>William Santos</Subtitle>
      <div className="client-details">
        <p>(32) 9 8888-7777</p>
        <p>Rua. 7 de Maio 487, Jardins Eldorado</p>
      </div>
      <div className="client-total-debt">
        <FiDollarSign size="1.5rem" color={theme.colors.text.normal} />
        <span>R$ 850,49</span>
      </div>
    </StyledClient>
  );
}

const StyledClient = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 30%;

  padding: 0.75rem 1.125rem;

  background-color: ${({ theme }) => theme.colors.common.white};
  border-radius: ${({ theme }) => theme.shapes.borderRadius};

  cursor: pointer;

  .client-details {
    font: ${({ theme }) => theme.typography.textSmall};
    color: ${({ theme }) => theme.colors.text.light};
  }

  .client-total-debt {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      font: ${({ theme }) => theme.typography.text};
      color: ${({ theme }) => theme.colors.text.normal};
    }
  }
`;
