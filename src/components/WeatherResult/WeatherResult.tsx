import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";


const WeatherResult = () => {

  return (

    <View style={styles.mainContainer}>
      <View style={styles.top}>
        <Text style={styles.text}>Niterói, RJ - Brasil</Text>
          
        <TouchableOpacity
          style={styles.button}
        >

          <Image            
            source={require('../../../assets/X.png')}
          />
        </TouchableOpacity>
      </View>

    </View>

  )
}


export { WeatherResult }