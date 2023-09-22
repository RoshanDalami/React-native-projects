import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}> What's new in Javascript 21 </Text>
        </View>
        <Image
          source={{
            uri: 'https://d1le3ohiuslpz1.cloudfront.net/skillcrush/wp-content/uploads/2021/08/JS-Projects.png.webp',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyTitle}>
            21 Easy JavaScript Projects For Beginners{' '}
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => {
              openWebsite(
                'https://skillcrush.com/blog/projects-you-can-do-with-javascript/',
              );
            }}>
            <Text style={styles.linkTitle}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              openWebsite('https://www.instagram.com/ro_shan_s__/');
            }}>
            <View style={styles.followContainer}>
              <Text style={styles.followTitle}>Follow Me</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 12,
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  card: {
    marginHorizontal: 10,
    borderRadius: 12,
    backgroundColor: '#D80032',
    padding: 10,
  },
  elevatedCard: {elevation: 8},
  headingContainer: {marginVertical: 8},
  headerText: {fontSize: 20, fontWeight: 'bold', color: '#fff'},
  cardImage: {height: 300, borderRadius: 12, marginBottom: 8},
  bodyContainer: {marginVertical: 10},
  bodyTitle: {color: '#fff', fontSize: 20, fontWeight: 'bold'},
  linkTitle: {color: '#fff', fontWeight: 'bold', marginVertical: 5},
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    marginHorizontal: 8,
  },
  followContainer: {backgroundColor: '#3085C3', borderRadius: 8, elevation: 8},
  followTitle: {
    color: '#fff',
    width: 100,
    textAlign: 'center',
    paddingVertical: 8,
  },
});
