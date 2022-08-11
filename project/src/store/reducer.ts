import { createReducer } from '@reduxjs/toolkit';
import { getOffers, changeCurrentCity, changeOffers, changeFilter } from './action';
import { Offer } from '../types/offer';
import { City } from '../types/city';
import offers from '../mocks/offers';
import city from '../mocks/city';

type InitialState = {
  city: City,
  offers: Offer[],
  currentFilter: string,
};

const initialState: InitialState = {
  city: city,
  offers: [],
  currentFilter: 'Popular',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state) => {
      state.offers = offers;
    })
    .addCase(changeOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeFilter, (state, action) => {
      state.currentFilter = action.payload;
    });
});

export {reducer};
