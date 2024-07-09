import SmallHeader from "../../layout/SmallHeader"
import backButton from "../../../assets/images/backButton.svg"
import WeatherPhoto from "../../../assets/images/weather.svg"
import { useEffect, useState } from "react";
import axios from "axios";
import WeatherBarChart from "./WeatherBarChart";

function Weather(){
    const city= 'حمص';
    const [weatherData, setWeatherData] = useState(null);
    const API_KEY = "7611591014c19ce10b7025aee7e85779";

      useEffect(() => {
        if (city) {
          fetchWeatherData();
        }
      }, [city]);

    const handelBack = () => {
        navigate('/');
    }
    //get weather prediction using openweathermap forcast api
    const fetchWeatherData = async () => {
        try {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
          setWeatherData(response.data);
        } catch (error) {
        
                console.error('Error fetching weather data:', error);
                if (error.response) {
                  console.error('Error response data:', error.response.data);
                  console.error('Error response status:', error.response.status);
                  console.error('Error response headers:', error.response.headers);
                } else if (error.request) {
                  console.error('Error request:', error.request);
                } else {
                  console.error('Error message:', error.message);
                }
          
        }
        
      };
    
      useEffect(() => {
                  fetchWeatherData();
      }, []);
    
      if (!weatherData) {
        return <div className=" text-title-light xl:text-3xl lg:text-2xl md:text-xl font-['Georgia'] text-center align-middle">Loading...</div>;
      }
    
    return(
        <div className="flex flex-col">
            <SmallHeader/>
            <div className="flex flex-row items-center mx-10 mt-10
                    xl:space-x-10 xl:px-28 
                    lg:space-x-8 lg:px-24
                    md:space-x-6 md:px-20">
                <img src={backButton} onClick={handelBack} className=" hover:cursor-pointer 
                            xl:w-12 xl:h-12
                            lg:w-10 lg:h-10
                            md:w-8 md:h-8" />
                <div className=" text-title-light xl:text-3xl lg:text-2xl md:text-xl font-['Georgia']">Weather</div>
            </div>
            <div className="flex flex-row justify-center xl:px-28 lg:px-24 md:px-20 py-10 ">
            <div className="flex flex-col justify-center rounded-lg w-2/3 drop-shadow-[1px_1px_rgba(117,135,142)]  border-solid border-2 border-text-light
            bg-gradient-to-br from-clientBackgroundFrom-light from-3% via-orgnizerbg-light via-40% to-clientBackgroundTo-light to-80% opacity-50">
                      <div className="opacity-100">
                  <WeatherBarChart weatherData={weatherData.list}/>
                  </div>

            </div>
            <div className="flex flex-col justify-center items-end w-1/3">
                <img src={WeatherPhoto}/>
            </div>  
            </div>
        </div>
    )
}

export default Weather