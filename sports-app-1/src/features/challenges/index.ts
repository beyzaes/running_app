class Challenges {
    private challenges: Challenge[];

    constructor() {
        this.challenges = [];
    }

    addChallenge(challenge: Challenge) {
        this.challenges.push(challenge);
    }

    listChallenges() {
        return this.challenges;
    }
}

export default Challenges;