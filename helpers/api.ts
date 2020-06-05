import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const API_URL = 'https://simple-blog-api.crew.red';

type RequestConfigGET = AxiosRequestConfig & {
  redirect?: 'follow';
}

type RequestConfigPOST = AxiosRequestConfig & {
  headers: Headers,
  title: string,
  body: string,
};

export const fetchPosts = async (): Promise<AxiosResponse<Post[]>> => {
  const requestConfig: RequestConfigGET = {
    method: 'GET',
    redirect: 'follow',
  };

  try {
    const response = axios.get(`${API_URL}/posts`, requestConfig);

    return response;
  } catch (err) {
    throw `Something went wrong: ${err}`;
  }
}

export const fetchPostWithComments = async (id: number): Promise<AxiosResponse<Post>> => {
  const requestConfig: RequestConfigGET = {
    method: 'GET',
    redirect: 'follow',
  };

  try {
    const response = axios.get(`${API_URL}/posts/${id}?_embed=comments`, requestConfig);

    return response;
  } catch (err) {
    throw `Something went wrong: ${err}`;
  }
}

export const sendPost = async (postTitle: string, postBody: string) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestConfig: RequestConfigPOST = {
    method: 'POST',
    headers: myHeaders,
    title: postTitle,
    body: postBody,
  };

  try {
    return axios.post(`${API_URL}/posts`, requestConfig);
  } catch(err) {
    throw `Something went wrong: ${err}`;
  }
}
