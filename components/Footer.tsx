import * as React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  min-height: 18rem;
  background-color: #000;
  color: #fff;
`;

const Footer = () => {
  return (
    <Container>
      <div>The Ghost Blog © 2020</div>
    </Container>
  );
};

export default Footer;