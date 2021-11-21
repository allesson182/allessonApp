import {Box, Button, FormControl, Heading, HStack, Input, Link, NativeBaseProvider, VStack} from "native-base";
import {StyleSheet, Text} from "react-native";
import * as React from "react";
import {Icon} from "react-native-elements";
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {useState} from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:  '#312c66',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default function  SignUpScreen({navigation}) {
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
    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    function retornarErro(){
        return"kjk";
    }

    function cadastrar(){
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigation.navigate("Home")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("erro:", errorMessage);
                setErro(errorMessage);
            });
    }
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
                            {/*<FormControl>*/}
                            {/*    <FormControl.Label*/}
                            {/*        _text={{ color: 'white', fontSize: 'xs', fontWeight: 500 }}>*/}
                            {/*        Nome*/}
                            {/*    </FormControl.Label>*/}
                            {/*    <Input style={{color: 'white',width: 200}} />*/}
                            {/*</FormControl>*/}
                            {/*<FormControl>*/}
                            {/*    <FormControl.Label*/}
                            {/*        _text={{ color: 'white', fontSize: 'xs', fontWeight: 500 }}>*/}
                            {/*        CPF*/}
                            {/*    </FormControl.Label>*/}
                            {/*    <Input style={{color: 'white',width: 200}} />*/}
                            {/*</FormControl>*/}
                            <FormControl>
                                <FormControl.Label
                                    _text={{ color: 'white', fontSize: 'xs', fontWeight: 500 }}>
                                    E-mail
                                </FormControl.Label>
                                <Input type="email" style={{color: 'white',width: 200}} onChangeText={email => setEmail(email)}/>
                            </FormControl>
                            <FormControl>
                                <FormControl.Label
                                    _text={{ color: 'white', fontSize: 'xs', fontWeight: 500 }}>
                                    Senha
                                </FormControl.Label>
                                <Input type="password" style={{color: 'white',width: 200}} onChangeText={senha => setSenha(senha)}/>
                            </FormControl>
                            <Button onPress={() => cadastrar()} mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
                                Cadastrar
                            </Button>
                            <text>{erro}</text>
                        </VStack>
                    </Box>
                </NativeBaseProvider>
            );
}