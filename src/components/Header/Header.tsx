import { Text, View } from "react-native";
import { shadow } from "../../shared/styles/shadow";
import { SearchBar } from "../SearchBar/SearchBar";
import { styles } from "./styles";


const Header = () => {
  return (
    <View style={styles.container}>
        <Text style={[styles.title, shadow.default]}>
            Previsão do tempo
        </Text>
        <SearchBar/>
        
    </View>        
  );
}

export { Header }