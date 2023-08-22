import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container:{
      flex: 1,
      padding: 24,
      backgroundColor: '#222'
    },
    eventName:{
      fontSize: 24,
      fontWeight:'bold',
      marginTop: 40,
      color: '#eee'
    },
    dateEvent:{
      color: '#666777',
          fontSize: 18,
          marginTop: 6,
    },
    input: {
        flex:1,
        height:56,
        backgroundColor: '#333333',
        borderRadius: 5, 
        color: '#fff',
        padding:10,
        marginRight:10,

    },
    button:{
      height: 56,
      width:56,
      backgroundColor: '#1e4',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textButton:{
      fontSize: 24,
      color:'#fff'
    },
    form:{
      marginTop:36,
      marginBottom:46,
      with: '100%',
      flexDirection: 'row',

    },
    textEmpty:{
      color: '#666777',
      fontSize: 18,
      marginTop: 6,
      textAlign: 'center'
    }
    
  
  })