import React,{useEffect,useState} from "react";
import axiosInstance from "../axios";
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token')
    if(!token){
      navigate('/login')
    }
  },[navigate])
  const [formData,setFormData] = useState({
      "height":0,
      "weight":0,
      "age":0
  })
  const [waistMeasurementData,setWaistMeasurementData] = useState({
    "waist_measurement":0,
    "is_waist_measurement_available":false
  })
  const [isUserFormVisible,setIsUserFormVisible] = useState(true)
  const handleSubmit = (event) => {
      event.preventDefault();
      let getWaistMeasurement = "api/measurement/waist-measurement/"
      // Object.keys(formData).map((key,idx) => getWaistMeasurement += `${idx == 0 ? '?' : '&'}` + `${key}=${getWaistMeasurement[key]}`)
      axiosInstance.post(getWaistMeasurement,{...formData})
      .then((res) => {
        if(res.data.success){
          setWaistMeasurementData({
            "is_waist_measurement_available":res.data.data.is_waist_measurement_available,
            "waist_measurement":res.data.data.waist_measurement
          })
          setIsUserFormVisible(false)
        }
      })
      .catch((err) => console.log(err))
      
    };
    const handleWaistMeasurement = (event) => {
      event.preventDefault();
      let getWaistMeasurement = "api/measurement/waist-measurement/"
      // Object.keys(formData).map((key,idx) => getWaistMeasurement += `${idx == 0 ? '?' : '&'}` + `${key}=${getWaistMeasurement[key]}`)
      axiosInstance.patch(getWaistMeasurement,{...formData,"waist_measurement":waistMeasurementData["waist_measurement"]})
      .then((res) => {
        if(res.data.success){
          setIsUserFormVisible(true)
          setFormData({
            "height":0,
            "weight":0,
            "age":0
          })
        }
      })
      .catch((err) => console.log(err))
      
    };
  const onInputChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setFormData({...formData,[name]:value})
  }
  const handleBackClick = () => {
    setIsUserFormVisible(true)
    setFormData({
      "height":0,
      "weight":0,
      "age":0
    })

  }
  return (
    <>
    {isUserFormVisible ? <div class="w-full max-w-xs mt-8 md:mt-24 mx-auto">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="height">
      Height (cm)
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      id="height" 
      name="height"
      type="number" 
      placeholder="Height"
      onChange={(e) => onInputChange(e)}
      value={formData.height}/>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="weight">
      Weight (kg)
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      id="weight" 
      name="weight" 
      type="number" 
      placeholder="Weight"
      onChange={(e) => onInputChange(e)}
      value={formData.weight}/>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="age">
      Age (years)
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      id="age" 
      name="age" 
      type="number" 
      placeholder="Age"
      onChange={(e) => onInputChange(e)}
      value={formData.age}/>
    </div>
    <div class="flex items-center justify-center">
      <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Next
      </button>
    </div>
  </form>
  </div> :
  <div class="w-full max-w-xs mt-8 mx-auto">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleWaistMeasurement}>
        <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="waist_measurement">
      Waist Measurement (cm)
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      id="waist_measurement" 
      name="waist_measurement"
      type="number" 
      placeholder="waist_measurement"
      disabled={waistMeasurementData.is_waist_measurement_available}
      onChange={(e) => setWaistMeasurementData({...waistMeasurementData,"waist_measurement":e.target.value})}
      value={waistMeasurementData.waist_measurement}/>
    </div>
    <div class="flex items-center justify-center">
      {!waistMeasurementData.is_waist_measurement_available ? <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Submit
      </button>:<button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleBackClick}>
        Back
      </button>}
    </div>
        </form>
  </div>}
  </>
   
  );
}
export default Dashboard;