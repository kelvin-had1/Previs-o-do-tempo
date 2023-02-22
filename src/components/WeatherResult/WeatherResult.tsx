import { AntDesign } from "@expo/vector-icons";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { WeatherPropsResponse } from "../../api/weather/dto";
import { DayResult } from "../DayResult/DayResult";
import { styles } from "./styles";
interface Day {
  datetime: string;
  tempmin: number;
  tempmax: number;
  temp: number;
  humidity: number;
  conditions: string;
  windspeed: string;
}

interface Result {
  resolvedAddress: string;
  days: Day[];
}
interface Props {
  onClose: () => void;
  result: WeatherPropsResponse;
}

const WeatherResult = ({result, onClose: childToParent}: Props) => {
console.log('🚀 ~ file: WeatherResult.tsx:26 ~ result:', result)

  return (

    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.top}>
          <Text style={styles.text}>Niterói, RJ - Brasil</Text>

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

        <Text style={styles.conditionsText}>20º Nublado</Text>

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
            <Text style={styles.text}>Sensação 19º</Text>
          </View>
        </View>

        <View style={styles.dataView}>
          <View style={styles.box}>
            <Text style={styles.text}>Vento 18km/h</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.text}>Humidade 89%</Text>
          </View>
        </View>
      </View>

      <View style={styles.secondContainer}>
        <DayResult day="Terça" min={18} max={26}/>
        <DayResult day="Quarta" min={18} max={26}/>
        <DayResult day="Quinta" min={18} max={26}/>
        <DayResult day="Sexta" min={18} max={26}/>
      </View>

    </View>

  )
}


export { WeatherResult }