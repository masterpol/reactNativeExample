import React from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    textHeading: {
        color: '#bbb',
        fontFamily: 'Comic Sans MS',
        backgroundColor: 'transparent'
    }
})

const mainText = (props) => (
    <Text style={styles.textHeading}>{props.children}</Text>
)

export default mainText