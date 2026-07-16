export const scoreboardUrl =
  'https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/scoreboard'

async function fetchScoreboard() {
  const response = await fetch(scoreboardUrl);
  console.log(response.status, response.ok);
  const data = await response.json();
  return data.events
}


