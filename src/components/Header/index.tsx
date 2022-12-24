import { Text, View } from "react-native";
import { SearchBar } from "../SearchBar";
import { styles } from "./styles";


function Header(): JSX.Element {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Previsão do tempo
        </Text>
        <SearchBar/>
        
    </View>        
  );
}

export { Header }