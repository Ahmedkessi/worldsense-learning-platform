import { createSlice } from "@reduxjs/toolkit";
import { ACHIEVEMENTS } from "./achievementsConfig";


export const initialState = {
  loggedIn: false,

  profile: {
    avatar: "",
    username: "",
    password: "",
   },
  createdAt: null,

  progress: {
    level: 1,
    xp: 0,
    streak: 0,
    lastActiveDate: null,
  },

  stats: {
    quizzesPlayed: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    accuracy: 0,
    points: 0,
    countriesLearned: 0,
  },

   daily: {
      date: null,
      gamesPlayedToday: 0,
      rewardClaimed: false,
   },

   lessonQuizCompleted: 0,
   favouriteCountries: [],
   achievements: [],
   notifications: [],
};




const QuizSlice = createSlice({
   name: `user`,
   initialState,
   reducers: {

      loadUser(state, action) {
         return {
            ...action.payload,
            loggedIn: true,
         }
      },


      updateProfile: {
         prepare(avatar, password) {
            return {
               payload: {avatar, password}
            }
         },
         reducer(state, action) {
            state.profile.avatar = action.payload.avatar;
            state.profile.password = action.payload.password;
         }
      },

      reset(state) {
         return {...initialState, 
            profile: state.profile, 
            loggedIn: true, 
            createdAt: state.createdAt,
            favouriteCountries: state.favouriteCountries,
            lessonQuizCompleted: state.lessonQuizCompleted,
            lastActiveDate: state.progress.lastActiveDate,
         }
      },

      logout(state){
         state.loggedIn = false;
      },


      addFavouriteCountry(state, action){ 
         const newCountry = action.payload;
         state.favouriteCountries = [...state.favouriteCountries, newCountry ]
      },

      deleteFavCountry(state, action) {
         state.favouriteCountries = state.favouriteCountries.filter(c => c.id !== action.payload)
         state.lessonQuizCompleted = state.lessonQuizCompleted > 0 ? state.lessonQuizCompleted - 1 : 0;
      },

      addToLearning(state, action) {
         const fav = JSON.parse(JSON.stringify(state.favouriteCountries))
         const updatedFav = fav.map(c => c.id === action.payload ? { ...c, status: "readyToLearn" } : c );
         state.favouriteCountries = updatedFav;
      },

      addToLearned: {
         prepare(id, score, accuracy) {
            return {
               payload: {
                  id, score, accuracy
               }
            }
         },

         reducer(state, action) {
            const fav = JSON.parse(JSON.stringify(state.favouriteCountries))
            const updatedFav = fav.map(c => c.id === action.payload.id ? { ...c, status: "learned", accuracy: action.payload.accuracy, score: action.payload.score } : c );
            state.favouriteCountries = updatedFav;
            state.lessonQuizCompleted = state.lessonQuizCompleted + 1;
         }
      },


      quizCompleted: {
         prepare(xp, points, correct, wrong) {
            return {
               payload: {xp, points, correct, wrong}
            }
         },

         reducer(state, action) {
            //const total = action.payload.correct + action.payload.wrong;
            //console.log(total)


            const newCorrect = state?.stats?.correctAnswers + action.payload.correct;
            const newWrong = state?.stats?.wrongAnswers + action.payload.wrong;

            const newTotal = newCorrect + newWrong;
            const accuracy = Math.round((newCorrect / newTotal) * 100);
            const XP_PER_LEVEL = 100;

            if(state?.stats){
               state.stats.quizzesPlayed= state.stats.quizzesPlayed + 1;
               state.stats.correctAnswers= newCorrect;
               state.stats.wrongAnswers= newWrong;
               state.stats.accuracy= accuracy; 
               state.stats.points += action.payload.points;
            }
       //     state.stats.countriesLearned= state.stats.countriesLearned;
            if(state?.progress) state.progress.xp += action.payload.xp;

            const levelUp = state?.progress?.xp >= state?.progress?.level * XP_PER_LEVEL;
            levelUp && state.progress.level++



            const today = new Date().toISOString().split("T")[0];

            if(state?.progress){
               if (!state.progress.lastActiveDate) {
                  state.progress.streak = 1;
               }
            }
            else {
               const todayTs = new Date(today).getTime();
               const lastTs = new Date(state?.progress.lastActiveDate).getTime();
               const ONE_DAY = 24 * 60 * 60 * 1000;
               const diff = todayTs - lastTs;

               if (diff === ONE_DAY) {
                  state.progress.streak += 1;
               }
               else if (diff > ONE_DAY) {
                  state.progress.streak = 1;
               }
            }

            if(state?.progress) state.progress.lastActiveDate = today;


            const newAchievements = ACHIEVEMENTS.filter(a =>
               !state?.achievements.includes(a.id) &&
               a.condition(state)
            );


            newAchievements.forEach(a => {
               state.achievements.push(a.id);
               state.notifications.push({
                  type: "achievement",
                  message: `🎉 You unlocked ${a.title}!`,
                  read: false,
                  createdAt: Date.now(),
               });
            }); 



            if(!state?.daily) return
            if (state?.daily?.date !== today) {
               state.daily.date = today;
               state.daily.gamesPlayedToday = 0;
               state.daily.rewardClaimed = false;
            }
            if(state.daily.date === today) state.daily.gamesPlayedToday += 1;
            
            if(state?.daily.gamesPlayedToday >= 3 && !state.daily.rewardClaimed){
               state.progress.xp += 30;
               state.daily.rewardClaimed = true;

               state.notifications.push({
                  type: "daily",
                  message: "🔥 Daily Goal Complete! +30 XP",
                  createdAt: Date.now(),
                  read: false,
               });
            }            
         }
      },    

      learn(state, action) {
            const XP_PER_LEVEL = 100;
            const levelUp = state?.progress?.xp >= state?.progress?.level * XP_PER_LEVEL;
            
            levelUp && state.progress.level++
            state.progress.xp = state.progress.xp + action.payload;

            state.notifications.push({
                  type: "master country",
                  message: "🔥 You mastered new 5 countries. +30 XP",
                  createdAt: Date.now(),
                  read: false,
               });
      },

      readNotification(state, action) {
         return{
            ...state,
               notifications: action.payload,
         }
      }
   }
})




