import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTodo = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAdd = () => {
    if (title && content) {
      onAdd({ title, content });
      setTitle('');
      setContent('');
    }
  };

  return (
    <View style={styles.addTodo}>
      <TextInput
        style={styles.input}
        placeholder="Tiêu đề"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Nội dung"
        value={content}
        onChangeText={setContent}
      />
      <Button title="Thêm công việc" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  addTodo: {
    marginBottom: 20,
  },
  input: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
  },
});

export default AddTodo;
