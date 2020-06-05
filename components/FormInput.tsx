import React from 'react';
import styled from 'styled-components';
import FormFieldWrapper from './FormFieldWrapper';

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
`;

type Props = {
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  value: string | number;
  onChange: (value: string) => void;
}

const FormInput: React.FC<Props> = ({ 
  type = 'text',
  name,
  id,
  placeholder,
  value,
  onChange,
 }) => {

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