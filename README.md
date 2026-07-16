# War Room: WNBA Live

A live WNBA scoreboard — a grid of game cards showing away/home teams,
scores, game status (pregame / live / final), and the game clock for
games in progress. Data comes from the unofficial ESPN scoreboard endpoint:

```
https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/scoreboard
```

This is a learning project: the scaffold (folder structure, styled
component shells, fixture data, design tokens) was generated as
boilerplate. All fetching, state, and data transformation is written by
hand — look for `// TODO(krystal): you write this` markers in
`src/hooks/`, `src/services/api.js`, and `src/App.jsx`.

## Running it

```bash
npm install
npm run dev
```

`npm run dev` renders the component shells as-is — `App.jsx` currently
passes empty placeholder values, so the grid will be empty until the
data layer is wired up. Point components at `src/fixtures/games.js`
while building to see all three states (live / final / upcoming)
rendered at once.

## Project structure

```
src/
  components/   ScoreboardHeader, GameGrid, GameCard, StatusBadge, StateWrapper
  hooks/        useScoreboard.js — empty, fetch/state logic to be implemented here
  services/     api.js — ESPN scoreboard URL + a commented function signature
  styles/       design tokens + per-component CSS
  fixtures/     games.js — 3 fake events shaped like the ESPN response
                (one live, one final, one upcoming)
```

## Note on the data source

The ESPN scoreboard endpoint is **unofficial** — it isn't publicly
documented, requires no API key, and ESPN can change or remove it
without notice. Don't depend on it for anything beyond a personal/
learning project.
