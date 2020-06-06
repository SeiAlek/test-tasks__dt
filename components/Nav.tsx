import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  margin-right: 2rem;
  list-style: none;
`;

const A = styled.a.attrs(() => ({ tabIndex: 0 }))`
  display: inline-block;
  padding: 0.5rem 1rem;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
  cursor: pointer;
  
  &:hover {
    color: #fff000;
  }
`;

const Nav = (): JSX.Element => (
  <nav>
    <List>
      <Item>
        <Link href="/">
          <A>
            HomePage
          </A>
        </Link>
      </Item>
      <Item>
        <Link href="/posts">
          <A>
            Posts
          </A>
        </Link>
      </Item>
      <Item>
        <Link href="/add-post">
          <A>
            Add Posts
          </A>
        </Link>
      </Item>
    </List>
  </nav>
);

export default Nav;