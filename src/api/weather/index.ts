import axios from 'axios';
import { WeatherPropsResponse } from './dto';

const weather = {

  async getWeather(locale: string): Promise<WeatherPropsResponse | null> {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locale}?unitGroup=metric&key=7A2NX58HTFJLM73JAPXBAH55B&contentType=json`;

    
    const data = await axios.get(url)
      .then((response) => {
        
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return null;
      });

    if(!data) return null;
    const weather: WeatherPropsResponse = {
      resolvedAddress: data['resolvedAddress'],
      days: data['days']
    }
    return weather;


    return weather;
  }

}

export default weather;