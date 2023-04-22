import React,{useEffect,useState} from "react";
import axiosInstance from "../axios";
import { useNavigate } from 'react-router-dom';
import toast,{ Toaster } from 'react-hot-toast';



const Signup = () => {
    const navigate = useNavigate();
    const [signupFormData,setSignupFormData] = useState({
        "username":"",
        "password":"",
        "email":""
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        let signUpUrl = "api/accounts/sign-in/"
        axiosInstance.post(signUpUrl,{...signupFormData})
        .then((res) => {
          if(res.data.success){
            localStorage.setItem("token", res.data.data.auth_token);
            navigate('/')
          }
        })
        .catch((err) => {
            if (err.response){
                if (Object.keys(err.response.data.errors)){
                    Object.values(err.response.data.errors).map((msg) => toast.error(msg))
                    return
                }
                if(err.response.data.message){
                    toast.error(err.response.data.message)
                    return
                }
            }
        })  
      };
    const onInputChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setSignupFormData({...signupFormData,[name]:value})
      }
    
    return (

        <div class="w-full max-w-xs mt-8 md:mt-24 mx-auto">
        <form class="bg-white border border-gray-200 rounded-lg shadow px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
            </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      id="username" 
      name="username"
      type="text" 
      placeholder="Username"
      onChange={(e) => onInputChange(e)}
      value={signupFormData.username}/>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
      Password
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      id="password" 
      name="password" 
      type="password" 
      placeholder="Password"
      onChange={(e) => onInputChange(e)}
      value={signupFormData.password}/>
    </div>
    <div class="mb-8">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
      Email
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      id="email" 
      name="email" 
      type="email" 
      placeholder="Email"
      onChange={(e) => onInputChange(e)}
      value={signupFormData.email}/>
    </div>
    <div class="flex items-center justify-center">
      <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Sign Up
      </button>
    </div>
    <p className="text-gray-700 text-xs font-bold mt-8 text-center">Already have an account? <span className="text-teal-400 cursor-pointer" onClick={() => navigate('/login')}>Login</span></p>
  </form>
  <Toaster/>
  </div>
    );
}
export default Signup;