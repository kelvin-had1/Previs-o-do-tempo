import { AntDesign } from "@expo/vector-icons";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

interface props {
  childToParent: () => void;
}

const WeatherResult = (data: props) => {

  return (

    <View style={styles.mainContainer}>
      <View style={styles.top}>
        <Text style={styles.text}>Niterói, RJ - Brasil</Text>
          
        <TouchableOpacity
          style={styles.button}
          onPress={() => data.childToParent()}
        >

          <Image     
            style={styles.icon}       
            source={require('../../../assets/X.png')}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.conditionsText}>20º Nublado</Text>
      
      <View>
        <AntDesign name="arrowup" size={24} color="#FF8C00" />
      </View>
    </View>

  )
}


export { WeatherResult }