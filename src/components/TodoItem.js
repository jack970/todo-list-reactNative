import React, { useRef, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { Alert, Text, CheckBox, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform } from 'react-native'
import styles from '../assets/styles'

const TodoItem = ({task, setTask, item}) => {
    const [isEditing, setEdit] = useState(false);
    const [newText, setNewText] = useState(item.value + '')
    const inputRef = useRef()

    const handleChangeCheckbox = async (item) => {
        const newTodos = [...task]
        const indexItem = newTodos.findIndex(tasks => tasks.value === item.value)
        newTodos[indexItem].check = !item.check
        setTask(newTodos)
    }

    const handleEditSave = async (item) => {
        if(newText === '') {
            Alert.alert('Atenção', 'Nome da tarefa vazio!') // Message Alert
            inputRef.current.focus()
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
        <KeyboardAvoidingView
            keyboardVerticalOffset={0}
            behavior="padding"
            enabled={ Platform.OS === 'ios' }
            style={styles.ContainerView}>
            <CheckBox
                    tintColors={{ true: '#FFF'}}
                    value={item.check}
                    onValueChange={() => handleChangeCheckbox(item)}
                    style={styles.caixa}
                />
            <View style={styles.taskContainer}>
                {isEditing 
                    ? <TextInput 
                        multiline
                        placeholder="Altere aqui..."
                        placeholderTextColor="#D0D0D5"
                        ref={inputRef}
                        autoFocus={true}
                        value={newText}
                        style={styles.InputUpdate}
                        onChangeText={setNewText}/>
                    : <Text 
                        style={[
                            styles.Texto, 
                            item.check && {textDecorationLine: 'line-through', opacity: .5}]}
                        >{item.value}</Text>}
                <View style={styles.Buttons}>
                    {isEditing 
                        ? <TouchableOpacity //Button save
                            onPress={() => handleEditSave(item.value)}
                            >
                            <MaterialIcons 
                                name="save" 
                                size={25} color='#fff' />
                        </TouchableOpacity>
                        : <> 
                            <TouchableOpacity //Button Edit
                                onPress={() => setEdit(!isEditing)} 
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
        </KeyboardAvoidingView>
    )
}

export default TodoItem