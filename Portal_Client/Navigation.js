import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

export default function Navigation() {
    return (
        <View style={styles.container}>
            <Button
                icon={<Icon name='home' size={22} color="white" style={{fontWeight: '100'}} />}
                type='clear'
            />
            <Button
                icon={<Icon name='bell' size={22} color="white" />}
                type='clear'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 42,
        minWidth: 400,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#24272B',
        borderWidth: 1,
        borderTopColor: '#46494C',
        borderBottomColor: 'transparent',
    },
})