import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import {useAppDispatch} from '../../hooks';
import { getActiveOfferId } from '../../store/action';

type PlaceProps = {
  previewImage: string;
  title: string;
  price: number;
  type: string;
  isPremium: boolean;
  active: boolean;
  rating: number;
  id: number;
}

function Place({previewImage, title, price, type, isPremium, active, rating, id}: PlaceProps): JSX.Element {
  const dispatch = useAppDispatch();
  const onHoverCard = () => {
    dispatch(getActiveOfferId(id));
  };

  return (
    <article className="cities__card place-card" onMouseOver={onHoverCard}>
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Room}/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">
              &#47;&nbsp;night
            </span>
          </div>
          <button
            className={`place-card__bookmark-button button ${ active ? 'place-card__bookmark-button--active' : '' }`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width="18"
              height="19"
            >
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 100 / 5}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/:${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Place;
