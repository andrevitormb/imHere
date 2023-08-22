import {Text, View, TextInput, TouchableOpacity,FlatList} from 'react-native'
import {styles} from './styles'

import { Participant } from '../../components/Participant'

export function Home(){
  const participants = ['andre', 'joão', 'pedro', 'lucas','caio','rodrigo','marisa','hugo','daniel']

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
          <FlatList
          data={participants}
          keyExtractor={item =>item}
          renderItem={({item}) =>(
            <Participant 
              name={item}
              key={item}
              onRemove={()=>handleParticipantRemove(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={()=>(
            <Text style={styles.textEmpty}>
              Anyone arrived on the event ? Add new participants here. 
            </Text>
          )}
          />
          
         
         
    </View>
)
}