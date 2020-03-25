import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card, Avatar } from 'react-native-elements';

export default function Message(props) {
    return (
        <View style={styles.guest, props.guest === 'true' ? styles.guest : styles.user}>
            {/* <Avatar
                rounded source={{ uri: props.photo }}
                containerStyle={{ marginTop: 'auto' }}
            /> */}
            {props.guest === 'true' && (
                <Card
                    containerStyle={{
                        maxWidth: 320,
                        minHeight: 50,
                        backgroundColor: '#46494C',
                        borderRadius: 10,
                        borderColor: 'transparent', //'#212121',
                        marginLeft: 5,
                    }}
                >
                    <Text style={styles.text}>{props.message}</Text>
                </Card>
            )}

            {props.guest === 'false' && (
                <Card
                    containerStyle={{
                        maxWidth: 290,
                        minHeight: 50,
                        backgroundColor: '#016FB9',
                        borderRadius: 10,
                        borderColor: 'transparent', //'#212121',
                        marginRight: 5,
                    }}
                >
                    <Text style={styles.text}>{props.message}</Text>
                </Card>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
    },
    user: {
        flexDirection: 'row-reverse'   
    },
    guest: {
        flexDirection: 'row'
    },
})