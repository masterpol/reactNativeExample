import React from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    headingText: {
        fontSize: 28,
        fontWeight: 'bold',
    }
})

const headingText = (props) => (
    <Text 
        {...props}
        style={[props.style, styles.headingText]}
    >
        {props.children}
    </Text>
)

export default headingText