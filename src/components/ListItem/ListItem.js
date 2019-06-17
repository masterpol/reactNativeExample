import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    Image
} from 'react-native'

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        backgroundColor: "#eee",
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    placeImage: {
        marginRight: 8,
        height: 30,
        width: 30
    },
    touchable: {
        width: "100%", 
        alignItems: "center"
    }
})

const ListItem = (props) => (
    <TouchableOpacity style={styles.touchable} onPress={() => props.onItemClick(props.position)}>
        <View style={styles.listItem}>
            <Image resizeMode="contain" source={props.image} style={styles.placeImage} />
            <Text>{props.item}</Text>
        </View>
    </TouchableOpacity>
)

export default ListItem