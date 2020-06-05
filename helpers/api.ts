import axios, { AxiosRequestConfig } from 'axios';

const API_URL = 'https://simple-blog-api.crew.red';

type RequestConfigGET = AxiosRequestConfig & {
  redirect?: 'follow';
}

type RequestConfigPOST = AxiosRequestConfig & {
  headers: Headers,
  title?: string,
  body?: string,
  postId?: number,
  redirect?: 'follow'
};

export const fetchPosts = async (): Promise<Post[]> => {
  const requestConfig: RequestConfigGET = {
    method: 'GET',
    redirect: 'follow',
  };

  try {
    const response = await axios.get(
      `${API_URL}/posts`, 
      requestConfig,
      );
    const { data } = response;

    return data;
  } catch (err) {
    throw `Something went wrong: ${err}`;
  }
}

export const fetchPostWithComments = async (id: number): Promise<Post> => {
  const requestConfig: RequestConfigGET = {
    method: 'GET',
    redirect: 'follow',
  };

  try {
    const response = await axios.get(
      `${API_URL}/posts/${id}?_embed=comments`, 
      requestConfig,
    );
    const { data } = response;

    return data;
  } catch (err) {
    throw `Something went wrong: ${err}`;
  }
}

export const sendPost = async (postTitle: string, postBody: string): Promise<Post[]> => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestConfig: RequestConfigPOST = {
    method: 'POST',
    headers: myHeaders,
    title: postTitle,
    body: postBody,
    redirect: 'follow',
  };

  try {
    return axios.post(`${API_URL}/posts`, requestConfig);
  } catch(err) {
    throw `Something went wrong: ${err}`;
  }
}

export const sendComment = async (postId: number, commentBody: string): Promise<Post[]> => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestConfig: RequestConfigPOST = {
    method: 'POST',
    headers: myHeaders,
    postId: postId,
    body: commentBody,
    redirect: 'follow',
  };

  try {
    return axios.post(`${API_URL}/comments`, requestConfig);
  } catch(err) {
    throw `Something went wrong: ${err}`;
  }
}
