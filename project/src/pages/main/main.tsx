import { useAppSelector } from '../../hooks';
import MainEmpty from '../../components/main/mainEmpty';
import MainFill from '../../components/main/mainFill';
import { State } from '../../types/state';

function Main(): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const currentOffers = (state: State) => state.offers.filter((offer) => offer.city.name === city.name);

  return (
    <section>
      {currentOffers.length > 0 ? <MainFill/> : <MainEmpty city={city}/>}
    </section>
  );
}

export default Main;
