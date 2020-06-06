import axios, { AxiosRequestConfig } from 'axios';

const API_URL = 'https://simple-blog-api.crew.red/';

axios.defaults.baseURL = API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

type RequestConfig = AxiosRequestConfig & {
  title?: string,
  body?: string,
  postId?: number,
  redirect?: 'follow'
};

export const fetchPosts = async (): Promise<Post[]> => {
  const requestConfig: RequestConfig = {
    method: 'GET',
    redirect: 'follow',
  };

  try {
    const response = await axios.get('posts', requestConfig);
    const { data } = response;

    return data;
  } catch (err) {
    throw `Something went wrong: ${err}`;
  }
}

export const fetchPostWithComments = async (id: number): Promise<Post> => {
  const requestConfig: RequestConfig = {
    method: 'GET',
    redirect: 'follow',
  };

  try {
    const response = await axios.get(`posts/${id}?_embed=comments`, requestConfig);
    const { data } = response;

    return data;
  } catch (err) {
    throw `Something went wrong: ${err}`;
  }
}

export const sendPost = async (postTitle: string, postBody: string): Promise<Post[]> => {
  const requestConfig: RequestConfig = {
    method: 'POST',
    title: postTitle,
    body: postBody,
    redirect: 'follow',
  };

  try {
    return axios.post('posts', requestConfig);
  } catch(err) {
    throw `Something went wrong: ${err}`;
  }
}

export const removePost = async (postId: number): Promise<Post[]> => {
  const requestConfig: RequestConfig = {
    method: 'DELETE',
    redirect: 'follow',
  }

  try {
    return axios.delete(`posts/${postId}`, requestConfig);
  } catch(err) {
    throw `Something went wrong: ${err}`;
  }
}

export const sendComment = async (postId: number, commentBody: string): Promise<Post[]> => {
  const requestConfig: RequestConfig = {
    method: 'POST',
    postId: postId,
    body: commentBody,
    redirect: 'follow',
  };

  try {
    return axios.post('comments', requestConfig);
  } catch(err) {
    throw `Something went wrong: ${err}`;
  }
}
