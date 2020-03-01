import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Input } from 'react-native-elements'

import { LinearGradient } from 'expo-linear-gradient';


export default function LoginScreen(){

    return (
        <LinearGradient colors={['#0069a3', '#06a2f8', '#28b3ff']} style={styles.GradientBackground}>
            <View style={styles.Container}>
                <View style={styles.ContainerHeader}>
                    <Text style={ styles.TextHeader }>INICIAR SESIÓN</Text>
                </View>
                <View style={styles.ContainerForm}>

                    <Input
                        placeholder='Nombre'
                        leftIcon = {{ name: 'user', type: 'font-awesome', color:'#000000', marginRight: 10, marginLeft: -12 }}
                        inputContainerStyle = {{ borderColor: '#9b9b9b' }}
                    />

                </View>
            </View>
        </LinearGradient>
    );  
}

const styles = StyleSheet.create({
    GradientBackground: {
        flex: 1,
        zIndex:-1
    },
    Container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    ContainerHeader: {
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '80%', 
        height: '7%',
        backgroundColor: "#fed501", 
        borderRadius: 6,
        zIndex:1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    TextHeader: {
        color: "#FFFFFF", 
        fontWeight: 'bold', 
        fontSize: 18
    },
    ContainerForm: {
        marginTop: -30,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: "#FFFFFF", 
        width: '90%', 
        height: '30%',
        borderRadius: 12,
        padding: 10
    }
});