import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  font: ${({ theme }) => theme.typography.title};
  color: ${({ theme }) => theme.colors.text.normal};
`;

export const Subtitle = styled.h2`
  /* text-align: center; */
  font: ${({ theme }) => theme.typography.subtitle};
  color: ${({ theme }) => theme.colors.text.light};
`;
