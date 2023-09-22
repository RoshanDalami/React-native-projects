import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      id: 1,
      name: 'Roshan Dalami',
    },
    {
      id: 2,
      name: 'Roshan Sunar',
    },
    {
      id: 3,
      name: 'Madhav Kabirath',
    },
    {
      id: 4,
      name: 'Aakash Shrestha',
    },
    {
      id: 5,
      name: 'Jaybir Grugung',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts?.map(item => {
          return (
            <View key={item.id} style={styles.userCard}>
              <Text style={styles.userName}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {marginHorizontal: 10, fontSize: 30, fontWeight: 'bold'},
  container: {marginHorizontal: 16, marginVertical: 8},
  userCard: {padding: 12, borderBottomWidth: 1, borderBottomColor: 'gray'},
  userName: {fontSize: 16},
});
