import {createAction} from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';

export enum Action {
  ChangeCurrentCity = 'CHANGE_CURRENT_CITY',
  ChangeOffers = 'CHANGE_OFFERS',
  // SortByLowPrice = 'SORT_BY_LOW_PRICE',
  // SortByHighPrice = 'SORT_BY_HIGH_PRICE',
  // SortByRate = 'SORT_BY_RATE',
}

export const getOffers = createAction('offers');
export const changeCurrentCity = createAction(Action.ChangeCurrentCity, (city: City) => ({
  payload: city,
}));
export const changeOffers = createAction(Action.ChangeOffers, (offers: Offer[]) => ({
  payload: offers,
}));
export const sortLowPrice = createAction('sortLowPrice');
export const sortHighPrice = createAction('sortHighPrice');
export const sortRate = createAction('sortRate');
