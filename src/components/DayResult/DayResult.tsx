import { View, Text } from "react-native"
import { styles } from "./styles";

interface props{
  day: string;
  min: number;
  max: number;
}

export const DayResult = (data: props) => {

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>{data.day}</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>{data.min}º</Text>
        <Text style={styles.text}>{data.max}º</Text>
      </View>

    </View>
  )

}