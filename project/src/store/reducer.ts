import { createReducer } from '@reduxjs/toolkit';
import { getOffers, changeCurrentCity, changeOffers, changeFilter, loadOffers, setDataLoadedStatus, loadNearby } from './action';
import { Offer } from '../types/offer';
import { City } from '../types/city';
import offers from '../mocks/offers';
import city from '../mocks/city';

type InitialState = {
  city: City,
  offers: Offer[],
  currentFilter: string,
  loaded: boolean,
  nearby: Offer[],
};

const initialState: InitialState = {
  city: city,
  offers: [],
  currentFilter: 'Popular',
  loaded: false,
  nearby: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentCity, (state, action) => {
      state.city = action.payload;
    })
    // .addCase(getOffers, (state) => {
    //   state.offers = offers;
    // })
    .addCase(changeOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeFilter, (state, action) => {
      state.currentFilter = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.loaded = action.payload;
    })
    .addCase(loadNearby, (state, action) => {
      state.nearby = action.payload;
    })
});

export {reducer};
