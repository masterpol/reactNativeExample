import React, { useState, useEffect } from 'react'
import { Navigation } from 'react-native-navigation'
import { connect } from 'react-redux';
import { View } from 'react-native'

import Places from '../../components/Places/Places'

import { addPlace } from '../../store/actions'

function SharePlaceScreen (props) {
    const [disable, setDisable] = useState(true)
        , [place, setPlace] = useState("")
    
    useEffect(() => {
        if(place.length > 0) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }, [place])

    const onAddPlaceHandler = () => {
        props.onAddPlace(place)
        setPlace("")
    }

    const onChangeTextHandler = (value) => {
        setPlace(value)
    }

    return (
        <View>
            <Places 
                place={place}
                onClick={onAddPlaceHandler}
                onChange={onChangeTextHandler}
                disabled={disable}
            />
        </View>
    )
}

const mapDispachToProps = dispatch => {
    return {
        onAddPlace: placeName => dispatch(addPlace(placeName))
    } 
}

export default connect(null, mapDispachToProps)(SharePlaceScreen)