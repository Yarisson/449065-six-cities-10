import Logo from '../logo/logo';
import { useAppSelector } from '../../hooks';
import Navigation from '../navigation/navigation';
import NavigationLogin from '../navigation/navigationLogin';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {authorizationStatus === 'AUTH' ? <Navigation /> : <NavigationLogin /> }
        </div>
      </div>
    </header>
  );
}

export default Header;
