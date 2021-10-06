import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View , Text, FlatList } from 'react-native'
import styles from '../assets/styles'
import TodoItem from './TodoItem';

const Task = ({task, setTask}) => {
    return(
        <View style={styles.Body}>
            {task.length == 0 && <Text style={{color: '#fff'}}>Você não tem tarefas hoje!</Text>}
            {task.length != 0 && 
                <FlatList 
                    style={styles.FlatList}
                    data={task}
                    keyExtractor={(item, id) => id.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <TodoItem 
                            item={item}
                            task={task}
                            setTask={setTask}
                        />
                    )}
                />}
            <StatusBar style="auto" />
        </View>
    )
}

export default Task