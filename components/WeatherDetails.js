import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {colors} from '../utils/index'
import {FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons'

const {PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR, HUMIDITY_COLOR, WINDY_COLOR, PRESSURE_COLOR} = colors;

export default function WeatherDetails({currentWeather, unitsSystem}) {

    const {
        main: {feels_like, humidity, pressure},
        wind : {speed},
    } = currentWeather

    const windSpeed = unitsSystem === 'metric' ? `${Math.round(speed)} m/s` : `${Math.round(speed)} miles/h`

    return (
        <View style={styles.weatherDetails}>
            <View style={styles.weatherDetailsRow}>
                <View style={{...styles.weatherDetiailsBox, borderRightWidth:1, borderRightColor:BORDER_COLOR}}>
                    <View style={styles.weatherDetailsRow}>
                        <FontAwesome5 name="temperature-low" size={25} color={PRIMARY_COLOR} />
                        <View style={styles.weatherDetiailsItems}>
                            <Text>체감온도</Text>
                            <Text style={styles.textSecondary}>{feels_like} ℃</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.weatherDetiailsBox}>
                    <View style={styles.weatherDetailsRow}>
                        <MaterialCommunityIcons name="water" size={30} color={HUMIDITY_COLOR} />
                        <View style={styles.weatherDetiailsItems}>
                            <Text>습도</Text>
                            <Text style={styles.textSecondary}>{humidity} %</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{...styles.weatherDetailsRow, borderTopWidth:1, borderTopColor:BORDER_COLOR}}>
                <View style={{...styles.weatherDetiailsBox, borderRightWidth:1, borderRightColor:BORDER_COLOR}}>
                    <View style={styles.weatherDetailsRow}>
                        <MaterialCommunityIcons name="weather-windy" size={30} color={WINDY_COLOR} />
                        <View style={styles.weatherDetiailsItems}>
                            <Text>풍속</Text>
                            <Text style={styles.textSecondary}>{windSpeed}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.weatherDetiailsBox}>
                    <View style={styles.weatherDetailsRow}>
                        <MaterialCommunityIcons name="speedometer" size={30} color={PRESSURE_COLOR} />
                        <View style={styles.weatherDetiailsItems}>
                            <Text>기압</Text>
                            <Text style={styles.textSecondary}>{pressure} hPa</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherDetails:{
        marginTop: 'auto',
        margin: 15,
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        borderRadius: 10
    },
    weatherDetailsRow:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    weatherDetiailsBox:{
        flex: 1,
        padding: 20
    },
    weatherDetiailsItems:{
        alignItems:'flex-end',
        justifyContent:'flex-end'
    },
    textSecondary:{
        fontSize: 15,
        color: SECONDARY_COLOR,
        fontWeight:'700',
        margin: 7
    }
})
