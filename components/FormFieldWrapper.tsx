import React from 'react';
import styled from 'styled-components';

const Field = styled.div`
  display: flex;
`;

const Label = styled.label`
  width: 100%;
`;

type Props = {
  id: string
}

const FormFieldWrapper: React.FC<Props> = ({ 
  children,
  id,
 }) => {

  return (
    <Field>
      <Label htmlFor={id}>
        {children}
      </Label>
    </Field>
  )
}

export default FormFieldWrapper;