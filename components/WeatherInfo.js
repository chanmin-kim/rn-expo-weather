// 라이브러리
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

// export한 파일들
import {colors} from '../utils/index'

const {PRIMARY_COLOR, SECONDARY_COLOR} = colors;

export default function WeatherInfo({currentWeather}) {

    const {main:{temp}, weather:[details], name} = currentWeather;
    const {icon, main, description} = details;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

    return (
        <View style={styles.weatherInfo}>
            <Text style={styles.weatherCity}>{name}</Text>
            <Image style={styles.weatherIcon} source={{uri:iconUrl}} />
            <Text style={styles.textPrimary}>{temp} ℃</Text>
            <Text style={styles.weatherDescription}>{description}</Text>
            <Text style={styles.textSecondary}>{main}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherInfo:{
        alignItems : 'center'
    },
    weatherCity:{
        fontSize: 30
    },
    weatherIcon : {
        width: 200,
        height: 200
    },
    weatherDescription : {
        textTransform : 'capitalize',
        fontSize: 30
    },
    textPrimary:{
        fontSize: 30,
        color: PRIMARY_COLOR
    },
    textSecondary:{
        fontSize : 30,
        color : SECONDARY_COLOR,
        fontWeight : '500',
        marginTop : 10
    }
})