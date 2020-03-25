import React from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import tabs from './tab-data'
import { LinearGradient } from 'expo-linear-gradient';

export default class Tabs extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <LinearGradient
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    colors={['transparent', 'rgba(0,0,0,0.8)']}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: 50,
                    }}
                /> */}
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ height: 50 }}
                    data={tabs}
                    renderItem={({ item }) => <View style={styles.button}>
                        <Button title={item.key}
                            titleStyle={{ fontSize: 16 }}
                            buttonStyle={{ backgroundColor: 'transparent' }}
                            color='#ffffff'
                            onPress={() => Alert.alert('Button is Working')} />
                    </View>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40, //50
        paddingBottom: 0,
        backgroundColor: '#DB324D',
    },
    button: {
        marginRight: 20,
    }
})