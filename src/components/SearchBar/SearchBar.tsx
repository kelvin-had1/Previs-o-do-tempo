import { useState } from "react";
import { Button, Image, SafeAreaView, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Weather } from "../../api/weather";
import { WeatherResult } from "../WeatherResult/WeatherResult";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = () => {
  const [city, setCity] = useState('');
  const [weatherResult, setWeatherResult] = useState(false);  

  const childToParent = () => {
    pressButton();
  }

  const pressButton = () => {
    setWeatherResult(!weatherResult);
  }

  return (
    <>
      {weatherResult ? <WeatherResult childToParent={childToParent}/> : null}
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