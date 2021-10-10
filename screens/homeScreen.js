import {Box, Button, FormControl, Heading, HStack, Input, Link, NativeBaseProvider, VStack} from "native-base";
import {Text} from "react-native";
import * as React from "react";
import {StyleSheet} from "react-native";
import { Icon } from 'react-native-elements'
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:  '#312c66',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default class HomeScreen extends React.Component {


    render() {
        return (
            <NativeBaseProvider>
                <Box style={style.container} safeArea flex={1} p="8" py="8" w="100%" mx="auto">
                    <Icon    raised  name='headphones'  type='font-awesome'  color='#f50' size={100}/>
                    <Heading size="lg" fontWeight="600" color='blue'>
                        Bem vindo(a)!
                    </Heading>
                    <Heading mt="1" color="white" fontWeight="medium" size="xs">
                        Entre para continuar
                    </Heading>

                    <VStack space={3} mt="5">
                        <FormControl>
                            <FormControl.Label
                                _text={{
                                    color: 'white',
                                    fontSize: 'xs',
                                    fontWeight: 500,
                                }}>
                                Login
                            </FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label
                                _text={{
                                    color: 'white',
                                    fontSize: 'xs',
                                    fontWeight: 500,
                                }}>
                                Senha
                            </FormControl.Label>
                            <Input type="password" />
                            <Link
                                _text={{ fontSize: 'xs', fontWeight: '500', color: '#a5ded1' }}
                                alignSelf="flex-end"
                                mt="1">
                                Esqueceu a senha?
                            </Link>
                        </FormControl>
                        <Button mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
                            Entrar
                        </Button>
                        <HStack mt="6" justifyContent="center">
                            <Text fontSize="sm" color="muted.700" fontWeight={400}>
                                Novo usuario?{' '}
                            </Text>
                            <Link onPress={() => this.props.navigation.navigate('SignUp')}
                                _text={{
                                    color: '#a5ded1' ,
                                    fontWeight: 'medium',
                                    fontSize: 'sm',
                                }}
                                href="#">
                                Cadastrar
                            </Link>
                        </HStack>
                    </VStack>
                </Box>
            </NativeBaseProvider>
        )

    };



}

