import { InputHTMLAttributes } from 'react';

import { Container, Label } from './styles';

type LabeledInputProps = {
  label: string;
  inputAttrs: InputHTMLAttributes<HTMLInputElement>;
};

export function LabeledInput({ label, inputAttrs }: LabeledInputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <input {...inputAttrs} />
    </Container>
  );
}
