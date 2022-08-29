import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {Offer} from '../types/offer';
import {loadOffers, setDataLoadedStatus, requireAuthorization, redirectToRoute, getCurrentOffer} from './action';
import { APIRoute } from '../const';
import { AuthData } from '../types/authData.js';
import { UserData } from '../types/userData.js';
import { saveToken, dropToken } from '../services/token';
import { AuthorizationStatus, AppRoute } from '../const';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadOffers(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const fetchActiveRoom = createAsyncThunk<Offer, string | undefined, {
  state: State,
  extra: AxiosInstance
}>(
  'offers/fetchActiveHotel',
  async (hotelId, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer>(`https://10.react.pages.academy/six-cities/hotels/${hotelId}`);
    dispatch(getCurrentOffer(data));
    return data;
  },
);

export const fetchNearRooms = createAsyncThunk<Offer[], string | undefined, {
  state: State,
  extra: AxiosInstance
}>(
  'offers/fetchNearHotels',
  async (hotelId, {extra: api}) => {
    const {data} = await api.get<Offer[]>(`${APIRoute.Hotel}/${hotelId}/nearby`);
    return data;
  },
);
