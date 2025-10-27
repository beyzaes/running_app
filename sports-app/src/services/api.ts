import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

// Function to fetch activities
export const fetchActivities = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/activities`);
        return response.data;
    } catch (error) {
        console.error('Error fetching activities:', error);
        throw error;
    }
};

// Function to fetch workouts
export const fetchWorkouts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/workouts`);
        return response.data;
    } catch (error) {
        console.error('Error fetching workouts:', error);
        throw error;
    }
};

// Function to fetch user profile
export const fetchUserProfile = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw error;
    }
};