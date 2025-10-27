import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ActivityCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ title, description, imageUrl }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#fff',
    padding: 16,
    margin: 8,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default ActivityCard;