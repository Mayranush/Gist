import { combineEpics } from 'redux-observable';
import { fetchWhiskiesEpic } from './homeEpic';

export const rootEpic = combineEpics(fetchWhiskiesEpic);