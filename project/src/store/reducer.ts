import { createReducer } from '@reduxjs/toolkit';
import { getOffers, changeCurrentCity, changeOffers } from './action';
import { Offer } from '../types/offer';
import { City } from '../types/city';
import offers from '../mocks/offers';
import city from '../mocks/city';

type InitialState = {
  city: City,
  offers: Offer[],
};

const initialState: InitialState = {
  city: city,
  offers: [],
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
    });
});

export {reducer};
