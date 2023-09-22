import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>me</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>to</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>scroll</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>more...</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>😁</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 12,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: 'gray',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.7,
    shadowRadius: 2,
  },
});
