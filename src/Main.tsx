import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Main(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.appBg}>
      <View style={styles.headerArea}>
        <Text style={styles.headerTxt}>My first React UI!</Text>
        <Text style={styles.subHeading}>subheading</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Card Title</Text>
        <View style={styles.separator} />
        <Text style={styles.cardText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          voluptate quaerat voluptas!
        </Text>
      </View>
    </SafeAreaView>
  );
}

// In react native, main axis defaults to vertical and cross axis defaults to horizontal
// I assume this is because of the vertical phone layout
// Every view is by default a flexbox

const styles = StyleSheet.create({
  headerTxt: {
    fontSize: 30,
    fontWeight: '600',
    color: '#33372C',
  },
  subHeading: {
    fontSize: 24,
    fontWeight: '400',
    color: 'grey',
  },
  headerArea: {
    alignItems: 'center',
    margin: 20,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
  },
  appBg: {
    backgroundColor: '#E9EFEC',
    height: '100%',
  },
  card: {
    width: 250,
    height: 250,
    alignItems: 'center',
    backgroundColor: 'grey',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    elevation: 10,
    gap: 10,
  },
  cardTitle: {
    fontSize: 25,
    fontWeight: '600',
  },
  separator: {
    height: 2,
    width: '100%',
    backgroundColor: 'black',
  },
  cardText: {
    fontSize: 20,
    fontWeight: '300',
  },
});
