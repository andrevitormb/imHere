import { useState } from 'react'
import {Text, View, TextInput, TouchableOpacity,FlatList, Alert} from 'react-native'
import {styles} from './styles'

import { Participant } from '../../components/Participant'

export function Home(){
  const [participants,setParticipants]= useState<string[]>([])
  const [participantNames,setParticipantsNames]= useState<string>('')

  function handleParticipantAdd(){
    if(participants.includes(participantNames)){
      Alert.alert('Participant already exists')
      setParticipantsNames('')
      return
    }
    
    console.log('handleParticipantAdd')

    setParticipants(prevState => [...prevState, participantNames])
    setParticipantsNames('')
  }

  function handleParticipantRemove(name:string){
    
    Alert.alert('Remove',`Do you really want to remove ${name} ?`,[
      {text: 'Yes',
       onPress: ()=> setParticipants(prevEvents => prevEvents.filter(participants => participants !== name)), 
      },
      {
        text: 'No',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      }
    ])
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
          onChangeText={setParticipantsNames}
          value={participantNames}
          />
          <TouchableOpacity 
          style={styles.button} 
          onPress={handleParticipantAdd}>
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