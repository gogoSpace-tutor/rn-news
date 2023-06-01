import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

const SearchBar = (props) => {
  return (
    <View>
      <TextInput
        placeholder="Search"
        style={styles.input}
        value={props.searchText}
        onChangeText={(text) => props.setSearchText(text)}
        onSubmitEditing={props.onSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    backgroundColor: '#ffc300',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    color: '#000',
    borderWidth: 1,
  },
});
