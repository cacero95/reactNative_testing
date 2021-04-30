import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

/**
 * ScrollView generate a component list but need its own key
 * FlatIcon generate a component list with a key for each item and render when scroll down the screen
 */

const App = () => {
  const [ persons, setPersons ] = useState([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);
  return (
    <View style={styles.container}>
      <View style = { styles.header }>
        <Text style = { styles.txt }>Header</Text>
      </View>
      <FlatList
        numColumns = { 2 }
        data = { persons }
        renderItem = {
          ({ item }) => (
            <View 
              style = { styles.listItem } 
              key = { item }
            >
              <TouchableOpacity
                onPress = { 
                  () => setPersons( persons.filter( element => element !== item) )
              }
              >
                <Text style = { styles.listItemTxt }>
                    Name: Person{ item }
                </Text>
                <Text style = { styles.listItemTxt }>
                  Index: { item }
                </Text>
              </TouchableOpacity>
            </View>
          )
        }
      />
      <StatusBar style="auto" />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: '#f1f1f1',
    height: '100%',
  },
  header: {
    backgroundColor: '#2d2d2d',
    color: '#fff',
    display: 'flex',
    alignItems: 'center'
  },
  txt: {
    color: '#fff',
    paddingVertical: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    color: '#fff',
    flex: 1
  },
  listItemTxt: {
    color: '#fff',
    backgroundColor: 'green',
    height: 30,
    padding: 5,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: "#2d2d2d",
    width: 200,
    paddingVertical: 10,
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20
  }
});
