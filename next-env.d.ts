/// <reference types="next" />
/// <reference types="next/types/global" />

interface Post {
  id: number;
  title: string;
  body?: string;
  comments?: Comment[];
}

interface Comment {
  id: number;
  postId: number;
  body: string;
}

interface StatelessPage<P> extends React.SFC<P> {
  getInitialProps?: (ctx: NextPageContext) => Promise<P>
}

type ButtonType = 'button' | 'submit' | 'reset';
