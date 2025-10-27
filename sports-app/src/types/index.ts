export interface User {
    id: string;
    name: string;
    email: string;
    profilePicture?: string;
}

export interface Activity {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    date: string;
}

export interface Workout {
    id: string;
    title: string;
    duration: number; // in minutes
    caloriesBurned: number;
    date: string;
}