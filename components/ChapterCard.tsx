import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ chapter, description }: { chapter: string; description: string }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.chapterText} numberOfLines={1}>{chapter}</Text>
      <Text style={styles.descriptionText} numberOfLines={1}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#333333', // Dark background for the card
    padding: 20,
    marginVertical: 5,
    borderRadius: 8,
  },
  chapterText: {
    color: '#E0E0E0', // Light gray color for the chapter text
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionText: {
    color: '#B0B0B0', // Lighter gray color for the description
    fontSize: 14,
    marginTop: 4,
  },
});

export default Card;