import axios from 'axios';
let baseURL = "https://measurements.onrender.com/"
const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
	}, 
});
axiosInstance.interceptors.request.use(function (config) {
    // const token = localStorage.getItem('token');
    let token = localStorage.getItem('token');
    config.headers.Authorization =  token ? token : '';
    return config;
  });
export default axiosInstance
