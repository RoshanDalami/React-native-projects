import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/uploader-d6343.appspot.com/o/IMG_2346.JPG1692776235487?alt=media&token=e8fafed7-bb0b-4095-9f16-ef99a1e83568',
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Ramgram</Text>
          <Text style={styles.cardLable}>Gumba Nawalparasi</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            nihil exercitationem natus cupiditate quidem. Nisi!
          </Text>
          <Text style={styles.cardFooter}>2 hours away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 8},
  headingText: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  card: {backgroundColor: 'gray', borderRadius: 18},
  cardElevated: {elevation: 8},
  cardImage: {
    height: 180,
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 18,
  },
  cardBody: {margin: 12},
  cardTitle: {fontSize: 30, fontWeight: 'bold', marginBottom: 8},
  cardLable: {opacity: 0.7, fontSize: 18, marginBottom: 8},
  cardDescription: {opacity: 0.7},
  cardFooter: {fontSize: 16, marginBottom: 10, marginTop: 8},
});
