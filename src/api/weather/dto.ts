interface WeatherPropsResponse {    
    resolvedAddress: string,            
    description: string,
    days: [
        {
            temp: number,
            feelslikemax: number,
            feelslikemin: number,
            humidity: number,
            windspeed: number,
            datetime: Date,
        }
    ]
}


export { WeatherPropsResponse }