import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={textStyle.Text}>Esse é meu primeiro APP 2</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:  background: rgb(2,0,36);
    backgroundColor: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(204,0,255,1) 93%)' ,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
  
const textStyle = StyleSheet.create( {
  Text:{
  color: '#00e3b2'
  }
})
