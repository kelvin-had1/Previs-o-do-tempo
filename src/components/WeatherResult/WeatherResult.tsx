import { AntDesign } from "@expo/vector-icons";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { WeatherPropsResponse } from "../../api/weather/dto";
import { DayResult } from "../DayResult/DayResult";
import { styles } from "./styles";

enum DayOfWeek {
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
}

interface Props {
  onClose: () => void;
  result: WeatherPropsResponse;
}

const WeatherResult = ({ result, onClose: childToParent }: Props) => {
  

  return (

    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.top}>
          <Text style={styles.text}>{result.resolvedAddress}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => childToParent()}
          >

            <Image
              style={styles.icon}
              source={require('../../../assets/X.png')}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.conditionsText}>
          {
            `${DayOfWeek[new Date(result.days[0].datetime).getDay()]}, ${result.days[0].temp}º `
          }
          
        </Text>

        <View style={styles.dataView}>
          <View style={styles.minMaxBox}>
            <View style={styles.box}>
              <AntDesign name="arrowup" size={34} color="#FF8C00" />
              <Text style={styles.text}>16º</Text>
            </View>

            <View style={styles.box}>
              <AntDesign name="arrowdown" size={34} color="#FF8C00" />
              <Text style={styles.text}>25º</Text>
            </View>
          </View>

          <View style={styles.box}>
            <Text style={styles.text}>Sensação {result.days[0].feelslike}º</Text>
          </View>
        </View>

        <View style={styles.dataView}>
          <View style={styles.box}>
            <Text style={styles.text}>Vento {result.days[0].windspeed}km/h</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.text}>Humidade {result.days[0].humidity}%</Text>
          </View>
        </View>
      </View>

      <View style={styles.secondContainer}>
        {result.days.map((day, index) => {
          if (index > 0 && index < 5) {
            const dayOfWeek = DayOfWeek[new Date(day.datetime).getDay()];
            return (
              <DayResult
                key={index}
                day={dayOfWeek}
                min={day.tempmin}
                max={day.tempmax}
              />
            );
          }

        })}
      </View>

    </View>

  )
}


export { WeatherResult }