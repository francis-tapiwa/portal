import React from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Message from './Message';
import Header from './Header';
import Navigation from './Navigation';
import Messenger from './Messenger';
import Client from './Client';
import Tabs from './Tabs';
import chats from './chats';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        {/* <Tabs /> */}
        <SafeAreaView style={styles.container2}>
          <FlatList
            inverted
            showsVerticalScrollIndicator={false}
            style={{padding: 15}}
            data={chats}
            renderItem={({ item }) => <Message message={item.message} photo={item.photo} guest={item.guest} />}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
        <Client />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1D2023', //'#24272B', 
  },
  container2: {
    flex: 1,
  },
})
