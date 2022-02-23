import { InputHTMLAttributes, CSSProperties } from 'react';

import { Container, Label } from './styles';

type LabeledInputProps = {
  label?: string;
  inputAttrs: InputHTMLAttributes<HTMLInputElement>;
  style?: CSSProperties;
};

export function LabeledInput({ label, inputAttrs, style }: LabeledInputProps) {
  return (
    <Container style={style}>
      {label && <Label>{label}</Label>}
      <input {...inputAttrs} />
    </Container>
  );
}
