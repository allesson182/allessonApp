import {Box, Button, FormControl, Heading, HStack, Input, Link, NativeBaseProvider, VStack} from "native-base";
import {StyleSheet, Text} from "react-native";
import * as React from "react";
import {Icon} from "react-native-elements";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:  '#312c66',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default class SignUpScreen extends React.Component {
    render() {
        return(
                <NativeBaseProvider>
                    <Box style={style.container} safeArea flex={1} p="2" w="100%" mx="auto" py="8">
                        <Icon    raised  name='user'  type='font-awesome'  color='#f50' size={100}/>
                        <Heading size="lg" color="white" fontWeight="600">
                            Vamos lá!
                        </Heading>
                        <Heading mt="1" color="white" fontWeight="medium" size="xs">
                            Cadastre-se para continuar
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
                                    CPF
                                </FormControl.Label>
                                <Input style={{color: 'white',width: 200}} />
                            </FormControl>
                            <FormControl>
                                <FormControl.Label
                                    _text={{ color: 'white', fontSize: 'xs', fontWeight: 500 }}>
                                    E-mail
                                </FormControl.Label>
                                <Input type="email" style={{color: 'white',width: 200}} />
                            </FormControl>
                            <FormControl>
                                <FormControl.Label
                                    _text={{ color: 'white', fontSize: 'xs', fontWeight: 500 }}>
                                    Senha
                                </FormControl.Label>
                                <Input type="password" style={{color: 'white',width: 200}} />
                            </FormControl>
                            <Button onPress={() => this.props.navigation.navigate('Home')} mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
                                Cadastrar
                            </Button>
                        </VStack>
                    </Box>
                </NativeBaseProvider>
            );
        }




}