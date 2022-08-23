import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {Offer} from '../types/offer';
import {loadOffers, loadNearby, currentHotel, setDataLoadedStatus} from './action';
import { APIRoute } from '../const';

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

export const fetchNearbyAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchNearby',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Nearby);
    dispatch(loadNearby(data));
  },
);

export const fetchCurrentHotelAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchCurrentHotel',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer>(APIRoute.Hotel);
    dispatch(currentHotel(data));
  },
);
