import {Text,View,TouchableOpacity} from 'react-native'
import {styles} from './style'

export function Participant(){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>Andre Macedo</Text>
            <TouchableOpacity style={styles.button}>
            <Text style = {styles.textButton}>
              -
            </Text>
          </TouchableOpacity>
        </View>
    )
}