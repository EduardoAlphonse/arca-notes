import { ButtonHTMLAttributes } from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';

import { Container, IconContainer } from './styles';

import { theme } from '../../styles/theme';

type ButtonProps = {
  icon?: 'arrowRight' | 'plus';
  title: string;
  buttonStyle?: 'primary' | 'secondary';
  buttonAttrs: ButtonHTMLAttributes<HTMLButtonElement>;
};

const icons = {
  arrowRight: <FiArrowRight size="1.5rem" color={theme.colors.common.white} />,
  plus: <FiPlus size="1.5rem" color={theme.colors.common.white} />,
};

export function Button({
  icon,
  title,
  buttonStyle = 'primary',
  buttonAttrs,
}: ButtonProps) {
  return (
    <Container {...buttonAttrs} buttonStyle={buttonStyle}>
      {icon && <IconContainer>{icons[icon]}</IconContainer>}
      <span>{title}</span>
    </Container>
  );
}
