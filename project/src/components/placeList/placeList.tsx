import Place from '../place/place';
import { Offer } from '../../types/offer';
import { useState } from 'react';

type PlaceListProps = {
  offers: Offer[],
  OfferPlaceHover: (id: number | null) => void,
}

function PlaceList({offers, OfferPlaceHover}: PlaceListProps): JSX.Element {
  const [selected, setSelected] = useState<number | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState({});

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item, index) => <Place key={item.id} {...item}
      setActiveOffer={() => {
        setActiveOffer(item);
        OfferPlaceHover(item.id);
      }}

        // onMouseLeave={() => {
        //   if(selected !== null) {
        //     setSelected(null);
        //     onOfferCardHover(null);
        //   }
        // }}
      />)}
    </div>
  );
}

export default PlaceList;
