// Fake payloads shaped like the ESPN WNBA scoreboard API response
// (https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/scoreboard),
// trimmed to the fields this app cares about. One event per game state.
// TODO(krystal): you write the code that transforms these (or the real
// fetch response) into whatever shape you pass to GameGrid.

export const scoreboardFixture = {
  events: [
    // LIVE
    {
      id: '401736101',
      date: '2026-07-16T23:00Z',
      status: {
        clock: 292.0,
        displayClock: '4:52',
        period: 3,
        type: {
          id: '2',
          name: 'STATUS_IN_PROGRESS',
          state: 'in',
          completed: false,
          description: 'In Progress',
          detail: 'Q3 - 4:52',
          shortDetail: 'Q3 4:52',
        },
      },
      competitions: [
        {
          id: '401736101',
          competitors: [
            {
              id: '20',
              homeAway: 'home',
              score: '68',
              team: {
                id: '20',
                displayName: 'New York Liberty',
                abbreviation: 'NY',
                logo: 'https://a.espncdn.com/i/teamlogos/wnba/500/ny.png',
              },
            },
            {
              id: '19',
              homeAway: 'away',
              score: '61',
              team: {
                id: '19',
                displayName: 'Las Vegas Aces',
                abbreviation: 'LV',
                logo: 'https://a.espncdn.com/i/teamlogos/wnba/500/lv.png',
              },
            },
          ],
        },
      ],
    },
    // FINAL
    {
      id: '401736102',
      date: '2026-07-16T20:00Z',
      status: {
        clock: 0.0,
        displayClock: '0:00',
        period: 4,
        type: {
          id: '3',
          name: 'STATUS_FINAL',
          state: 'post',
          completed: true,
          description: 'Final',
          detail: 'Final',
          shortDetail: 'Final',
        },
      },
      competitions: [
        {
          id: '401736102',
          competitors: [
            {
              id: '18',
              homeAway: 'home',
              score: '84',
              team: {
                id: '18',
                displayName: 'Seattle Storm',
                abbreviation: 'SEA',
                logo: 'https://a.espncdn.com/i/teamlogos/wnba/500/sea.png',
              },
            },
            {
              id: '17',
              homeAway: 'away',
              score: '79',
              team: {
                id: '17',
                displayName: 'Minnesota Lynx',
                abbreviation: 'MIN',
                logo: 'https://a.espncdn.com/i/teamlogos/wnba/500/min.png',
              },
            },
          ],
        },
      ],
    },
    // UPCOMING
    {
      id: '401736103',
      date: '2026-07-17T02:00Z',
      status: {
        clock: 0.0,
        displayClock: '0:00',
        period: 0,
        type: {
          id: '1',
          name: 'STATUS_SCHEDULED',
          state: 'pre',
          completed: false,
          description: 'Scheduled',
          detail: '10:00 PM ET',
          shortDetail: '10:00 PM ET',
        },
      },
      competitions: [
        {
          id: '401736103',
          competitors: [
            {
              id: '16',
              homeAway: 'home',
              score: '0',
              team: {
                id: '16',
                displayName: 'Phoenix Mercury',
                abbreviation: 'PHX',
                logo: 'https://a.espncdn.com/i/teamlogos/wnba/500/phx.png',
              },
            },
            {
              id: '15',
              homeAway: 'away',
              score: '0',
              team: {
                id: '15',
                displayName: 'Chicago Sky',
                abbreviation: 'CHI',
                logo: 'https://a.espncdn.com/i/teamlogos/wnba/500/chi.png',
              },
            },
          ],
        },
      ],
    },
  ],
}
