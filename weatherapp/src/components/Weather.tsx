import React, {useState} from 'react';
import HeaderProps from '../types/weather'
import {Form, Button} from 'react-bootstrap'
import Logo from './Logo'
//import ReactWeather from 'react-open-weather';

const Weather = ({title}: HeaderProps) =>{
    const [location, setLocation] = useState("");
    const [cloud, setCloud]: any = useState({});
    const [coord, setCoord] : any= useState({});
    const [main, setMain]: any= useState({});
    const [sys, setSys] : any= useState({});
    const [weather, setWeather] : any= useState([]);
    const [wind, setWind]: any= useState({});
    const [name, setName]= useState("")
    const handleChange = (e: any) => {
        e.preventDefault();
        setLocation(e.currentTarget.value);
      };
    
    const fetchData = async (value: string) =>{
       const response =await fetch("https://community-open-weather-map.p.rapidapi.com/weather?q="+value+"&units=metric", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "8275c582bamshd83a3179dd00459p19f0b2jsn94c889368579"
            }
        })
       
       
       const data = await response.json();
       console.log(data)
       setWeather(data.weather)
       setCloud(data.clouds)
       setCoord(data.coord)
       setMain(data.main)
       setSys(data.sys)
       setWind(data.wind)
       setName(data.name)
       setLocation('')
       
       
    }
    
    
    return (
        <>
            <h1>{title}</h1>
            <Form className="form">
                <input
                    type="text"
                    name="text"
                    value={location}
                    placeholder="City..."
                    onChange={handleChange}
                />
                <Button
                    onClick={()=>fetchData(location)}
                    value="search"
                    // type="submit"
                    className="btn-dark ml-3"
                > Search</Button>
                
            </Form>
             
            <div>
            {console.log(cloud)}
                <div style={{display: "flex", justifyContent: "center", marginTop: "30px", marginBottom: "30px"}} >
                    <Logo />
                </div>
                <ul style={{listStyle: "none"}}>
                    {weather.map((temp: any)=>{
                        return(
                            <>
                            <li>
                            <strong>Forecast: </strong>{temp.main}
                        </li>  
                        <li>
                            <strong>Description: </strong>{temp.description}
                         </li> 
                    </> 
                        )
                        
                    })}
                    {/* <li><strong>Forecast: </strong> {weather.main}</li> */}
                    <li><strong>Feels Like: </strong> {main.feels_like}</li>
                    <li><strong>Humidity: </strong>{main.humidity}</li>
                    <li><strong>Temperature: </strong> {Math.round(main.temp) } degress</li>
                    <li><strong>Min Temperature: </strong> {Math.round(main.temp_min) } degress</li>
                    <li><strong>Max Temperature: </strong> {Math.round(main.temp_max) } degress</li>
                    <li><strong>Country: </strong> {sys.country}</li>
                    <li><strong>City: </strong> {name}</li>
                   
                </ul>
            </div>
        </>
    )
    
}

export default Weather;