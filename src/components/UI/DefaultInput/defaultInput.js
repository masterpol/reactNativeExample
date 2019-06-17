import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "gray",
        margin: 8,
        padding: 5
    }
})

const defaultInput = props => (
    <TextInput 
        {...props}
        style={[styles.input, props.style]}
    />
)

export default defaultInput