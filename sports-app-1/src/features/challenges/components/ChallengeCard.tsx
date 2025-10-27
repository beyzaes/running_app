import React from 'react';
import { Challenge } from '../types';

interface ChallengeCardProps {
  challenge: Challenge;
  onJoin: (id: string) => void;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, onJoin }) => {
  return (
    <div className="challenge-card">
      <h2>{challenge.title}</h2>
      <p>{challenge.description}</p>
      <button onClick={() => onJoin(challenge.id)}>Join Challenge</button>
    </div>
  );
};

export default ChallengeCard;