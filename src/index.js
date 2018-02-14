import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';

import Post from './components/Post';

import 'config/ReactotronConfig';
import 'config/DevToolsConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EE7777',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    width: '100%',
    height: 60,
    elevation: 4,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#333',
  },

  posts: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default class App extends Component {

  state = {
    posts: [
      {
        id: Math.random(),
        title: 'Aprendendo React Native',
        author: 'Igor Zago Massaro',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus, urna ac aliquam placerat, turpis tortor posuere nisl, nec pulvinar nulla elit sed erat. Aliquam ligula leo, interdum a pulvinar id, sagittis sit amet ipsum.',
      },
      {
        id: Math.random(),
        title: 'Aprendendo React Native',
        author: 'Igor Zago Massaro',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus, urna ac aliquam placerat, turpis tortor posuere nisl, nec pulvinar nulla elit sed erat. Aliquam ligula leo, interdum a pulvinar id, sagittis sit amet ipsum.',
      }, {
        id: Math.random(),
        title: 'Aprendendo React Native',
        author: 'Igor Zago Massaro',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus, urna ac aliquam placerat, turpis tortor posuere nisl, nec pulvinar nulla elit sed erat. Aliquam ligula leo, interdum a pulvinar id, sagittis sit amet ipsum.',
      }, {
        id: Math.random(),
        title: 'Aprendendo React Native',
        author: 'Igor Zago Massaro',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus, urna ac aliquam placerat, turpis tortor posuere nisl, nec pulvinar nulla elit sed erat. Aliquam ligula leo, interdum a pulvinar id, sagittis sit amet ipsum.',
      }, {
        id: Math.random(),
        title: 'Aprendendo React Native',
        author: 'Igor Zago Massaro',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus, urna ac aliquam placerat, turpis tortor posuere nisl, nec pulvinar nulla elit sed erat. Aliquam ligula leo, interdum a pulvinar id, sagittis sit amet ipsum.',
      },
    ],
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>GoNative App</Text>
        </View>
        <ScrollView style={styles.posts}>
          {this.state.posts.map(post => <Post {...post} key={post.id} />)}
        </ScrollView>
      </View>
    );
  }
}
