import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TodoModal = ({ list, closeModal, updateList }) => {
  const [newTodo, setNewTodo] = useState("");

  const toggleTodoCompleted = (index) => {
    let newlist = list;
    newlist.todos[index].completed = !newlist.todos[index].completed;

    updateList(newlist);
  };

  const addTodo = () => {
    let newList = list.todos.push({ title: newTodo, completed: false });
    updateList(newList);
    setNewTodo("");

    Keyboard.dismiss();
  };

  const renderTodo = (todo, index) => {
    return (
      <View style={styles.todoContainer}>
        <TouchableOpacity onPress={() => toggleTodoCompleted(index)}>
          <MaterialIcons
            name={todo.completed ? "check-box" : "check-box-outline-blank"}
            size={24}
            color="#a39f9f"
            style={{ width: 32 }}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.todo,
            {
              color: "#2d3436",
              textDecorationLine: todo.completed ? "line-through" : "none",
              color: todo.completed ? "#a39f9f" : "#2d3436",
            },
          ]}
        >
          {todo.title}
        </Text>
      </View>
    );
  };

  const taskCount = list.todos.length;
  const completedCount = list.todos.filter((todo) => todo.completed).length;
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={{ position: "absolute", top: 35, right: 32, zIndex: 10 }}
          onPress={closeModal}
        >
          <MaterialIcons name="close" size={24} color="#2d3436" />
        </TouchableOpacity>
        <View
          style={[
            styles.section,
            styles.header,
            { borderBottomColor: list.color },
          ]}
        >
          <View>
            <Text style={styles.title}>{list.name}</Text>
            <Text style={styles.taskCount}>
              {completedCount} de {taskCount} tarefas
            </Text>
          </View>
        </View>
        <View style={[styles.section, { flex: 3 }]}>
          <FlatList
            data={list.todos}
            renderItem={({ item, index }) => renderTodo(item, index)}
            keyExtractor={(item) => item.title}
            contentContainerStyle={{
              paddingHorizontal: 32,
              paddingVertical: 64,
            }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always"
          />
        </View>
        <View style={[styles.section, styles.footer]}>
          <TextInput
            style={[styles.input, { borderColor: list.color }]}
            onChangeText={(text) => setNewTodo(text)}
            value={newTodo}
          />
          <TouchableOpacity
            style={[styles.addTodo, { backgroundColor: list.color }]}
            onPress={() => addTodo()}
          >
            <MaterialIcons name="add" size={16} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    flex: 1,
    alignSelf: "stretch",
  },
  header: {
    justifyContent: "flex-end",
    marginLeft: 64,
    borderBottomWidth: 3,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2d3436",
  },
  taskCount: {
    marginTop: 4,
    marginBottom: 16,
    color: "#a39f9f",
    fontWeight: "600",
  },
  footer: {
    paddingHorizontal: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  addTodo: {
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  todoContainer: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  todo: {
    color: "#2d3436",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default TodoModal;
