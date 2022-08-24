import Place from '../place/place';
import { Offer } from '../../types/offer';
import {useAppDispatch} from '../../hooks';
import { getCurrentOffer } from '../../store/action';

type PlaceListProps = {
  offers: Offer[],
}

function PlaceList({offers}: PlaceListProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item, index) => (
        <Place key={item.id} {...item}
          onClick={dispatch(getCurrentOffer(item))}
        />
      ))}
    </div>
  );
}

export default PlaceList;
