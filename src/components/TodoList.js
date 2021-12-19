import React, { useState } from "react";
import { Text, View, TouchableOpacity, Modal } from "react-native";
import styles from "../assets/styles";
import TodoModal from "./TodoModal";

const TodoList = ({ list, updateList }) => {
  const [showListVisible, setShowListVisible] = useState(false);
  const completedCount = list.todos.filter((todo) => todo.completed).length;
  const remainingCount = list.todos.length - completedCount;

  const closeModal = () => {
    setShowListVisible(!showListVisible);
  };
  return (
    <View>
      <Modal
        animationType="slide"
        visible={showListVisible}
        onRequestClose={closeModal}
      >
        <TodoModal
          list={list}
          closeModal={closeModal}
          updateList={updateList}
        />
      </Modal>
      <TouchableOpacity
        style={[styles.listContainer, { backgroundColor: list.color }]}
        onPress={closeModal}
      >
        <Text style={styles.listTitle}>{list.name}</Text>

        <View style={{ alignItems: "center" }}>
          <Text style={styles.count}>{remainingCount}</Text>
          <Text style={styles.subtitle}>Faltando</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.count}>{completedCount}</Text>
          <Text style={styles.subtitle}>Completadas</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TodoList;
