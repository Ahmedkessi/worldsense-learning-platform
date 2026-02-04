import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LocationProvider from './hooks/LocationContext.jsx'
import FavouritesProvider from './hooks/FavoritesContext.jsx'

import { Provider } from 'react-redux'
import store from './store/store.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <LocationProvider>
        <FavouritesProvider>
         <App />
        </FavouritesProvider>
      </LocationProvider>
    </Provider>
  </StrictMode>
)