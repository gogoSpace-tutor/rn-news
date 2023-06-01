import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Error = (props) => {
  const newsImage = {
    uri: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  };
  return (
    <View>
      <Text style={styles.errorMessage}>{props.text}</Text>
      <View style={styles.imageContainer}>
        <Image source={newsImage} style={styles.image} />
      </View>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: '95%',
    aspectRatio: 16 / 9,
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  errorMessage: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
