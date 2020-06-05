import * as React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 18rem;
  background-color: #000;
  color: #fff;
`;

const Title = styled.h1`
  color: #fff;
  text-align: center;
`;

const SubTitle = styled.h2`
  color: #fff;
  text-align: center;
`;

const Header = () => {
  return (
    <Container>
      <Title>Blog</Title>
      <SubTitle>Real stories &amp; opinions about running an independent membership business.</SubTitle>
    </Container>
  );
};

export default Header;
