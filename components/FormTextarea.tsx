import React from 'react';
import styled from 'styled-components';
import FormFieldWrapper from './FormFieldWrapper';

const Textarea = styled.textarea`
  width: 100%;
  height: 10rem;
  box-sizing: border-box;
  padding: 1rem;
  resize: none;
`;

interface Props {
  name: string;
  id: string;
  placeholder?: string;
  value: string | number;
  onChange: (value: string) => void;
}

const FormTextarea = ({
  name,
  id,
  placeholder,
  value,
  onChange,
}: Props): JSX.Element => {
  return (
    <FormFieldWrapper id={id}>
      <Textarea
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </FormFieldWrapper>
  )
}

export default FormTextarea;
