import { ButtonHTMLAttributes } from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { Container, IconContainer } from './styles';

import { theme } from '../../styles/theme';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: 'arrowRight';
  title: string;
};

const icons = {
  arrowRight: <FiArrowRight size="1.5rem" color={theme.colors.common.white} />,
};

export function Button({ icon, title, ...props }: ButtonProps) {
  return (
    <Container {...props}>
      {icon && <IconContainer>{icons[icon]}</IconContainer>}
      <span>{title}</span>
    </Container>
  );
}
