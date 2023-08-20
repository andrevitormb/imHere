import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#333',
        flexDirection: 'row',
        borderRadius: 5,
        alignItems: 'center',
        marginBottom:10,
    },
    name:{
        flex:1,
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    button:{
        height: 56,
        width:56,
        backgroundColor: '#E23C3C',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textButton:{
        fontSize: 24,
        color:'#fff'
      },

})