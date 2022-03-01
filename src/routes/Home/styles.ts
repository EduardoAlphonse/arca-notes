import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.5rem 0;
  gap: 2rem;
  flex: 1;
`;

// export const Header = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.75rem;

// `;

// export const Avatar = styled.img`
//   width: 3rem;
//   height: 3rem;
//   border-radius: 1.5rem;
// `;

export const Content = styled.div`
  display: flex;
  height: 100%;
  gap: 1.5rem;
`;

export const Clients = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ClientsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 6px;
  height: 42px;
`;

export const ClientList = styled.div`
  display: flex;
  place-content: start;
  flex: 1;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 0 0 1rem;

  overflow-y: scroll;
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1.5rem;
  min-width: 18.75rem;
  padding: 0 0 1rem;

  h1 {
    text-align: left;
    line-height: 42px;
    vertical-align: middle;
  }
`;

export const SummaryFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
`;
