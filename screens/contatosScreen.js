import React from "react";
import {Box, Button, FormControl, Heading, HStack, Input, Link, NativeBaseProvider, VStack} from "native-base";
import {StyleSheet, Text, View} from "react-native";
import {ListItem, Avatar, Icon, Header} from 'react-native-elements'

const style = StyleSheet.create({
    container: {
        backgroundColor:  '#312c66',
        alignItems: 'center',
        justifyContent: 'center'
    }
});


export default class contatosScreen extends React.Component {


    render() {
        const list = [{
            name: 'Eric Cartman',
            avatar_url: 'https://pbs.twimg.com/profile_images/671299074285510656/r51-ZRuY_400x400.jpg',
            subtitle: 'Não enche',
            tel: '(81) 96651-1452'
        }, {
            name: 'Naruto Uzumaki',
            avatar_url: 'https://i.pinimg.com/originals/b7/0b/5c/b70b5c6f390b09491b3563642b77baef.jpg',
            subtitle: 'Vou seguir meu caminho ninja',
            tel: '(81) 99528-9718'
        },
            {
                name: 'Peter Parker',
                avatar_url: 'https://64.media.tumblr.com/480555721ea8e2f3a7a0b0237762bdf5/tumblr_o04pm3QZTS1uooypto6_250.png',
                subtitle: 'Fotografo',
                tel: '(81) 99451-1258'
            }]
        return (
            <View >
                <Header  leftComponent={{icon :'menu'}} centerComponent={{text:'Contatos'}} rightComponent={{icon: 'add', onPress: event => this.props.navigation.navigate('CadastroContato')}}/>
                {
                    list.map((l, i) => (
                        <ListItem onPress={() => this.props.navigation.navigate("AlteracaoContato")} key={i} bottomDivider>
                            <Avatar onPress={() => this.props.navigation.navigate("AlteracaoContato")} source={{uri: l.avatar_url}} />
                                <ListItem.Content >
                                    <ListItem.Title>{l.name}</ListItem.Title>
                                    <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                                    <ListItem.Subtitle>{l.tel}</ListItem.Subtitle>
                                </ListItem.Content>
                        </ListItem>
                            ))
                        }

            </View>


        )

    }



}


