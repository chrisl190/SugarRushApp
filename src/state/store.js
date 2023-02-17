import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useDispatch, useSelector } from 'react-redux';
import * as slice from './slice';

const combinedReducer = combineReducers({
    [slice.api.reducerPath]: slice.api.reducer,
    userSignup: slice.userSignup.reducer,
});

const rootReducer = (state, action) => {
    return combinedReducer(state, action);
};

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([slice.api.middleware]),
});

setupListeners(store.dispatch);

export default store;
export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;