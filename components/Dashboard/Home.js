import React from 'react';
import { AsyncStorage, Button, View } from 'react-native';
import { withNavigation } from 'react-navigation'

class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title="Show me more of the app" onPress={this._showMoreApp} />
                <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
            </View>
        );
    }

    _showMoreApp = () => {
        this.props.navigation.navigate('Other');
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }
}

export default withNavigation(Home)