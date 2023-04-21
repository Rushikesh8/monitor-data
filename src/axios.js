import axios from 'axios';
let baseURL = "http://127.0.0.1:7000/"
const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
	}, 
});
axiosInstance.interceptors.request.use(function (config) {
    // const token = localStorage.getItem('token');
    let token = localStorage.getItem('token');
    config.headers.Authorization =  token ? token : '';
    return config;
  });
export default axiosInstance