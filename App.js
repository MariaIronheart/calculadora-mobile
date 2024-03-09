import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import react from 'react';
import Calculadora from './src/components/calculadora';


export default function App() {
  return (
    <View>
      <Calculadora/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  }
})

