import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ActivityScreen = ({ route }) => {
    const { activity } = route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: activity.image }} style={styles.image} />
            <Text style={styles.title}>{activity.title}</Text>
            <Text style={styles.description}>{activity.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    description: {
        fontSize: 16,
        color: '#666',
    },
});

export default ActivityScreen;