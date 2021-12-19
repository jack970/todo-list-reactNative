import React, { useEffect, useState } from "react";
import styles from "./src/assets/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { AddListModal, TodoList } from "./src/index.js";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  AsyncStorage,
} from "react-native";
import tempData from "./src/assets/tempData";

export default function App() {
  const [addTodoVisible, setAddTodoVisible] = useState(false);
  const [lists, setLists] = useState(tempData);

  // ERRO AQUI
  useEffect(() => {
    const carregaDados = async () => {
      const task = await AsyncStorage.getItem("Tarefas");

      if (task) {
        setLists(JSON.parse(task));
      }
    };
    carregaDados();
  }, []);

  useEffect(() => {
    const salvaDados = async () => {
      await AsyncStorage.setItem("Tarefas", JSON.stringify(lists));
    };
    salvaDados();
  }, [lists]);

  const renderList = (list) => {
    return <TodoList list={list} updateList={updateList} />;
  };

  const addList = (list) => {
    setLists([...lists, { ...list, id: lists.length + 1, todos: [] }]);
  };

  const updateList = (list) => {
    setLists(
      lists.map((item) => {
        return item.id === list.id ? list : item;
      })
    );
  };

  return (
    <View style={styles.ContainerList}>
      <Modal
        animationType="slide"
        visible={addTodoVisible}
        onRequestClose={() => setAddTodoVisible(!addTodoVisible)}
      >
        <AddListModal
          closeModal={() => setAddTodoVisible(!addTodoVisible)}
          addList={addList}
        />
      </Modal>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.divider} />
        <Text style={styles.titleHome}>
          Todo{" "}
          <Text style={{ fontWeight: "300", color: "#4040f0" }}>Lists</Text>
        </Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.ViewAddList}>
        <TouchableOpacity
          style={styles.addList}
          onPress={() => setAddTodoVisible(!addTodoVisible)}
        >
          <MaterialIcons name="add" size={16} color="#3c48f3" />
        </TouchableOpacity>
        <Text style={styles.add}>Add uma Lista</Text>
      </View>
      <View style={{ height: 275, paddingLeft: 32 }}>
        <FlatList
          data={lists}
          keyExtractor={(item, id) => id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => renderList(item)}
        />
      </View>
    </View>
  );
}
