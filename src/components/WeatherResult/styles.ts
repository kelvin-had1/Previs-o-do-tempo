import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    height: 240,
    width: '100%', 
    borderBottomWidth: 1,   
    borderColor: '#FF8C00'
  },

  secondContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    height: 100,
    width: '100%',
  },

  dataView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  minMaxBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },

  container: {
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
