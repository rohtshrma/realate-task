import { ImageBackground, ImageSourcePropType, StyleSheet, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'

interface IAppTheme {
    source: ImageSourcePropType
    children: ReactNode;
    style?: ViewStyle
}

const AppTheme: React.FC<IAppTheme> = (props) => {
    return (
        <ImageBackground source={props.source} style={[styles.main, props.style]}>
            {props.children}
        </ImageBackground>
    )
}

export default AppTheme

const styles = StyleSheet.create({
    main: {
        flex: 1,
        height: '100%',
        width: '100%'
    }
})