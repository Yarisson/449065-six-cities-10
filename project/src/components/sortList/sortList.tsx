import cn from 'classnames';
import {useAppDispatch} from '../../hooks';
import { changeFilter } from '../../store/action';

type sortListProps = {
  isOpenFilter: boolean,
  currentFilter: string,
  filterTypes: string[],
  toggleFilter: () => void,
}

function SortList({isOpenFilter, currentFilter, filterTypes, toggleFilter}: sortListProps): JSX.Element {

  const dispatch = useAppDispatch();

  return (
    <ul
      className={cn('places__options places__options--custom', {
        'places__options--opened': {isOpenFilter},
      })}
    >
      {filterTypes.map((filterType) => (
        <li
          key={filterType}
          className={cn('places__option', {
            'places__option--active':
            currentFilter === filterType,
          })}
          tabIndex={0}
          onClick={() => {
            dispatch(changeFilter(filterType));
            toggleFilter();
          }}
        >
          {filterType}
        </li>
      ))}
    </ul>
  );
}

export default SortList;
