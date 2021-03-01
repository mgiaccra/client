import React, { Component } from 'react'
import {
    StyleSheet,
    KeyboardAvoidingView,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Picker,
    TextInput,
    FlatList, ImageBackground
} from 'react-native'
import { withNavigation } from 'react-navigation'
import { ThemeProvider, Badge, Icon } from 'react-native-elements'
import { Block, Text } from '../../units'
import * as theme from '../../theme'
import * as mocks from '../../mocks'
import { width, height, priority } from '../../constants'


const custom = {
    // Custom theme for react-native-elements Badge component
    colors: {
        info: theme.colors.info,
        warning: theme.colors.warning,
        error: theme.colors.danger,
        primary: theme.colors.peimary
    }
}
class AddTicket extends Component {
    static navigationOptions = {
        headerShown: false
    }

    constructor() {
        super()

        this.state = {
            name: ' A name',
            title: 'Select a title',
            description: '',
            charactersRemaining: 100,
            priority: 1
        }
    }

    goBack = () => {
        this.props.navigation.goBack()
    }

    onChangeTitlePicker = (title) => {
        this.setState({ title })
        console.log(`title changes to: ${this.state.title}`)
    }

    onChangeDescriptionInput = (description) => {
        this.setState({ description })
        this.calculateCharactersRemaining(description)
    }

    calculateCharactersRemaining = (description) => {
        const charactersRemaining = 100 - description.length
        this.setState({ charactersRemaining })
    }

    onAddTicketClick = () => {
        const ticketRequest = {
            title: this.state.title,
            description: this.state.description,
            priority: this.state.priority
        }

        console.log('Send network request to save ticket request')
        console.log(ticketRequest)
    }

    selectBadgeColor = (charactersRemaining) => {
        switch (true) {
            case (charactersRemaining > 50):
                return 'primary'
            case (charactersRemaining <= 50 && charactersRemaining > 10):
                return 'warning'
            case (charactersRemaining <= 10):
                return 'error'
            default:
                return 'primary'
        }
    }

    onViewableItemsChanged = ({ viewableItems, changed }) => {
        // console.log("Visible items are", viewableItems);
        this.setState({ priority: viewableItems[0].item.id })
        // console.log("Changed in this iteration", changed);
    }


    renderNavigationBar() {
        return (
            <Block flex={0.15} row style={styles.backBtn} space='between'>
                <TouchableOpacity activeOpacity={0.8} onPress={this.goBack} >
                    <Icon name='long-arrow-left' type='font-awesome' size={18} color={theme.colors.secondary} />
                </TouchableOpacity>
            </Block>
        )
    }

    renderAvatar() {
        return <Image style={styles.userAvatar} source={{ uri: mocks.user.avatar }} />

    }

    renderRequestTitleItem(title) {
        return <Picker.Item label={title.title} value={title.id} />
    }

    renderSaveBtn() {
        if (this.state.description.length < 20) {
            return (
                <TouchableOpacity style={styles.saveBtnInactive} disabled>
                    <Text color='light' center h3 semibold>Save</Text>
                </TouchableOpacity>
            )
        }

        return (
            <TouchableOpacity style={styles.saveBtn} onPress={this.onAddTicketClick}>
                <Text color='light' center h3 semibold> Save</Text>
            </TouchableOpacity>
        )
    }


    renderAddTicket() {
        const { user } = this.props
        return (
            <Block flex={0.85} column color='light' style={styles.profile}>
                <Block row flex={false} space='between'>
                    <Text h2 bold>Add Ticket</Text>
                    <Image style={styles.userAvatar} source={{ uri: mocks.user.avatar }} />
                </Block>
                <Block column flex={1} style={{ paddingTop: 20 }}>
                    <Block >
                        <Text h3 semibold style={{ marginBottom: -10, }}>Title</Text>
                        <Picker
                            selectedValue={this.state.title}
                            style={{ fontFamily: 'MontserratRegular' }}
                            // itemStyle={styles.pickerItem}
                            onValueChange={this.onChangeTitlePicker}>
                            {mocks.requestTitles.map(title => this.renderRequestTitleItem(title))}
                        </Picker>

                        <Text h3 semibold style={{ marginBottom: 5, paddingTop: 25 }}>Description</Text>
                        <TextInput
                            textAlignVertical='top'
                            maxLength={280}
                            style={styles.description}
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={this.onChangeDescriptionInput}
                            value={this.state.description} />
                        <Block row space='between' style={{ paddingVertical: 5 }}>
                            <Text lightText color='accent' >100 character limit</Text>
                            <ThemeProvider theme={custom}>
                                <Badge
                                    value={<Text color='white' semibold>{'  '}{this.state.charactersRemaining}{'  '}</Text>}
                                    status={this.selectBadgeColor(this.state.charactersRemaining)}
                                    containerStyle={{ paddingHorizontal: 5 }}
                                />
                            </ThemeProvider>
                        </Block>
                    </Block>
                </Block>
                <Block flex={0.75} column>
                    <Text h3 semibold style={{ paddingBottom: 10 }}>Swipe left or right to choose priority</Text>
                    <FlatList
                        onViewableItemsChanged={this.onViewableItemsChanged}
                        viewabilityConfig={{
                            itemVisiblePercentThreshold: 50
                        }}
                        horizontal
                        pagingEnabled
                        scrollEnabled
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={16}
                        snapToAlignment='center'
                        style={{ overflow: 'visible', height: 280 }}
                        data={priority}
                        keyExtractor={(item, index) => `${item.id}`}
                        renderItem={({ item }) => this.renderPriority(item)}
                    />
                </Block>
                <Block flex={0.15}>
                    {this.renderSaveBtn()}
                </Block>
            </Block>
        )
    }

    renderPriority = item => {
        return (
            <Block flex={false} column>
                <ImageBackground
                    style={[styles.flex, styles.destination]}
                    imageStyle={{ borderRadius: 12 }}
                    source={{ uri: item.image }}
                >
                </ImageBackground>
                <Text center semibold color='accent' style={{ paddingTop: 10 }}>{item.priority}</Text>
            </Block>

        )
    }

    render() {
        return (
            <SafeAreaView color='primary' style={[styles.safe, styles.container]}>
                {/* <KeyboardAvoidingView behavior='height' style={styles.container}> */}
                {this.renderNavigationBar()}
                {this.renderAddTicket()}
                {/* </KeyboardAvoidingView> */}
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
    userAvatar: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2
        // marginRight: 5
    },
    profile: {
        marginTop: -75
    },
    profileInput: {
        height: 30,
        fontFamily: 'MontserratRegular'
    },
    saveBtn: {
        backgroundColor: theme.colors.primary,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    saveBtnInactive: {
        backgroundColor: `${theme.colors.primary}40`,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    saveBtnWrapper: {
        alignContent: 'flex-end'
    },
    title: {
        height: 50,
        borderColor: theme.colors.secondary,
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontFamily: 'MontserratRegular',

    },
    description: {
        // height: 120,
        borderColor: theme.colors.secondary,
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontFamily: 'MontserratRegular',
    },
    pickerItem: {
        fontFamily: 'MontserratRegular',
    },
    destination: {
        width: width - (36 * 2),
        height: 20,
        marginHorizontal: 16,
        paddingHorizontal: 36,
        paddingVertical: 24,
        borderRadius: 12,
    },
    flex: {
        // flex: 0.1
    },
})

AddTicket.defaultProps = {
    user: mocks.user,
    requestTitles: mocks.requestTitles
}


export default withNavigation(AddTicket)
