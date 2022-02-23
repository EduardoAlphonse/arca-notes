import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Title = styled.h1`
  text-align: center;
  font: ${({ theme }) => theme.typography.title};
  color: ${({ theme }) => theme.colors.text.normal};
`;

export const Subtitle = styled.h2`
  font: ${({ theme }) => theme.typography.subtitle};
  color: ${({ color = theme.colors.text.normal }) => color};
`;
