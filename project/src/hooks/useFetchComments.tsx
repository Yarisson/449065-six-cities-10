import {useEffect, useState, useCallback} from 'react';
import {APIRoute} from '../const';
import { RequestStatus } from '../const';
import { api } from '../services/api';
import { ReviewType } from '../types/reviewType';

export const useFetchComments = (id: string | undefined) => {
  const [comments, setComments] = useState<ReviewType[] | undefined>();
  const [status, setStatus] = useState(RequestStatus.NotStarted);

  const fetch = useCallback(async () => {
    if (id) {
      setStatus(RequestStatus.Loading);
      const {data} = await api.get(`${APIRoute.Comments}/${id}`);
      if (data) {
        setComments(data);
        setStatus(RequestStatus.Success);
      } else {
        setStatus(RequestStatus.Error);
      }
    }
  }, [setComments, setStatus, id]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return [comments, status] as const;
};
