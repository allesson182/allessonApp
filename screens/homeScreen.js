import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {Box, Button, FormControl, Heading, HStack, Input, Link, NativeBaseProvider, VStack} from "native-base";
import {Text} from "react-native";
import * as React from "react";
import {StyleSheet} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {faDragon} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:  '#312c66',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default function HomeScreen({route,navigation}){

        const[email, setEmail] = useState("");
        const[senha, setSenha] = useState("");
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyCMcoNWvUycx1FRDhJhYywtoD_nMEeFfIY",
            authDomain: "allessonapp.firebaseapp.com",
            projectId: "allessonapp",
            storageBucket: "allessonapp.appspot.com",
            messagingSenderId: "578322582923",
            appId: "1:578322582923:web:0134dc8f4ae0fcc8e7338e",
            measurementId: "G-KWDJ7PDSDQ"
        };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

function fazerLogin(){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("Conectado")
            navigation.navigate("Contatos")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Erro:", errorMessage)
        });

}



        return (

            <NativeBaseProvider>
                <Box style={style.container} safeArea flex={1} p="8" py="8" w="100%" mx="auto">
                    {/*<Icon    raised  name='headphones'  type='font-awesome'  color='#f50' size={100}/>*/}
                    <FontAwesomeIcon icon={ faDragon} size={150} color={'#1bddd4'}/>
                    <Heading size="lg" fontWeight="600" color="#1bddd4">
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
                            <Input  style={{color: 'white',width: 200}}
                                    value={email}
                                    onChangeText={email => setEmail(email)}
                            />

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
                            <Input type="password" style={{color: 'white', width: 200}}
                                   value={senha}
                                   onChangeText={senha => setSenha(senha)}/>
                            <Link
                                _text={{ fontSize: 'xs', fontWeight: '500', color: '#a5ded1' }}
                                alignSelf="flex-end"
                                mt="1">
                                Esqueceu a senha?
                            </Link>
                        </FormControl>
                        <Button onPress={() => {fazerLogin()}} mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
                            Entrar
                        </Button>
                        <HStack mt="6" justifyContent="center">
                            <Text fontSize="sm" color="muted.700" fontWeight={400}>
                                Novo usuario?{' '}
                            </Text>
                            <Link onPress={() => navigation.navigate('SignUp')}
                                _text={{
                                    color: '#a5ded1' ,
                                    fontWeight: 'medium',
                                    fontSize: 'sm',
                                }}
                                >
                                Cadastrar
                            </Link>
                        </HStack>
                    </VStack>
                </Box>
            </NativeBaseProvider>
        )

    }

