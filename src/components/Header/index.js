import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import{ Feather} from '@expo/vector-icons'

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 60;

export default function Header(){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>Sujeito Prog</Text>

                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Feather name="user" size={27} color="#FFF"/>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ff4500',
        paddingTop: StatusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddEnd: 16,
        paddingBottom: 44,
    }
})

