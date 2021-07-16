import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  constructor(){
    super();
    this.state = {
      text : '',
      isSearchpressed : '',
      word : '',
      lexicalCtegory : '',
      examples : [],
      defination : ''
    }
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <TextInput
      style = {styles.inputbox}
      onChangeText = {text => {
        this.setState({
          text : text,
          isSearchpressed : false,
          word : "Loading....",
          lexicalCtegory : '',
          examples : [],
          defination : ""
        })
      }}
      />

      <TouchableOpacity
      style = {styles.searchbutton}
      onPress = { () =>{
        this.setState({
          isSearchpressed : true;
          this.getWord(this.state.text)
        })
      }}
      ></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputbox : {
    marginTop : 150 ,
    width : "80%",
    height : 40,
    alignSelf : "center",
    textAlign : "center",
    borderWidth : 4
  },
  searchbutton : {
    width : '50%',
    height : 50,
    alignSelf : "center",
    padding : 10,
    margin : 10
  },
});
