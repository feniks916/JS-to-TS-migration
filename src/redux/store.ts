import {createStore, combineReducers} from 'redux';


import mainReducer from './reducers/mainReducer';


const rootReducer = combineReducers({
    main: mainReducer,
});

const store = createStore(
    rootReducer
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;