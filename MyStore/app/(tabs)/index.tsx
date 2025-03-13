import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ScrollView, Modal, ImageBackground } from 'react-native';
import { useReducer, useState } from 'react';
import styles from '../../styles'
import { FlatList } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer> 
      <View style={styles.container}>
        <Text> open react</Text>
        <StatusBar style="auto"/>
      </View>
    </NavigationContainer>
  )

  
}
