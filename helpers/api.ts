import axios, { AxiosResponse } from 'axios';

const API_URL = 'https://simple-blog-api.crew.red';

const requestOptions = {
  method: 'GET',
};

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
    axios.post(`${API_URL}/posts`, { 
      title: postTitle,
      body: postBody,
     })
  } catch(err) {
    throw `Something went wrong: ${err}`;
  }
}


// export async function fetchPosts(): Promise<Post[]> {
//   const response = await fetch(`${API_URL}/posts`, requestOptions);
//   const json = await response.json();

//   return json;
// }

// export async function fetchPostDetail(id: number): Promise<Post> {
//   const response = await fetch(`${API_URL}/posts/${id}/?_embed=comments`, requestOptions);
//   const json = await response.json();

//   return json;
// }

