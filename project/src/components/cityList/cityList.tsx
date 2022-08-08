import cn from 'classnames';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { Link } from 'react-router-dom';
import { changeCurrentCity } from '../../store/action';
import { City } from '../../types/city';
import { useState } from 'react';

type CityListProps = {
  cities: City[],
  onChangeTab: (city: City) => void,
}

function CityList({cities, onChangeTab}: CityListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const [activeCity, setActiveCity] = useState(useAppSelector((state) => state.city));

  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city: City) =>
        (
          <li key={city.name} className="locations__item">
            <Link className={cn('locations__item-link tabs__item', {'tabs__item--active': activeCity.name === city.name})}
              to={'/'}
              onClick={() => {
                dispatch(changeCurrentCity(city));
                setActiveCity(city);
                onChangeTab(city);
              }}
            >
              <span>{city.name}</span>
            </Link>
          </li>
        )
      )}
    </ul>
  );
}

export default CityList;
