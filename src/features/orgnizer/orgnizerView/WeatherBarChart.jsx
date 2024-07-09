function WeatherBarChart(props){
    //console.log(props.weatherData)
    const date=props.weatherData.map(data=>data.dt_txt)
    const labels = props.weatherData.map(data=>data.weather[0].description)
    const temprature = props.weatherData.map(data=>data.main.temp)
    const wind = props.weatherData.map(data=>data.wind.speed)
    console.log(date,temprature,labels,wind)
    return(
        <div>

     
        <div >
       
        </div>
     
        </div>
    )
}

export default WeatherBarChart