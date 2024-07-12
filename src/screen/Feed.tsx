import { Alert, StyleSheet, View } from 'react-native'
import React from 'react'
import AppTheme from '../components/AppTheme'
import { IMAGES } from '../utils/assets'
import FeedHeader from '../components/feed/FeedHeader'
import FeedItem from '../components/feed/FeedItem'
import FeedButton from '../components/feed/FeedButton'

const Feed = () => {
    return (
        <AppTheme source={IMAGES.app_bg}>
            <View style={styles.main}>
                <FeedHeader />
                <FeedItem onPress={() => Alert.alert('To be implemented')} />
                <FeedButton />
            </View>
        </AppTheme>
    )
}

export default Feed

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: 100
    },
})