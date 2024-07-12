import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../utils/colors'
import { IMAGES } from '../../utils/assets'
import { FONT_CONSTANTS } from '../../utils/fonts'

const FeedButton = () => {
  return (
    <View style={styles.btn}>
      <Image source={IMAGES.forward} />
      <Text style={styles.label}>Swipe to match...</Text>
      <View />
    </View>
  )
}

export default FeedButton

const styles = StyleSheet.create({
  btn: {
    width: '90%',
    height: 58,
    backgroundColor: 'transparent',
    borderColor: COLORS.colonial_white,
    borderWidth: 2,
    borderRadius: 50,
    marginTop: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5
  },
  label: {
    fontSize: 17,
    fontFamily: FONT_CONSTANTS.primary_bold_font,
    color: COLORS.colonial_white,
    opacity: 0.5
  }
})