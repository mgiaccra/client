import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Block, Text } from '../../units'
import * as theme from '../../theme'
import * as mocks from '../../mocks'

class Home extends Component {
    static navigationOptions = {
        header: null
    }

    renderHeader() {
        return (
            <Block flex={0.5} column style={{ paddingHorizontal: 15 }}>
                <Block flex={false} row style={{ paddingVertical: 15, marginTop: 15 }}>
                    <Block center>
                        <Text h3 semibold light style={{ marginRight: -(25 + 5) }}>Ticket Requests</Text>
                    </Block>
                    {/* <Image style={styles.avatar} source={} /> */}
                </Block>
                <Block card shadow color='light' style={styles.headerChart}>
                    <Block row space='between' style={{ paddingHorizontal: 30 }}>
                        <Block flex={false} row center>
                            <Text h1>291</Text>
                            <Text caption bold alternative style={{ paddingHorizontal: 10 }}>-12%</Text>
                        </Block>
                        <Block flex={false} row center>
                            <Text caption bold danger style={{ paddingHorizontal: 10 }}>+49%</Text>
                            <Text h1>481</Text>
                        </Block>
                    </Block>
                    <Block flex={0.5} row space='between' style={{ paddingHorizontal: 30 }}>
                        <Text lightText>Resolved</Text>
                        <Text lightText>Requests</Text>
                    </Block>
                    <Block>
                        <Text>Chart</Text>
                    </Block>
                </Block>
            </Block>
        )
    }

    renderRequests() {
        return (
            <Block flex={0.8} column color='light' style={styles.requests}>
                <Block flex={false} row space='between' style={styles.requestHeader}>
                    <Text lightText >Recent Updates</Text>
                    <TouchableOpacity activeOpacity={0.8} >
                        <Text semibold color='accent'>View All</Text>
                    </TouchableOpacity>
                </Block>
                <ScrollView contentContainerStyle={{ flex: 1 }}>

                </ScrollView>
            </Block>
        )
    }

    render() {
        return (
            <SafeAreaView color='primary' style={styles.safe}>
                {this.renderHeader()}
                {this.renderRequests()}
            </SafeAreaView>
        )
    }
}

Home.defaultProps = {
    user: {},
    request: {},
    chart: {}
}

export default Home

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: theme.colors.primary
    },
    avatar: {},
    headerChart: {
        paddingTop: 30,
        paddingBottom: 30,
        zIndex: 1
    },
    requests: {
        marginTop: -55,
        paddingTop: 55 + 20,
        paddingHorizontal: 15,
        zIndex: -1
    },
    requestsHeader: {
        paddingHorizontal: 20,
        paddingBottom: 15,
    },
})
