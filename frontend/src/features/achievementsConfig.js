export const ACHIEVEMENTS = [
  // STREAK
  {
    id: "streak_3",
    title: "Getting Started",
    condition: (state) => state?.progress.streak >= 3,
    reward: { xp: 70 }
  },

  {
    id: "streak_7",
    title: "Consistent Learner",
    condition: (state) => state?.progress.streak >= 7,
    reward: { xp: 100 }
  },

  {
    id: "streak_14",
    title: "Unstoppable",
    condition: (state) => state?.progress.streak >= 14,
    reward: { avatar: "fire_avatar" },
  },





  // LEVEL
  {
    id: "level_5",
    title: "Level 5 Reached",
    condition: (state) => state?.progress.level >= 5,
    reward: { xp: 80 }
  },

  {
    id: "level_10",
    title: "Level 10 Reached",
    condition: (state) => state?.progress.level >= 10,
    reward: { xp: 100 }
  },

  {
    id: "level_15",
    title: "Level 15 Reached",
    condition: (state) => state?.progress.level >= 15,
    reward: { xp: 140 }
  },

  {
    id: "level_20",
    title: "Level 20 Reached",
    condition: (state) => state?.progress.level >= 20,
    reward: { xp: 180 }
  },

  {
    id: "level_25",
    title: "Level 25 Reached",
    condition: (state) => state?.progress.level >= 25,
    reward: { xp: 200 }
  },

  {
    id: "level_30",
    title: "Level 30 Reached",
    condition: (state) => state?.progress.level >= 30,
    reward: { xp: 240 }
  },

  {
    id: "level_35",
    title: "Level 35 Reached",
    condition: (state) => state?.progress.level >= 35,
    reward: { xp: 280 }
  },

  {
    id: "level_40",
    title: "Level 40 Reached",
    condition: (state) => state?.progress.level >= 40,
    reward: { xp: 300 }
  },

  {
    id: "level_45",
    title: "Level 45 Reached",
    condition: (state) => state?.progress.level >= 45,
    reward: { xp: 340 }
  },

  {
    id: "level_50",
    title: "Level 50 Reached",
    condition: (state) => state?.progress.level >= 50,
    reward: { xp: 380 }
  },





  // GAMES PLAYED
  {
    id: "games_1",
    title: "1 Game Played",
    condition: (state) => state?.stats.quizzesPlayed >= 1,
    reward: { xp: 10 }
  },

  {
    id: "games_10",
    title: "10 Games Played",
    condition: (state) => state?.stats.quizzesPlayed >= 10,
    reward: { xp: 40 }
  },

  {
    id: "games_20",
    title: "20 Games Played",
    condition: (state) => state?.stats.quizzesPlayed >= 20,
    reward: { xp: 80 }
  },

  {
    id: "games_30",
    title: "30 Games Played",
    condition: (state) => state?.stats.quizzesPlayed >= 30,
    reward: { xp: 100 }
  },

  {
    id: "games_40",
    title: "40 Games Played",
    condition: (state) => state?.stats.quizzesPlayed >= 40,
    reward: { xp: 120 }
  },





  // COUNTRIES LEARNED
  {
    id: "countries_10",
    title: "Explorer",
    condition: (state) => state?.stats.countriesLearned >= 10,
    reward: { xp: 200 }
  },

  {
    id: "countries_20",
    title: "Learned 20 Countries",
    condition: (state) => state?.stats.countriesLearned >= 20,
    reward: { xp: 400 }
  },

  {
    id: "countries_30",
    title: "Open World",
    condition: (state) => state?.stats.countriesLearned >= 30,
    reward: { xp: 800 }
  },

  {
    id: "countries_40",
    title: "Explorer",
    condition: (state) => state?.stats.countriesLearned >= 40,
    reward: { xp: 1000 }
  },




  // DAILY QUIZ
  {
    id: "daily_3_game",
    title: "Daily Killer",
    condition: (state) => state?.progress.dailyQuiz === 3,
    reward: { xp: 70 }
  },
  



  // DAILY LOGIN XP
  {
    id: "daily_login",
    title: "Daily Visitor",
    condition: (state) => state?.progress.loggedInToday === true,
    reward: { xp: 10 }
  },
];
