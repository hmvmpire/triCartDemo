import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Using localStorage for persistence
import cartReducer from './cart/cartReducer';

// Persist config to define how and where we store the state
const persistConfig = {
  key: 'root',  // The key under which we store the state in localStorage
  storage,      // Default is localStorage
};

// Combine reducers to be used in the persisted reducer
const rootReducer = combineReducers({
  cart: cartReducer,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
});

// Create persistor for rehydrating the state
export const persistor = persistStore(store);

// Function to save state (for manual persistence control)
export const save = (state: any) => {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch (error) {
    console.error('Error saving state to localStorage:', error);
  }
};

// Function to load state (for manual loading)
export const load = () => {
  if (typeof window === 'undefined') return undefined; // Ensure it's only run on the client side

  let state;

  try {
    state = localStorage.getItem('state');
    if (typeof state === 'string') {
      state = JSON.parse(state);
    }
  } catch (error) {
    console.error('Error loading state from localStorage:', error);
  }

  return state || undefined; // Return the loaded state or undefined
};
