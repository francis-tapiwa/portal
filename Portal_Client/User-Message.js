import React from 'react';
import { Text, StyleSheet, ScrollView, View, Image, KeyboardAvoidingView } from 'react-native';
import { Card, Avatar } from 'react-native-elements';

export default function Message(props) {
    return (
        <View style={{ flexDirection: 'row-reverse' }}>
            <Avatar
                rounded source={{ uri: props.photo }}
                containerStyle={{ marginTop: 'auto' }}
            />
            <Card
                containerStyle={{
                    maxWidth: 290,
                    minHeight: 50,
                    backgroundColor: '#DB324D',
                    borderRadius: 10,
                    borderColor: 'transparent', //'#212121',
                    marginLeft: 5,
                }}
            >
                <Text style={styles.text}>{props.message}</Text>
            </Card>
        </View>    
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
    }
})