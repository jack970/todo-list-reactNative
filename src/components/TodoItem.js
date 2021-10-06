import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { Alert, Text, CheckBox, TextInput, TouchableOpacity, View } from 'react-native'
import styles from '../assets/styles'

const TodoItem = ({task, setTask, item}) => {
    const [isEditing, setEdit] = useState(false);
    const [isSelected, setSelection] = useState(item.check)
    const [newText, setNewText] = useState(item.value + '')

    const handleSelect = async (item) => {
        const newTodos = [...task]
        setSelection(!isSelected)
        const indexItem = newTodos.findIndex(tasks => tasks.value === item)
        newTodos[indexItem].check = !isSelected
        setTask(newTodos)
    }


    const handleEdit = async (item) => {
        if(newText === '') {
            Alert.alert('Atenção', 'Nome da tarefa vazio!') // Message Alert
            return;
        } 
        const newTodos = [...task]
        const indexItem = newTodos.findIndex(tasks => tasks.value === item)
        newTodos[indexItem].value = newText
        
        setTask(newTodos)
        setEdit(!isEditing)
      };

    const onHandleRemoveTask = async (item) => {
        Alert.alert( // Alerta com Botão de Confirma e Cancela
          "Deletar Task",
          "Tem certeza que deseja deletar esta anotação?",
          [
            {
              text: "Cancelar",
              onPress: () => {return;}, // Retorna nada
              style: 'cancel'
            },
            {
              text: "Confirmar",
              onPress: () => setTask(task.filter(tasks => tasks.value !== item)) // retorna todos os 'tasks' da lista que forem diferentes do 'item' escolhido
            },
          ],
          { cancelable: false }
        )
    }

    return(
        <View style={styles.ContainerView}>
               <CheckBox
                tintColors={{ true: '#3E3364'}}
                value={isSelected}
                onValueChange={() => handleSelect(item.value)}
                style={styles.caixa}
                />
            <View style={styles.taskContainer}>
                    {isEditing 
                    ? <TextInput maxLength={35} multiline value={newText} style={styles.InputUpdate} onChangeText={setNewText}/>
                    : <Text style={isSelected ? styles.TextoCompleted : styles.Texto}>{item.value}</Text>}
                <View style={styles.Buttons}>
                    {isEditing 
                    ? <TouchableOpacity //Button save
                        onPress={() => handleEdit(item.value)}
                        >
                        <MaterialIcons 
                            name="save" 
                            size={25} color='#fff' />
                    </TouchableOpacity>
                    :<> 
                        <TouchableOpacity //Button Edit
                            onPress={() => setEdit(true)} 
                            >
                            <MaterialIcons 
                                name="edit" 
                                size={25} color='#fff' />
                        </TouchableOpacity>
                        <TouchableOpacity //Button Remove
                            onPress={() => onHandleRemoveTask(item.value)} 
                            >
                            <MaterialIcons 
                                name="delete-forever" 
                                size={25} color='#fff' />
                        </TouchableOpacity>
                    </>}
                </View>
            </View>
        </View>
    )
}

export default TodoItem