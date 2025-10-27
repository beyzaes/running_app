export interface User {
    id: string;
    name: string;
    email: string;
    age?: number;
}

export interface Sport {
    id: string;
    name: string;
    category: string;
}

export interface Challenge {
    id: string;
    title: string;
    description: string;
    difficultyLevel: 'easy' | 'medium' | 'hard';
    sport: Sport;
}