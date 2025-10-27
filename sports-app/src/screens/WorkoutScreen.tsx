import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WorkoutScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Workout Tracker</Text>
            <Text style={styles.description}>Track your workouts and progress here.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        color: '#666',
    },
});

export default WorkoutScreen;