import {createAction} from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';

export enum Action {
  ChangeCurrentCity = 'CHANGE_CURRENT_CITY',
  ChangeOffers = 'CHANGE_OFFERS',
}

export const getOffers = createAction('offers');
export const changeCurrentCity = createAction(Action.ChangeCurrentCity, (city: City) => ({
  payload: city,
}));
export const changeOffers = createAction(Action.ChangeOffers, (offers: Offer[]) => ({
  payload: offers,
}));
