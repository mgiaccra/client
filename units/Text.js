import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import * as theme from '../theme'

export default class Typography extends Component {
    render() {

        const {
            h1,
            h2,
            h3,
            body,
            title,
            caption,
            label,
            small,
            size,
            // Styling
            bold,
            semibold,
            lightText,
            center,
            right,
            middle,
            // Colors
            color,
            accent,
            accent2,
            light,
            primary,
            secondary,
            dark,
            danger,
            info,
            warning,
            success,
            style,
            children,
            ...props
        } = this.props

        const textStyles = [
            styles.text, // Rewrite predefined styles
            h1 && styles.h1,
            h2 && styles.h2,
            h3 && styles.h3,
            body && styles.body,
            title && styles.title,
            caption && styles.caption,
            label && styles.label,
            small && styles.small,
            size && { fontSize: size },
            bold && styles.bold,
            semibold && styles.semibold,
            light && styles.light,
            center && styles.center,
            middle && styles.middle,
            right && styles.right,
            color && styles[color],
            color && !styles[color] && { color },
            // Color shortcuts
            accent && styles.accent,
            accent2 && styles.accent2,
            light && styles.light,
            primary && styles.primar,
            secondary && styles.secondary,
            dark && styles.dark,
            danger && styles.danger,
            info && styles.info,
            warning && styles.warning,
            success && styles.success,
            style,
        ]

        return (
            <Text style={textStyles} {...props}>
                {children}
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    // Default Style
    text: {
        fontFamily: 'Montserrat-Regular',
        fontSize: theme.sizes.font,
        color: theme.colors.dark
    },
    // Variations:
    bold: {
        fontFamily: 'Montserrat-Bold',
    },
    semibold: {
        fontWeight: '500',
        fontFamily: 'Montserrat-SemiBold',
    },
    lightText: {
        fontWeight: '200',
        fontFamily: 'Montserrat-Light',
    },
    // Position
    center: { textAlign: 'center' },
    middle: {
        justifyContent: 'center'
    },
    right: { textAlign: 'right' },
    // Colors
    accent: { color: theme.colors.accent },
    accent2: { color: theme.colors.accent2 },
    light: { color: theme.colors.light },
    primary: { color: theme.colors.primary },
    secondary: { color: theme.colors.secondary },
    dark: { color: theme.colors.dark },
    danger: { color: theme.colors.danger },
    info: { color: theme.colors.info },
    warning: { color: theme.colors.warning },
    success: { color: theme.colors.success },
    // Fonts
    h1: theme.fonts.h1,
    h2: theme.fonts.h2,
    h3: theme.fonts.h3,
    body: theme.fonts.body,
    title: theme.fonts.title,
    caption: theme.fonts.caption,
    small: theme.fonts.small,
})