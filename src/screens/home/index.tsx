import {Text, View, TextInput, TouchableOpacity} from 'react-native'
import {styles} from './styles'

import { Participant } from '../../components/Participant'

export function Home(){

  function handleParticipantAdd(){
    console.log('handleParticipantAdd')
  }

  function handleParticipantRemove(name:string){
    console.log(`handleParticipantRemove ${name}`)
  }

  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Event Name
      </Text>
      <Text style={styles.dateEvent}>
        Sunday , 999 august 2023.
      </Text>
        <View style = {styles.form}>
          <TextInput 
          style = {styles.input}
          placeholder='Digit your name'
          placeholderTextColor='#fff'
          keyboardType='default'
          />
          <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style = {styles.textButton}>
              +
            </Text>
          </TouchableOpacity>
         </View>
         <Participant name='Andre Macedo' onRemove ={()=> handleParticipantRemove ('Andre Macedo')}/>
         
    </View>
)
}