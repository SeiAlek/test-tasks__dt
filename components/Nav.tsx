import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  margin-right: 2rem;
  list-style: none;
`;

const Nav: React.FC<{}> = () => (
  <nav>
    <List>
      <Item>
        <Link href="/">
          <a>
            HomePage
          </a>
        </Link>
      </Item>
      <Item>
        <Link href="/posts">
          <a>
            Posts
          </a>
        </Link>
      </Item>
      <Item>
        <Link href="/add-post">
          <a>
            Add Posts
          </a>
        </Link>
      </Item>
    </List>
  </nav>
);

export default Nav;