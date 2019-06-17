import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    main: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#f6f6f6",
        padding: 15,
        margin: 5
    },
    text: {
        color: "white"
    }
})

const buttomCustom = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.main, { backgroundColor: props.color }]}>
            <Text style={styles.text}>{props.children}</Text>
        </View>
    </TouchableOpacity>
)

export default buttomCustom