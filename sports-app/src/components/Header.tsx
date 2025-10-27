import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sports App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Header;