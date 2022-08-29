import {AxiosInstance} from 'axios';
import {useEffect, useState, useCallback} from 'react';
import {AppRoute} from '../const';
import { RequestStatus } from '../const';
import {createAPI} from '../services/api';

export const useFetchHotel = (id: string | undefined) => {
  const [hotel, setHotel] = useState();
  const [status, setStatus] = useState(RequestStatus.NotStarted);

  const fetch = useCallback(async (api: AxiosInstance) => {
    if (id) {
      setStatus(RequestStatus.Loading);

      const {data} = await api.get(`${AppRoute.Room}/${id}`);
      if (data) {
        setHotel(data);
        setStatus(RequestStatus.Success);
      } else {
        setStatus(RequestStatus.Error);
      }
    }
  }, [setHotel, setStatus, id]);

  useEffect(() => {
    fetch(createAPI);
  }, [fetch]);

  return [hotel, status] as const;
};
