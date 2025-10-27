import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ActivityCard from '../components/ActivityCard';
import Header from '../components/Header';
import BottomTab from '../components/BottomTab';

const HomeScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView>
                <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 16 }}>Featured Activities</Text>
                {/* Example Activity Cards */}
                <ActivityCard title="Running" description="Join our running community!" image="running_image_url" />
                <ActivityCard title="Yoga" description="Find your inner peace." image="yoga_image_url" />
                <ActivityCard title="Cycling" description="Explore the outdoors on two wheels." image="cycling_image_url" />
            </ScrollView>
            <BottomTab />
        </View>
    );
};

export default HomeScreen;