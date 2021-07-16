import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class HomeScreen extends React.Component {
    constructor(){
        super();
        this.state={

        }
    }
    getWord=(word)=>{
        var searchkeyword = word.toLowerCase()
        var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchkeyword+".json"
        //console.log(url)
        return fetch (url)
        .then((data)=>{
            if(data.status === 200){
                return data.json()
            }else{
                return null
            }
        })
        .then((response) => {
            var responseObject = response
            if(responseObject){
                var wordData = responseObject.definitions[0]
                var definition = wordData.description
                var lexicalCategory = wordData.wordtype
                this.setState({
                    "word" : this.state.text,
                    "definition" : definition,
                    "lexicalCategory" : lexicalCategory
                })
            }else{
                this.setState({
                    "word" : this.state.text,
                    "definition" : "Not Found",
                })
            }
        })
    }
    render(){
        return(
            <View>

            </View>
        )
    }
}