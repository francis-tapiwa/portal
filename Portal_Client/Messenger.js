import React from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { KeyboardAvoidingView, StyleSheet, SafeAreaView, View, TextInput } from 'react-native';

export default function Messenger() {

    const [value, onChangeText] = React.useState();
    const [clicked, showWidget] = React.useState(false)

    function show() {
        showWidget(true);
    }

    function hide() {
        showWidget(false);
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <SafeAreaView style={styles.back}>
                <View style={{ flexDirection: 'row', paddingHorizontal: 40, paddingVertical: 10, }} >
                    <TextInput
                        style={styles.text}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        placeholderTextColor='#B0B0B0'
                        placeholder='Send a message...'
                        clearButtonMode='always'
                    />
                    {clicked && (<Button
                        buttonStyle={{ paddingLeft: 14, }}
                        icon={<Icon name="md-close" size={24} color="white" />}
                        type='clear'
                        onPress={(hide)}
                    />)}
                    {!clicked && (<Button
                        buttonStyle={{ paddingLeft: 14, }}
                        icon={<Icon name="md-add" size={24} color="white" />}
                        type='clear'
                        onPress={(show)}
                    />)}
                    <Button
                        icon={<Icon name="md-paper-plane" size={24} color="white" />}
                        type='clear'
                    />
                </View>
                <View style={[styles.widgets, !clicked ? styles.hide : '']}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: 'transparent', padding: 0 }}>
                        <Button
                            buttonStyle={{ paddingRight: 40, }}
                            icon={<Icon name='logo-twitter' size={24} color="white" />}
                            type='clear'
                        />
                        <Button
                            buttonStyle={{ paddingRight: 40, }}
                            icon={<Icon name='logo-slack' size={24} color="white" />}
                            type='clear'
                        />
                        <Button
                            icon={<Icon name='logo-whatsapp' size={24} color="white" />}
                            type='clear'
                        />
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
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
        width: 280, //320
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