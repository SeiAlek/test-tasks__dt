import axios, { AxiosResponse } from 'axios';

const API_URL = 'https://simple-blog-api.crew.red';

export const fetchPosts = async (): Promise<AxiosResponse<Post[]>> => {
  try {
    const response = axios.get(`${API_URL}/posts`);

    return response;
  } catch (err) {
    throw `Something went wrong: ${err}`;
  }
}

export const fetchPostWithComments = async (id: number): Promise<AxiosResponse<Post>> => {
  try {
    const response = axios.get(`${API_URL}/posts/${id}?_embed=comments`);

    return response;
  } catch (err) {
    throw `Something went wrong: ${err}`;
  }
}

export const sendPost = async (postTitle: string, postBody: string) => {
  try {
    return axios.post(`${API_URL}/posts`, { 
      title: postTitle,
      body: postBody,
     })
     .then(() => fetchPosts());
  } catch(err) {
    throw `Something went wrong: ${err}`;
  }
}
