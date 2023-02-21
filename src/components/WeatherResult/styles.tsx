import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F9E7D1',
    height: 240,
    width: '100%',    
    
  },

  conditionsText: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '400',
  },

  icon: {
    width: 40,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  top: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    position: 'relative',
    right: -40,
  }
});
