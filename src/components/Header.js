import React from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import styles from '../assets/styles'

const Header = ({title, setTask}) => {
    const onHandleRemoveAllTasks = async () => {
        Alert.alert( // Alerta com Botão de Confirma e Cancela
          "Deletar todas as anotações",
          "Tem certeza que deseja deletar todas as anotações?",
          [
            {
              text: "Cancelar",
              onPress: () => {return;}, // Retorna nada
              style: 'cancel'
            },
            {
              text: "Confirmar",
              onPress: () => setTask([]) // retorna todos os 'tasks' da lista que forem diferentes do 'item' escolhido
            },
          ],
          { cancelable: false }
        )
    }

    return(
    <View style={styles.Header}>
        <Text style={styles.Title}>
            {title}
        </Text>
        <TouchableOpacity onPress={() => onHandleRemoveAllTasks()}>
            <MaterialIcons
                name="delete-forever"
                size={25} color='#fff' />
        </TouchableOpacity>
    </View>
    )
}

export default Header