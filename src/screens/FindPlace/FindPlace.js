import React from 'react'
import { View } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { connect } from 'react-redux'

import List from '../../components/List/List'


function FindPlaceScreen (props) {
    const onPlaceNavigation = key => {
        const selectedPlace =  props.places.find(place => place.key == key)

        Navigation.push(props.componentId, {
            component: {
                name: 'awesome-places.PlaceDetailScreen',
                passProps: {
                    selectedPlace
                },
                options: {
                    topBar: {
                        leftButtons:[],
                        title: {
                            text: selectedPlace.value
                        }
                    }
                }
            }
        });
    }

    return (
        <View>
            <List 
                list={props.places}
                onItemClick={onPlaceNavigation}
            />
        </View>
    )
}

const mapStateToProps = state => {
    return {
        places: state.places.places
    }
}


export default connect(mapStateToProps, null)(FindPlaceScreen)