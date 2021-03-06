import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import * as theme from '../theme'

export class Block extends Component {
    render() {

        const {
            flex,
            row,
            column,
            center,
            middle,
            left,
            right,
            card,
            shadow,
            color,
            space,
            style,
            children,
            ...props
        } = this.props

        const blockStyles = [
            styles.block, // Rewrite predefined styles
            flex && { flex },
            flex === false && { flex: 0 }, // Rest / Disable flex
            row && styles.row,
            column && styles.column,
            center && styles.center,
            middle && styles.middle,
            left && styles.left,
            right && styles.right,
            card && styles.card,
            shadow && styles.shadow,
            space && { justifyContent: `space-${space}` },
            color && styles[color], // Predefined style colors for background
            color && !styles[color] && { backgroundColor: color }, // Custom backgroundolor
            style,
        ]

        return (
            <View style={blockStyles}{...props}>
                {this.props.children}
            </View>
        )
    }
}

export default Block

const styles = StyleSheet.create({
    block: {
        flex: 1
    },
    row: {
        flexDirection: 'row'
    },
    column: {
        flexDirection: 'column'
    },
    center: {
        alignItems: 'center'
    },
    middle: {
        justifyContent: 'center'
    },
    left: {
        justifyContent: 'flex-start'
    },
    right: {
        justifyContent: 'flex-end'
    },
    card: {
        borderRadius: theme.sizes.border
    },
    shadow: {
        shadowColor: theme.colors.dark,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1
    },
    accent: { backgroundColor: theme.colors.accent },
    accent2: { backgroundColor: theme.colors.accent2 },
    light: { backgroundColor: theme.colors.light },
    primary: { backgroundColor: theme.colors.primary },
    secondary: { backgroundColor: theme.colors.secondary },
    dark: { backgroundColor: theme.colors.dark },
    danger: { backgroundColor: theme.colors.danger },
    info: { backgroundColor: theme.colors.info },
    warning: { backgroundColor: theme.colors.warning },
    success: { backgroundColor: theme.colors.success },
})
