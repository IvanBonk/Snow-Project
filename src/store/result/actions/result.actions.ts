import { FETCH_PETS_REQUEST, FETCH_PETS_FAILTURE, FETCH_PETS_SUCCESS } from '../types/result.types';
import { createAsyncAction } from 'typesafe-actions';
import { Pet } from '../../../pages/result/result.interfaces';

export const fetchPetsAsync = createAsyncAction(FETCH_PETS_REQUEST, FETCH_PETS_SUCCESS, FETCH_PETS_FAILTURE)<
  void,
  Pet[],
  string
>();