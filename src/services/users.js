import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });


instance.interceptors.response.use(function (response) {
    console.log(response)
    return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});


export const loadUsers = () => {
    return instance.get(`users`)
}

export const loadUser = (id) => {
    return instance.get(`users/${id}`)
}