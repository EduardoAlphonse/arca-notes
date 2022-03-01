import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiDollarSign } from 'react-icons/fi';

import { Subtitle } from '../../../components/CommonComponents';

export type ClientData = {
  id: string;
  name: string;
  phone: string;
  address: string;
};

type ClientProps = {
  data: ClientData;
};

export function Client({ data: { id, name, phone, address } }: ClientProps) {
  return (
    <StyledClient to={`client/${id}`}>
      <Subtitle>{name}</Subtitle>
      <div className="client-details">
        <p>{phone}</p>
        <p>{address}</p>
      </div>
      {/* <div className="client-total-debt">
        <FiDollarSign size="1.5rem" color={theme.colors.text.normal} />
        <span>R$ 850,49 (absoluto)</span>
      </div> */}
    </StyledClient>
  );
}

const StyledClient = styled(Link)`
  display: flex;
  flex: 1;
  align-self: flex-start;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 13rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.common.divider};

  padding: 0.75rem 1.125rem;

  background-color: ${({ theme }) => theme.colors.common.white};
  border-radius: ${({ theme }) => theme.shapes.borderRadius};

  text-decoration: none;
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
