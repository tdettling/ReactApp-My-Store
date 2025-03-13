import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ScrollView, Modal, ImageBackground } from 'react-native';
import { useReducer, useState } from 'react';
import styles from '../../styles'
import { FlatList } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Category from '../../Screens/Category'
import ProductList from '../../Screens/ProductList'
import AddProduct from '../../Screens/AddProduct'
import ProductDetails from '../../Screens/ProductDetails'
import EditProduct from '../../Screens/EditProduct'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator>

          <Stack.Screen name = 'ProductCategories' component = {Category} />
          <Stack.Screen name = 'Add' component = {AddProduct} />
          <Stack.Screen name = 'Edit' component = {EditProduct} />
          <Stack.Screen name = 'List' component = {ProductList} />
          <Stack.Screen name = 'Details' component = {ProductDetails} />

      </Stack.Navigator>

    </NavigationContainer>
  )

  
}
