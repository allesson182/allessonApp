import {Box, Button, FormControl, Heading, HStack, Input, Link, NativeBaseProvider, VStack} from "native-base";
import {StyleSheet, Text} from "react-native";
import * as React from "react";
import {Icon} from "react-native-elements";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faAddressCard} from "@fortawesome/free-solid-svg-icons";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:  '#312c66',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default class CadastroContatoScreen extends React.Component {
    render() {
        return(
            <NativeBaseProvider>
                <Box style={style.container} safeArea flex={1} p="2" w="100%" mx="auto" py="8">
                    {/*<Icon  raised  name='plus'  type='font-awesome'  color='#f50' size={100}/>*/}
                    <FontAwesomeIcon icon={ faAddressCard } size={ 150 } color={"white"} />
                    <Heading size="lg" color="white" fontWeight="600">
                        Vamos lá!
                    </Heading>
                    <Heading mt="1" color="white" fontWeight="medium" size="xs">
                        Cadastre um novo contato
                    </Heading>

                    <VStack space={3} mt="5">
                        <FormControl>
                            <FormControl.Label
                                _text={{ color: 'white', fontSize: 'xs', fontWeight: 500 }}>
                                Nome
                            </FormControl.Label>
                            <Input style={{color: 'white',width: 200}} />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label
                                _text={{ color: 'white', fontSize: 'xs', fontWeight: 500 }}>
                                Email
                            </FormControl.Label>
                            <Input style={{color: 'white',width: 200}} />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label
                                _text={{ color: 'white', fontSize: 'xs', fontWeight: 500 }}>
                                Telefone
                            </FormControl.Label>
                            <Input type="email" style={{color: 'white',width: 200}} />
                        </FormControl>
                        <Button onPress={() => navigation.navigate('Contatos')} mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
                            Cadastrar
                        </Button>
                    </VStack>
                </Box>
            </NativeBaseProvider>
        );
    }




}