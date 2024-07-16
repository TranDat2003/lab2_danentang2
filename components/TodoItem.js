import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <View style={styles.todoItem}>
      <Text style={[styles.todoText, todo.completed && styles.completed]}>
        {todo.title}
      </Text>
      <Text>{todo.content}</Text>
      <Button title={todo.completed ? "Chưa hoàn thành" : "Hoàn thành"} onPress={() => onToggle(todo.id)} />
      <Button title="Xóa" onPress={() => onDelete(todo.id)} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  todoText: {
    fontSize: 18,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default TodoItem;
