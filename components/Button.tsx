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

  &[disabled] {
    color: rgba(16, 16, 16, 0.3);
    border: 1px solid rgba(16, 16, 16, 0.3);

    &:hover {
      color: rgba(16, 16, 16, 0.3);
      border: 1px solid rgba(16, 16, 16, 0.3);
      background-color: transparent;
      box-shadow: none;
      cursor: default;
    }
  }
`;

interface Props {
  type?: ButtonType;
  name: string;
  id: string;
  disabled?: boolean;
  onClick: (e: React.FormEvent) => void;
}

const FormButton = ({
  type = "button",
  name,
  id,
  disabled,
  onClick,
}: Props): JSX.Element => {

  return (
    <Button
      type={type}
      id={id}
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </Button>
  )
}

export default FormButton;