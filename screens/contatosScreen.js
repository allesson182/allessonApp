import React, {useEffect, useState} from "react";
import {Box, Button, FormControl, Heading, HStack, Input, Link, NativeBaseProvider, VStack} from "native-base";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {ListItem, Avatar, Icon, Header} from 'react-native-elements'
import axios from 'axios';

const style = StyleSheet.create({
    container: {
        backgroundColor:  '#312c66',
        alignItems: 'center',
        justifyContent: 'center'
    }
});


export default function contatosScreen({route, navigation }) {
    const[getContatoList, setContatoList] = useState([]);
    useEffect(() => {
        getContatos()
    }, [])
    function getContatos(){
        axios.get("http://professornilson.com/testeservico/clientes").then(function (response){
            console.log("response", response)
            setContatoList(response.data)
        }).catch(function (error){
            console.log("erro:", error)
        })
    }

    return (
            <View >
                <ScrollView>
                <Header  leftComponent={{icon :'menu'}} centerComponent={{text:'Contatos'}} rightComponent={{icon: 'add', onPress: event => this.props.navigation.navigate('CadastroContato')}}/>
                {
                    getContatoList.map((contato, i) => (
                        <ListItem onPress={() => navigation.navigate("AlteracaoContato", contato)} key={i} bottomDivider>
                            <Avatar onPress={() => navigation.navigate("AlteracaoContato", contato)} source={{uri: 'https://i.pinimg.com/236x/d0/fa/de/d0fade8e8337e9a7af60d24f683b08f9.jpg'}} />
                                <ListItem.Content >
                                    <ListItem.Title>{contato.nome}</ListItem.Title>
                                    <ListItem.Subtitle>{contato.telefone}</ListItem.Subtitle>
                                    <ListItem.Subtitle>{contato.email}</ListItem.Subtitle>
                                    <ListItem.Subtitle>{contato.cpf}</ListItem.Subtitle>
                                </ListItem.Content>
                        </ListItem>
                            ))
                        }
                </ScrollView>
            </View>


        )




}


