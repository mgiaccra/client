import React, { Component } from 'react'
import {
    SafeAreaView,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native'
import { withNavigation } from 'react-navigation'
import { Icon, ThemeProvider, Badge } from 'react-native-elements'
import { Block, Text } from '../../units'
import { height, width } from '../../constants'
import * as theme from '../../theme'
import * as mocks from '../../mocks'

const custom = {
    // Custom theme for react-native-elements Badge component
    colors: {
        primary: theme.colors.info,
        warning: theme.colors.warning,
        error: theme.colors.danger
    }
}

class AllTickets extends Component {
    static navigationOptions = {
        headerShown: false
    }

    goBack = () => {
        this.props.navigation.goBack()
    }

    selectPriorityColor(status) {
        switch (status) {
            case 'low':
                return 'primary'
            case 'medium':
                return 'warning'
            case 'high':
                return 'error'
            default:
                return 'primary'
        }
    }

    renderNavigationBar() {
        return (
            <Block flex={0.05} row style={styles.backBtn} space='between'>
                <TouchableOpacity activeOpacity={0.8} onPress={this.goBack} >
                    <Icon name='long-arrow-left' type='font-awesome' size={18} color={theme.colors.secondary} />
                </TouchableOpacity>
            </Block>
        )
    }

    renderAllTickets() {
        const { user } = this.props
        return (
            <Block flex={1} column color='light' style={styles.profile}>
                <Block flex={false}>
                    <Text h2 bold>All Tickets</Text>
                </Block>
                <Block flex={1}>
                    {this.renderRequests()}
                </Block>
            </Block>
        )
    }

    renderRequest(request) {
        return (
            <Block row card shadow color='#FFFFFD' style={styles.request}>
                <Block flex={0.2} styles={styles.requestAvatarWrapper}>
                    <Image style={styles.requestAvatar} source={{ uri: request.user.avatar }} />
                </Block>
                <Block flex={0.8} column middle>
                    <Block row space='between'>
                        <Text h3 style={{ paddingTop: 0, paddingBottom: 8 }}>
                            {request.title}
                        </Text>
                        <ThemeProvider theme={custom}>
                            <Badge
                                status={this.selectPriorityColor(request.priority)}
                                badgeStyle={{ width: 10, height: 10, borderRadius: 10 / 2 }}
                            />
                        </ThemeProvider>
                    </Block>
                    <Text caption lightText>
                        {request.description}
                    </Text>
                </Block>
            </Block>
        )
    }

    renderRequests() {
        const { requests } = this.props
        return (
            <Block flex={1} column color='light' style={styles.requests, { paddingVertical: 20 }}>
                <ScrollView>
                    {requests.map((request) => (
                        <TouchableOpacity activeOpacity={0.8} key={request.id}>
                            {this.renderRequest(request)}
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </Block>
        )
    }

    render() {
        return (
            <SafeAreaView color='primary' style={[styles.safe, styles.container]}>
                <KeyboardAvoidingView behavior='height' style={styles.container}>
                    {this.renderNavigationBar()}
                    {this.renderAllTickets()}
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height
    },
    safe: {
        flex: 1,
        backgroundColor: theme.colors.light,
        padding: theme.sizes.padding,
		margin: 15,

    },
    backBtn: {
        marginVertical: 25
    },
    request: {
        padding: 20,
        marginBottom: 15
    },
    requestAvatar: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2
        // marginRight: 5
    },
    requestAvatarWrapper: {
        marginRight: 0,
        overflow: 'hidden',
        height: 90
    },
})

AllTickets.defaultProps = {
    user: mocks.user,
    requests: mocks.requests,
    chart: mocks.chart
}

export default withNavigation(AllTickets)
