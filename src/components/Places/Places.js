import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    "inputContainer": {
		width: '95%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'

	},
    "input": {
		height: 37,
		width: '70%',
		borderColor: 'gray',
		borderWidth: 1,
        marginBottom: 10,
        marginTop: 5
	},
	"button": {
		height: 40,
		width: '30%'
	}
})

/**
 * text comment
 * @param {*} props 
 */
const Places = (props) => (
    <View style={styles.inputContainer}>
        <TextInput
            placeholder="An awesome place"
            style={styles.input}
            onChangeText={props.onChange}
            value={props.place}
        />
        <Button
            containerStyle={styles.button}
            onPress={props.onClick}
            title="Add"
            disabled={props.disabled}
            accessibilityLabel="Label use"
        />
    </View>
)

export default Places