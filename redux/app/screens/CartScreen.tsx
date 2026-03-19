import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { addItem, removeItem, clearCart, CartItem } from '../redux/cartSlice';

export default function CartScreen() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state: RootState) => state.cart);

  const handleAddItem = () => {
    if (!name || !quantity || !price) {
      Alert.alert('��سҡ�͡���������ú');
      return;
    }

    const newItem: CartItem = {
      id: Date.now().toString(),
      name,
      quantity: parseInt(quantity),
      price: parseFloat(price),
    };

    dispatch(addItem(newItem));
    setName('');
    setQuantity('');
    setPrice('');
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <SafeAreaView style={styles.safeArea}>
   
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='ชื่อสินค้า'
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder='จำนวน'
            value={quantity}
            onChangeText={setQuantity}
            keyboardType='numeric'
          />
          <TextInput
            style={styles.input}
            placeholder='ราคา'
            value={price}
            onChangeText={setPrice}
            keyboardType='numeric'
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
            <Text style={styles.buttonText}>เพิ่มลงตะกร้า</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>
                {item.name} x{item.quantity} ราคาต่อจำนวน {item.price} บาท
              </Text>
              <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveItem(item.id)}>
                <Text style={styles.buttonText}>ลบ</Text>
              </TouchableOpacity>
            </View>
          )}
        />

        <View style={styles.footer}>
          <Text style={styles.totalText}>ราคาทั้งหมด: {totalAmount} บาท</Text>
          <TouchableOpacity style={styles.clearButton} onPress={handleClearCart}>
            <Text style={styles.buttonText}>ล้างตะกร้า</Text>
          </TouchableOpacity>
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
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
  itemText: {
    flex: 1,
    fontSize: 14,
  },
  removeButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  footer: {
    marginTop: 20,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  clearButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
});
