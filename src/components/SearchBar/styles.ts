import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "80%",
        height: 60,        
        borderColor: "white",
        borderWidth: 1,
        padding: 10,
        marginTop: 15,
    },    
    mainContainer: {
        borderBottomWidth: 1,
        marginTop: 15,
        borderColor: "white",
        // backgroundColor: "#000000",
        height: 100,
        width: "100%",
        display: "flex",       
        alignItems: "center", 
    },
    searchIconImage: {        
        height: 35,
        width: 35,
        position: 'relative',
        left: '88%',
        top: '-80%',      
    },
    icon: {
        height: 35,
        width: 35,
    },
    input: {
        fontSize: 16,
        paddingTop: 5,
        paddingRight: 50,
    },
    button: {
        position: 'relative',
        left: '88%',
    }

})