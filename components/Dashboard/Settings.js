import React from 'react'
import { AsyncStorage, Button, View } from 'react-native'
import { withNavigation } from 'react-navigation'

class Settings extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
                <StatusBar barStyle="default" />
            </View>
        );
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}

export default withNavigation(Settings)