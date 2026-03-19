import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CartScreen from './screens/CartScreen';
import TodoScreen from './screens/TodoScreen';

function MainApp() {
  const [currentScreen, setCurrentScreen] = useState<'cart' | 'todo'>('todo');

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {currentScreen === 'cart' ? <CartScreen /> : <TodoScreen />}
      </View>
      <View style={styles.tabBar}>
        <TouchableOpacity 
          style={[styles.tabButton, currentScreen === 'cart' && styles.activeTab]} 
          onPress={() => setCurrentScreen('cart')}
        >
          <Text style={[styles.tabText, currentScreen === 'cart' && styles.activeTabText]}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tabButton, currentScreen === 'todo' && styles.activeTab]} 
          onPress={() => setCurrentScreen('todo')}
        >
          <Text style={[styles.tabText, currentScreen === 'todo' && styles.activeTabText]}>To-Do</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#f1f1f1',
  },
  tabText: {
    fontSize: 16,
    color: '#888',
  },
  activeTabText: {
    color: '#2196F3',
    fontWeight: 'bold',
  },
});
