export const scoreboardUrl =
  'https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/scoreboard'

export async function fetchScoreboard() {
  const response = await fetch(scoreboardUrl);
  const data = await response.json();
  return data.events
}


