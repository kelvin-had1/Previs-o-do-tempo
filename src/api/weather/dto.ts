interface Day {
  datetime: string;
  tempmin: number;
  tempmax: number;
  temp: number;
  humidity: number;
  conditions: string;
  windspeed: string;
	feelslike: number;
}
interface WeatherPropsResponse {
  resolvedAddress: string;
  days: Day[];
}


export { WeatherPropsResponse }