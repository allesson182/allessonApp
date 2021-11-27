import {Alert, Box, Button, FormControl, Heading, HStack, Input, Link, NativeBaseProvider, VStack} from "native-base";
import {StyleSheet, Text, TextInput} from "react-native";
import * as React from "react";
import {Icon} from "react-native-elements";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faUserEdit} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import axios from "axios";

const style = StyleSheet.create({
    container: {
        backgroundColor:  '#312c66',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default function AlteracaoContatoScreen({route ,navigation}) {
    const [getNome, setNome] = useState("");
    const [getTelefone, setTelefone] = useState("");
    const [getCpf, setCpf] = useState("");
    const [getId, setId] = useState("");
    const [getEmail, setEmail] = useState("");

    useEffect(() => {
        if (route.params) {
            const {nome} = route.params
            const {telefone} = route.params
            const {cpf} = route.params
            const {id} = route.params
            const {email} = route.params

            setNome(nome)
            setTelefone(telefone)
            setCpf(cpf)
            setId(id)
            setEmail(email)
        }
    }, [])

    function atualizar() {
        axios.put('http://professornilson.com/testeservico/clientes/' + getId, {
            nome: getNome,
            telefone: getTelefone,
            cpf: getCpf,
            email: getEmail
        }).then(function (response) {
            navigation.navigate("Contatos")
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    function deletar() {
        axios.delete('http://professornilson.com/testeservico/clientes/'+getId)
            .then(function (response) {
                navigation.navigate("Contatos")
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            })
    }
    return (
        <NativeBaseProvider>
            <Box style={style.container} safeArea flex={1} p="2" w="100%" mx="auto" py="8">
                {/*<Icon  raised  name='plus'  type='font-awesome'  color='#f50' size={100}/>*/}
                <FontAwesomeIcon icon={faUserEdit} size={150} color={"white"}/>
                <Heading size="lg" color="white" fontWeight="600">
                    Atualizar contato
                </Heading>


                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label
                            _text={{color: 'white', fontSize: 'xs', fontWeight: 500}}>
                            nome
                        </FormControl.Label>
                        <Input style={{color: 'white', width: 200}}
                               value={getNome}
                               onChangeText={text => setNome(text)}
                               />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label
                            _text={{color: 'white', fontSize: 'xs', fontWeight: 500}}>
                            Email
                        </FormControl.Label>
                        <Input style={{color: 'white', width: 200}}
                               onChangeText={text => setEmail(text)}
                               value={getEmail}/>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label
                            _text={{color: 'white', fontSize: 'xs', fontWeight: 500}}>
                            Telefone
                        </FormControl.Label>
                        <Input type="email" style={{color: 'white', width: 200}}
                               onChangeText={text => setTelefone(text)}
                               value={getTelefone}/>
                    </FormControl>
                    <Button onPress={() => atualizar()} mt="2" colorScheme="indigo" _text={{color: 'white'}}>
                        Atualizar
                    </Button>
                    <Button style={{backgroundColor: '#e25f5f'}} onPress={() => deletar()} mt="2"
                            colorScheme="indigo" _text={{color: 'white'}}>
                        Excluir
                    </Button>
                </VStack>
            </Box>
        </NativeBaseProvider>
    );
}
