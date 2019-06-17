import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
        backgroundColor: '#fff',
        flex: 1
    }
})

function SideDrawer() {
    return (
        <View style={styles.container}>
            <Text>Side drawer</Text>
        </View>
    )
}

export default SideDrawer