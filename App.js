import React, { useState, useEffect } from 'react';
import styles from './src/assets/styles';
import {Task, Input, Header} from './src/index.js'
import { 
    View, 
    Alert,
    Keyboard,
    AsyncStorage,
    KeyboardAvoidingView, Platform
  } from 'react-native';

export default function App() {
    const [task, setTask] = useState([])
    const [newTask, setNewTask] = useState('')

    const onHandleAddTask = async () => { // Função Adiciona tarefa 'newTask' no array 'task'
      if(newTask === '') { // Se o Input estiver vazio
        return; // Retorna nada
      }

      const search = task.filter(task => task.value === newTask) // retorna o item do array 'task', caso seja encontrado em 'newtask'

      if(search.length !== 0) { // se forem encontrados items do array 'task' 
        Alert.alert('Atenção', 'Nome da tarefa repetido') // Message Alert
        Keyboard.dismiss() // Desce Teclado
        return; // Retorna nada
      }

      setTask([ ...task, {check: false, value: newTask}]) //permanece com os itens da lista 'Task' e adiciona a string 'newTask' a ela
      setNewTask('') // Limpa input

      Keyboard.dismiss() // Desce Teclado
    }

    useEffect(() => {
      const carregaDados = async () => {
        const task = await AsyncStorage.getItem('task')
  
        if(task) {
          setTask(JSON.parse(task))
        }
      }
      carregaDados()
    }, [])
  
    useEffect(() => { // Função disparada quando houver alteração no array task
      const salvaDados = async () => {
        AsyncStorage.setItem("task", JSON.stringify(task))
      }
      salvaDados()
    }, [task])
  
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={0}
        behavior="padding"
        style={{ flex: 1 }}
        enabled={ Platform.OS === 'ios' }
      >
        <Header title="Tarefas do Dia" setTask={setTask}/>
        <View style={styles.container}>
          <Task task={task} setTask={setTask} />
          <Input 
            newTask={newTask} 
            setNewTask={setNewTask} 
            onHandleAddTask={onHandleAddTask} />
        </View>
      </KeyboardAvoidingView>
    );
}