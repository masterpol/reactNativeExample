import React from 'react'
import { View, Button, StyleSheet, ImageBackground } from 'react-native'
import StartTabs from '../MainTabs/startMainTabs'

import DefaultInput from '../../components/UI/DefaultInput/defaultInput'
import HeadingText from '../../components/UI/Heading/HeadingText'
import MainText from '../../components/UI/MainText/mainText'
import ButtonCustom from '../../components/UI/ButtonCustom/buttonCustom'

import backgroundImage from '../../assets/images/image.jpg'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "#f6f6f6"
    },
    backgroundImage: {
        flex: 1,
        width: "100%",
        height: "100%"
    }
})

function AuthScreen(props) {
    const loginHandler = () => {
        StartTabs()
    }

    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <View style={styles.container}>
                <MainText>
                    <HeadingText>Please Sing in!</HeadingText>
                </MainText>
                <ButtonCustom 
                    color="#03A9F4"
                    onPress={() => alert("switch")}
                    >
                    switch to Login
                </ButtonCustom>
                <View style={styles.inputContainer}>
                    <DefaultInput style={styles.input} placeholder="your email" />
                    <DefaultInput style={styles.input} placeholder="Password" />
                    <DefaultInput style={styles.input} placeholder="Confirm Password" />
                </View>
                <ButtonCustom
                    color="#03A9F4"
                    onPress={loginHandler}
                    >
                    Submit
                </ButtonCustom>
            </View>
        </ImageBackground>
    )
}

export default AuthScreen