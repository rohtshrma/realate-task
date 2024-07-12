import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../utils/colors';
import { FONT_CONSTANTS } from '../../utils/fonts';
import { IMAGES } from '../../utils/assets';

interface IFeedItem {
    onPress: () => void;
}

const FeedItem: React.FC<IFeedItem> = (props) => {

    const { width } = useWindowDimensions();

    return (
        <View style={[styles.main, { width: width - 40, height: width }]}>
            <View style={styles.nameWrap}>
                <Text style={styles.name}>Kendall</Text>
                <Pressable style={{ width: 50, height: '100%', alignItems: 'flex-end', justifyContent: 'center' }} onPress={props.onPress}>
                    {Array(3).fill(null).map((_, index) => <View style={styles.dot} />)}
                </Pressable>
            </View>
            <View style={{ width: width - 40, height: width - 50, overflow: 'hidden', borderRadius: 12, }}>
                <Image resizeMode='cover' style={{ width: '100%', height: '100%' }} source={IMAGES.dummy_user} />
            </View>
        </View>
    )
}

export default FeedItem

const styles = StyleSheet.create({
    main: {
        alignSelf: 'center',
        backgroundColor: COLORS.dark_gray,
        borderRadius: 12,
        marginBottom: 10,
        marginTop: 70
    },
    nameWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: 50
    },
    name: {
        fontFamily: FONT_CONSTANTS.primary_bold_font,
        color: COLORS.white,
        fontSize: 22,
    },
    dot: {
        width: 5,
        height: 5,
        backgroundColor: COLORS.white,
        borderRadius: 3,
        marginVertical: 2
    },
})