import { combineReducers } from 'redux';
import { loginReducer } from './login/loginReducer';
import { qualifyTeachersReducer } from './qualify/qualify';

export const rootReducer = combineReducers({
    credentials: loginReducer,
    recovercredentials: loginReducer,
    listteachers: qualifyTeachersReducer
})