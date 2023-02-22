import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Weather from "../../api/weather";
import { WeatherResult } from "../WeatherResult/WeatherResult";
import { AntDesign } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";

const SearchBar = () => {
  const [city, setCity] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const {data: weatherData, refetch} = useQuery(['weather'], () => Weather.getWeather(city))


  const onClose = () => {
    setIsOpen(false)
  }

  const pressButton = () => {
    setIsOpen(true)
    refetch();
  }

  return (
    <>
      {isOpen && weatherData ? <WeatherResult result={weatherData} onClose={onClose}/> : null}
      <View style={styles.mainContainer}>
        <View style={styles.container}>

          <TextInput
            placeholder="Insira aqui o nome da cidade"
            style={styles.input}
            value={city}
            onChangeText={setCity}
          />

          <TouchableOpacity
            onPress={() => pressButton()
            }
            style={styles.searchIconImage}
          >

            
            <AntDesign name="search1" size={36} color="black" />
          </TouchableOpacity>

        </View>
      </View>
    </>




  )
}


export { SearchBar }