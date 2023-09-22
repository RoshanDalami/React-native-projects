import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          {/* for more than one style */}
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          {/* for more than one style */}
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          {/* for more than one style */}
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          {/* for more than one style */}
          <Text>Red</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingHorizontal: 9,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#50DBB4',
  },
  cardThree: {
    backgroundColor: '#5DA3FA',
  },
});
