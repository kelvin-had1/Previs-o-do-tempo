import axios from 'axios';
import { WeatherPropsResponse } from './dto';

class Weather {
    
    async getWeather(locale: string): Promise<WeatherPropsResponse> {
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locale}?unitGroup=metric&key=7A2NX58HTFJLM73JAPXBAH55B&contentType=json`;

        console.log('=====================');
        console.log(url);
        const data = await axios.get(url)
        .then((response) => {     
            
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
        
        const weather: WeatherPropsResponse = {
            resolvedAddress: data.resolvedAddress,
            description: data.description,
            days: data.days.map((day: any) => {
                return {
                    temp: day.temp,
                    feelslikemax: day.feelslikemax,
                    feelslikemin: day.feelslikemin,
                    humidity: day.humidity,
                    windspeed: day.windspeed,
                    datetime: day.datetime,
                }
            }
            )

        }

        return weather;
    }
    
}

export { Weather }