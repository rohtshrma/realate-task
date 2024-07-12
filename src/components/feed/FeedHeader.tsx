import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../utils/colors'
import { FONT_CONSTANTS } from '../../utils/fonts'

const FeedHeader = () => {
    return (
        <View style={{ paddingHorizontal: 80 }}>
            <Text style={styles.label}>If you stood on Mars in normal clothes, your blood would start to boil and you would die.</Text>
            <Text style={styles.like}>Liked your prompt</Text>
            <View style={styles.bubble}>
                <Text style={[styles.label, { color: COLORS.black }]}>Whoa that's so cool!</Text>
                <View style={styles.triangle} />
            </View>
        </View>
    )
}

export default FeedHeader

const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        fontFamily: FONT_CONSTANTS.primary_bold_font,
        color: COLORS.white,
    },
    like: {
        fontSize: 15,
        fontFamily: FONT_CONSTANTS.primary_bold_font,
        color: COLORS.colonial_white,
        marginTop: 50
    },
    bubble: {
        padding: 10,
        backgroundColor: COLORS.colonial_white,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '80%',
        height: 60,
        borderRadius: 12
    },
    triangle: {
        position: 'absolute',
        left: 10,
        bottom: -10,
        width: 0,
        height: 0,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 10,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: COLORS.colonial_white,
        transform: [{ rotate: '180deg' }]
    },
})