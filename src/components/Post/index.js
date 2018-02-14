import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    elevation: 2,
    padding: 20,
    marginVertical: 10,
  },

  header: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  body: {
    paddingTop: 10,
  },

  title: {
    color: '#333333',
    fontSize: 18,
    fontWeight: 'bold',
  },

  author: {
    color: '#999999',
  },

  text: {
    color: '#666666'
  },

});

class Post extends Component {
  static defaultProps = {
    title: 'Post Title',
    author: 'Author',
    text: 'Text',
  }

  static propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    text: PropTypes.string,
  }

  render(){
    const { title, author, text } = this.props;
    return (
      <View style={ styles.container }>
        <View style={styles.header}>
          <Text style={styles.title}>{ title }</Text>
          <Text style={styles.author}>{ author }</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.text}>{ text }</Text>
        </View>
      </View>
    );
  }
}

export default Post;
