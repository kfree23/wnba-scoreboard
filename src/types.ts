interface TeamInGame {
    name: string;
    abbreviation: string;
    score: string;
    logo: string;
}

interface Game {
    id: string;
    awayTeam: TeamInGame;
    homeTeam: TeamInGame;
    status: string;
    clock: string;
}

export default Game;