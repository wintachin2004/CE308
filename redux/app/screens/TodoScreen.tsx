import React, { useState } from 'react';
import { Alert, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { addTodo, removeTodo, Todo, toggleTodo } from '../redux/todoSlice';

export default function TodoScreen() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.todos);

  const handleAddTodo = () => {
    if (!text.trim()) {
      Alert.alert('��سҡ�͡���ͧҹ');
      return;
    }

    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };

    dispatch(addTodo(newTodo));
    setText('');
  };

  const handleToggleTodo = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const handleRemoveTodo = (id: string) => {
    dispatch(removeTodo(id));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='เพิ่มงาน...'
            value={text}
            onChangeText={setText}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
            <Text style={styles.buttonText}>เพิ่มงาน</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.todoItem}>
              <TouchableOpacity style={styles.todoTextContainer} onPress={() => handleToggleTodo(item.id)}>
                <Text style={[styles.todoText, item.completed && styles.completedText]}>
                  {item.text}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveTodo(item.id)}>
                <Text style={styles.buttonText}>ลบ</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <View style={styles.footer}>
            <Text>รวม: {todos.length}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  todoTextContainer: {
    flex: 1,
  },
  todoText: {
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  removeButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  }
});
