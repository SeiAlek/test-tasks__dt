import React from 'react';
import styled from 'styled-components';
import FormFieldWrapper from './FormFieldWrapper';

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
`;

interface Props {
  type: InputType;
  name: string;
  id: string;
  placeholder?: string;
  value: string | number;
  onChange: (value: string) => void;
}

const FormInput = ({ 
  type = 'text',
  name,
  id,
  placeholder,
  value,
  onChange,
 }: Props): JSX.Element => {

  return (
    <FormFieldWrapper id={id}>
      <Input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </FormFieldWrapper>
  )
}

export default FormInput;