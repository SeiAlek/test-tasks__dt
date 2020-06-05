import React from 'react';
import styled from 'styled-components';

const Field = styled.div`
  display: flex;
`;

const Label = styled.label`
  width: 100%;
`;

interface Props {
  children: JSX.Element;
  id: string;
}

const FormFieldWrapper = ({ 
  children,
  id,
 }: Props): JSX.Element => {

  return (
    <Field>
      <Label htmlFor={id}>
        {children}
      </Label>
    </Field>
  )
}

export default FormFieldWrapper;