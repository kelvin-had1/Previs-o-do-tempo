import { useState } from "react";
import { Button, Image, SafeAreaView, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Weather } from "../../api/weather";

const weather = new Weather()

function SearchBar(){
    const [city, setCity] = useState('')
    
    return (
        <View style={styles.container}>
            <TextInput                        
                placeholder="Insira aqui o nome da cidade"
                style={styles.input}
                value={city}
                onChangeText={setCity}
            />
            
            <TouchableOpacity
                onPress={() => console.log(weather.getWeather(city))}
                style={styles.searchIconImage}
                >
                
                <Image                    
                    style={styles.icon}
                    source={require('../../../assets/lupa.png')}                
                />          
            </TouchableOpacity>
            
            
        </View>
            
        
        
    )
}

export { SearchBar }