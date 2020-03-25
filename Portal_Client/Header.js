import React from 'react';
import { Header, Avatar } from 'react-native-elements';
import { StyleSheet } from 'react-native';

export default function Navigation() {
    return (
        <Header style={styles.fit}
            leftComponent={{ icon: 'chevron-left', color: '#fff', size: 30 }}
            rightComponent={<Avatar rounded source={require('./assets/2.jpg')} />}
            containerStyle={{
                backgroundColor: '#24272B', //'#141414',
                borderBottomWidth: 1,
                borderBottomColor: '#016FB9',
                height: 100,
                paddingRight: 20,
                paddingLeft: 15,
                paddingBottom: 10,
            }}
        />
    );
}
const styles = StyleSheet.create({
    fit: {
    },
    spacing: {
        paddingRight: 10,
    },
    custom: {
        backgroundColor: '#46494C',
    }
})