import { createReducer } from '@reduxjs/toolkit';
import { getOffers, changeCurrentCity, changeOffers, sortLowPrice, sortHighPrice, sortRate } from './action';
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
    })
    .addCase(sortLowPrice, (state) => {
      state.offers = state.offers.sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        return 0;
      });
    })
    .addCase(sortHighPrice, (state) => {
      state.offers = state.offers.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
    })
    .addCase(sortRate, (state) => {
      state.offers = state.offers.sort((a, b) => {
        if (parseInt(a.stars, 10) > parseInt(b.stars, 10)) {
          return 1;
        }
        if (parseInt(a.stars, 10) < parseInt(b.stars, 10)) {
          return -1;
        }
        return 0;
      });
    });
});

export {reducer};
