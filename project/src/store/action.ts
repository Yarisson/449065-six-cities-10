import {createAction} from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { AuthorizationStatus, AppRoute } from '../const';

export enum Action {
  LoadOffers = 'LOAD_OFFERS',
  LoadNearby = 'LOAD_NEARBY',
  ChangeCurrentCity = 'CHANGE_CURRENT_CITY',
  ChangeOffers = 'CHANGE_OFFERS',
  ChangeFilter = 'CHANGE_FILTER',
  SetDataLoadedStatus = 'SET_DATA_LOADED_STATUS',
  CurrentHotel = 'CURRENT_HOTEL',
  GetActiveOfferId = 'GET_ACTIVE_OFFER_ID',
  RequireAuthorization = 'REQUIRE_AUTHORIZATION',
  RedirectToRoute = 'REDIRECT_TO_ROUTE',
  GetCurrentOffer = 'GET_CURRENT_OFFER'
}

export const changeCurrentCity = createAction(Action.ChangeCurrentCity, (city: City) => ({
  payload: city,
}));
export const changeOffers = createAction(Action.ChangeOffers, (offers: Offer[]) => ({
  payload: offers,
}));
export const changeFilter = createAction(Action.ChangeFilter, (filter: string) => ({
  payload: filter,
}));
export const loadOffers = createAction(Action.LoadOffers, (offers: Offer[]) => ({
  payload: offers,
}));
export const setDataLoadedStatus = createAction(Action.SetDataLoadedStatus, (loaded: boolean) => ({
  payload: loaded,
}));
export const getActiveOfferId = createAction(Action.GetActiveOfferId, (activeOfferId: number) => ({
  payload: activeOfferId,
}));
export const requireAuthorization = createAction(Action.RequireAuthorization, (status: AuthorizationStatus) => ({
  payload: status,
}));
export const redirectToRoute = createAction(Action.RedirectToRoute, (route: AppRoute) => ({
  payload: route,
}));
export const getCurrentOffer = createAction(Action.GetCurrentOffer, (offer: Offer) => ({
  payload: offer,
}));
