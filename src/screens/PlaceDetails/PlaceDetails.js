import React from 'react'
import { connect } from 'react-redux'
import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import { 
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import { deletePlace } from '../../store/actions'

const styles = StyleSheet.create({
    container: {
        margin: 22 
    },
    image: {
        width: "100%",
        height: 200
    },
    "text": {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },
    deleteButton: {
        alignItems: "center"
    }
})

const PlaceDetailScreen = props => {
    const onItemDelete = () => {
        props.onDeletePlace(props.selectedPlace.key)
        Navigation.pop(props.componentId)
    }

    return (
        <View style={styles.container}>
            <View>
                <Image 
                    source={ props.selectedPlace.image } 
                    style={styles.image}
                />
                <Text style={styles.text}>{props.selectedPlace.value}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={onItemDelete}>
                    <View style={styles.deleteButton}>
                        <Icon name="md-trash" size={30} color="red"/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const mapDispachToProps = dispatch => {
    return {
        onDeletePlace: key => dispatch(deletePlace(key))
    } 
}

export default connect(null, mapDispachToProps)(PlaceDetailScreen)