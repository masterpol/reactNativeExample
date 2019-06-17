import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import ListItem from '../ListItem/ListItem'

const styles = StyleSheet.create({
    "listcontainer": {
        width: '95%'
	}
})

const List = (props) => {
    const placesOutPut = ({item}) => (
        <ListItem item={item.value} onItemClick={props.onItemClick} position={item.key} image={item.image} />
    )

    return (
        <FlatList 
            style={styles.listcontainer}
            data={props.list}
            renderItem={placesOutPut}
            keyExtractor={(item) => `${item.key}-${item.value}` }
        />
    )
}

export default List