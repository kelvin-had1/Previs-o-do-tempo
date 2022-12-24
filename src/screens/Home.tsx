import { View, StyleSheet } from "react-native"
import { Header } from "../components/Header";

function Home(): JSX.Element {

    return (
        <View style={styles.container}>
            <Header/>        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {    
      backgroundColor: '#FF8C00',
      height: '100%',
    }
});

export { Home }