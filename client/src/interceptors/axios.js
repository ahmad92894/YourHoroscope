// import axios from "axios";

// axios.defaults.baseURL = 'http://localhost:8000';

// let refresh = false;

// axios.interceptors.response.use(response => response, async error => {
//     if (error.response.status === 401 && !refresh) { 
//         refresh = true;

//         const response = await axios.post('refresh, data:{}, {withCredentials:true')

//         if (response.status === 200) { 
//             axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['token']}`;

//             return axios(error.config);
//         }
//     }
//     refresh = false;
//     return error;
// });