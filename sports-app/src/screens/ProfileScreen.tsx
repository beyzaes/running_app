import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ProfileScreen = () => {
    const handleLogout = () => {
        // Logic for logging out the user
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Profile</Text>
            {/* Display user information here */}
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default ProfileScreen;