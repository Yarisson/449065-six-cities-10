import { createReducer } from '@reduxjs/toolkit';
import { changeCurrentCity, changeOffers, changeFilter, loadOffers, setDataLoadedStatus, getActiveOfferId, requireAuthorization } from './action';
import { Offer } from '../types/offer';
import { City } from '../types/city';
import { AuthorizationStatus } from '../const';
import city from '../mocks/city';

type InitialState = {
  city: City,
  offers: Offer[],
  currentFilter: string,
  loaded: boolean,
  activeOffer: Offer | undefined,
  authorizationStatus: AuthorizationStatus,
};

const initialState: InitialState = {
  city: city,
  offers: [],
  currentFilter: 'Popular',
  loaded: false,
  activeOffer: undefined,
  authorizationStatus: AuthorizationStatus.Unknown
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentCity, (state, action) => {
      state.city = action.payload;
    })
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
    .addCase(getActiveOfferId, (state, action) => {
      const currentOffer = state.offers.find((offer) => offer.id === action.payload);
      state.activeOffer = currentOffer;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
