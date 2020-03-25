import React from 'react';
import io from 'socket.io-client';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { KeyboardAvoidingView, StyleSheet, SafeAreaView, View, TextInput } from 'react-native';

export default class Client extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            messages: [],
        }
    }

    componentDidMount() {
        this.socket = io('http://192.168.1.82:1200');
    }

    submit() {
        this.socket.emit('message', this.state.message);
        console.log(this.state.message);
        this.setState({ message: '' });
    }

    send() {
        const time = new Date(Date.now()).toLocaleTimeString();
        const milliseconds = new Date(Date.now()).getTime();
        this.state.messages.push(this.state.message);

        fetch('http://192.168.1.82:1200/message', {
            method: 'POST',
            body: JSON.stringify({ message: this.state.message, time: time, timeSort: milliseconds }),
            headers: { 'Content-Type': 'application/json' }
        })

        this.setState({ message: '' });
        console.log(time);
        console.log(this.state.messages.length)
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <SafeAreaView style={styles.back}>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 40, paddingVertical: 10, }} >
                        <TextInput
                            style={styles.text}
                            onChangeText={message => {
                                this.setState({ message })
                            }}
                            value={this.state.message}
                            onSubmitEditing={() => this.submit()}
                            placeholderTextColor='#B0B0B0'
                            placeholder='Send a message...'
                            clearButtonMode='always'
                        />
                        <Button
                            icon={<Icon name="md-paper-plane" size={24} color="white" />}
                            type='clear'
                            onPress={() => this.send()}
                        />
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    text: {
        color: 'white',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 50,
        width: 320, //320
        paddingLeft: 10,
    },
    back: {
        backgroundColor: '#24272B',

    },
    widgets: {
        marginLeft: 20,
    },
    hide: {
        display: 'none'
    }
})