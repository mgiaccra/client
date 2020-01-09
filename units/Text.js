import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import * as theme from '../theme'

export class Block extends Component {
    render() {

        const { style, children, ...props } = this.props
        const blockStyles = [
            styles.block, // Rewrite predefined styles
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
    }
})
