import { configureStore } from "@reduxjs/toolkit";

import QuizReducer from "../features/QuizSlice";
import { loadUserFromStorage, saveUserToStorage } from "../features/storage";

const currentUser = localStorage.getItem("WorldWise_currentUser");
const user = loadUserFromStorage(currentUser);
const prelaodUser = currentUser && user ? user : null;


const store = configureStore({
    reducer: {
       user: QuizReducer
    },
    preloadedState: {
      user: prelaodUser,
    }
})



store.subscribe(() => {
  saveUserToStorage(store.getState().user);  
});




export default store;