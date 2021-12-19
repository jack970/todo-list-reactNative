import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const AddListModal = ({ closeModal, addList }) => {
  const backgroundColors = [
    "#5CD859",
    "#24A6D9",
    "#595BD9",
    "#8022D9",
    "#D159D8",
    "#d85963",
    "#d88559",
  ];
  const [initialState, setInitialState] = useState({
    name: "",
    color: backgroundColors[0],
  });

  const createTodo = () => {
    const { name, color } = initialState;
    const list = { name, color };

    addList(list);
    setInitialState({ name: "" });
    closeModal();
  };

  const renderColors = () => {
    return backgroundColors.map((color) => (
      <TouchableOpacity
        key={color}
        style={[styles.colorSelect, { backgroundColor: color }]}
        onPress={() => setInitialState({ ...initialState, color })}
      />
    ));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableOpacity
        style={{ position: "absolute", top: 64, right: 32 }}
        onPress={closeModal}
      >
        <MaterialIcons name="close" size={24} color="#000" />
      </TouchableOpacity>
      <View style={{ alignSelf: "stretch", marginHorizontal: 32 }}>
        <Text style={styles.title}>Criar uma Lista de Afazeres</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) =>
            setInitialState({ ...initialState, name: text })
          }
          placeholder="Nome da Lista"
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          {renderColors()}
        </View>
        <TouchableOpacity
          style={[styles.create, { backgroundColor: initialState.color }]}
          onPress={createTodo}
        >
          <Text style={{ color: "#fff", fontWeight: "600" }}>Criar Lista</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddListModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#000",
    alignSelf: "center",
    marginBottom: 16,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#1a61be",
    height: 50,
    marginTop: 8,
    paddingHorizontal: 16,
    fontSize: 18,
  },
  create: {
    marginTop: 24,
    height: 50,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  colorSelect: {
    width: 30,
    height: 30,
    borderRadius: 4,
  },
});
