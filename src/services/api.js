export const scoreboardUrl =
  'https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/scoreboard'

export async function fetchScoreboard() {
  const response = await fetch(scoreboardUrl);
  if (!response.ok) {
  throw new Error(`Request failed: ${response.status}`);
}
  const data = await response.json();
  return data.events
}


