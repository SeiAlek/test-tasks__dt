import React from 'react';
import styled from 'styled-components';

const Button = styled.button.attrs(() => ({ tabIndex: 0 }))`
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  text-transform: capitalize;
  background-color: transparent;
  border: 1px solid #000;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #000;
    box-shadow: 0 3px 13px rgba(23, 32, 49, .26);
  }
`;

interface Props {
  type?: ButtonType;
  name: string;
  id: string;
  onClick: (e: React.FormEvent) => void;
}

const FormButton = ({
  type = "button",
  name,
  id,
  onClick,
}: Props): JSX.Element => {

  return (
    <Button
      type={type}
      id={id}
      onClick={onClick}
    >
      {name}
    </Button>
  )
}

export default FormButton;