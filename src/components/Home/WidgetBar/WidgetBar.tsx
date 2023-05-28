import { IconButton } from "@mui/material";
import router from "next/router";
import TodayIcon from '@mui/icons-material/Today';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useState, useEffect } from "react";
import axios from "axios";
export const WidgetBar = () => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&units=metric&appid=" + process.env.NEXT_PUBLIC_WEATHER_KEY;
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        axios.get(url).then((response) => {
            setWeather(response.data.main.temp);

        });
    }, []);
    console.log(weather);

  
   
    const currentDate = new Date().toLocaleDateString( [], { weekday: 'short', month: 'long', day: 'numeric' });
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'} );
    const [time, setTime] = useState(currentTime);
    useEffect(() => {
        const interval = setInterval(() => {
            
            setTime(new Date().toLocaleTimeString( [], { hour: '2-digit', minute: '2-digit'}));
        }, 1000);
        return () => clearInterval(interval);
        
    }, []);



    return (
        <div>
            <div className="flex justify-center">
            <div className=" w-11/12 r bg-darker p-1.5 rounded-lg shadow " >
                <div className="flex justify-evenly">
                    <IconButton aria-label="calendar" size="small">
                        <TodayIcon
                            className={
                                `h-6 w-6 text-light` 
                            }
                        />
                        <span className="text-white text-sm"> {currentDate} </span>
                    </IconButton>

                    <IconButton aria-label="sun" size="small">
                        <WbSunnyIcon
                            className={
                                `h-6 w-6 text-light`
                            }
                        />
                        <span className="text-white text-sm"> {weather} </span>
                    </IconButton>
                    <IconButton aria-label="clock" size="small">
                        <AccessTimeIcon
                            className={
                                `h-6 w-6 text-light`
                            }
                        />

                        <span className="text-white text-sm"> {time} °C   </span>
                    </IconButton>

                    </div>
            </div>
            </div>
        </div>
    );
};
    
export default WidgetBar;