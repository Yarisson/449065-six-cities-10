import {useEffect, useState, useCallback} from 'react';
import {APIRoute} from '../const';
import { RequestStatus } from '../const';
import { api } from '../services/api';
import { Offer } from '../types/offer';

export const useFetchHotel = (id: string | undefined) => {
  const [hotel, setHotel] = useState<Offer>();
  const [status, setStatus] = useState(RequestStatus.NotStarted);

  const fetch = useCallback(async () => {
    if (id) {
      setStatus(RequestStatus.Loading);

      const {data} = await api.get(`${APIRoute.Hotel}/${id}`);
      if (data) {
        setHotel(data);
        setStatus(RequestStatus.Success);
      } else {
        setStatus(RequestStatus.Error);
      }
    }
  }, [setHotel, setStatus, id]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return [hotel, status] as const;
};
