import {useEffect, useState, useCallback} from 'react';
import {APIRoute} from '../const';
import { RequestStatus } from '../const';
import { api } from '../services/api';
import { Offer } from '../types/offer';

export const useFetchNearby = (id: string | undefined) => {
  const [nearby, setNearby] = useState<Offer[] | undefined>();
  const [status, setStatus] = useState(RequestStatus.NotStarted);

  const fetch = useCallback(async () => {
    if (id) {
      setStatus(RequestStatus.Loading);
      const {data} = await api.get(`${APIRoute.Hotel}/${id}/nearby`);
      if (data) {
        setNearby(data);
        setStatus(RequestStatus.Success);
      } else {
        setStatus(RequestStatus.Error);
      }
    }
  }, [setNearby, setStatus, id]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return [nearby, status] as const;
};
