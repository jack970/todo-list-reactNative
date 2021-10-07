import React from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import styles from '../assets/styles'

const Input = ({ newTask, setNewTask, onHandleAddTask }) => {
    
    return(
        <View style={styles.Form}>
            <TextInput 
              style={styles.Input}
              placeholderTextColor="#fff"  
              autoCorrect={true}
              placeholder="Adicione uma tarefa"
              value={newTask}
              onChangeText={text => setNewTask(text)}
            />
            <TouchableOpacity style={styles.Button} onPress={() => onHandleAddTask()}>
              <Ionicons name="ios-add" size={25} color='#fff' />
            </TouchableOpacity>
        </View>
    )
}

export default Input