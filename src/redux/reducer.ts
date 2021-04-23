import { combineReducers } from 'redux';
import { testReducer } from './testReducer';

const rootReducer = combineReducers({
  testReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