export const { signIn, logIn, updateProfile, reset, logout, 
               loadUser, quizCompleted, addFavouriteCountry, 
               learn, readNotification, deleteFavCountry, addToLearning,
               addToLearned } = QuizSlice.actions;
export default QuizSlice.reducer;




/*
1) SignIn
   {username, avatarImg, password}


2) LogIn
   {username, avatarImg, password}


3) EditProfile
   {username, avatarImg, password}


4)  4 place for fetching data
   {Category, Easy, Medium, Difficult}
   (dispatch(GenerateGame(category, Dificulity, xp)))

   
4.9) QuizCompleted
      dispatch(CompleteGame(xp, points, accuracy))

Stats Update
updateStats(stats, correct, wrong){}
const total = correct + wrong;
const newCorrect = stats.correctAnswers + correct;
const newWrong = stats.wrongAnswers + wrong;
const newTotal = newCorrect + newWrong;
{quizzesPlayed: stats.quizzesPlayed + 1,
correctAnswers: newCorrect,
wrongAnswers: newWrong,
accuracy: Math.round((newCorrect / newTotal) * 100),
countriesLearned: stats.countriesLearned,
}


XP&LEVEL UPDATE
state.xp += acc.xp
level = xp + 100 && +=1


UPDATE STREAK & LastActiveDate
if (today === lastActiveDate) return streak;

if (today === addOneDay(lastActiveDate)) {
  streak += 1;
} else {
  streak = 1;
}

lastActiveDate = new Date().toISOstring()
save date not time or timezone bug will happen



CHECK ACHIEVEMENTS
CREATE ACHIEVEMENT RULE (condition = true||false)
state.achievements = [id, id, id, id]
newAchievements = ACHIEVEMENTS => compares with condition and return the true arr


PUSH TO NOTIFICATION
newAchievements.forEach(a => state.achievements.push(a.id), notification.push({
type: "achievement",
          message: ` You unlocked ${a.title}!`,
          read: false,
          createdAt: Date.now(),

          }))






*/





/*
const t = [1,2,3,4,7,8,9,9,0,12,3,4,3,1,7,8,9,0,9,8,7,7,4,3,2,1,2,3,4,8,9,9]
undefined
t.length
32
const p = chunkArray(t, 10)
undefined
p
(4) [Array(10), Array(10), Array(10), Array(2)]0: (10) [1, 2, 3, 4, 7, 8, 9, 9, 0, 12]1: (10) [3, 4, 3, 1, 7, 8, 9, 0, 9, 8]2: (10) [7, 7, 4, 3, 2, 1, 2, 3, 4, 8]3: (2) [9, 9]length: 4[[Prototype]]: Array(0)
p.at(p.findLastIndex(arr => arr.length === 10)+1)
(2) [9, 9]









const initialState = {
   loggIn : false,
   avatar: ``,
   username: ``,
   password,
   favouriteCountries: [],
   level,
   xp,
   games,
   stats: [],
   notifications: [],
   tasks: [
      completeTodayTasks=[],

      streak=[]

//based on the favourite countries, 
//in the learning page user see his favourite countries and he learn the in that page when he
//compete each country he tick as readed, and then will show up a button (test your knowledge)
//when he click the quiz starts and each question has its country name, every answer corrected 
//will take and  push into correctedAns=Array, while this corrected ans contains id, countryName..etc,
// ans wrongAns like that in wrongArray, so after match we make correctedAns and map them with favCountries,
//and in eachFavCountry will return as new with learned: true, and wrongAns as well (learned: false)
//and then in this learn10newcountries array we take by mapping from favCountries learned = true;
//we push first 10 countries in 1 array  and next 10 array
      learn_10_NewCountries = [],


//Calculate automatic if(level= level + five) reachedLevel = {level : level+=five, id: generate, acheivement_XP: level*10}
      ReachLevel = [
        level_4 = {
           id: 1,
           acheivement_XP: 100,
        }
      ]
   ],
   acheivements: [
     
   ],
}
  */