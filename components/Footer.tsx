import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  min-height: 18rem;
  background-color: #000;
  color: #fff;
`;

const Footer = (): JSX.Element => {
  return (
    <Container>
      <h2>The Ghost Blog © 2020</h2>
    </Container>
  );
};

export default Footer;