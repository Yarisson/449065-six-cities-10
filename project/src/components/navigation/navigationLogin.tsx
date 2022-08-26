import { Link } from 'react-router-dom';

function NavigationLogin(): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <Link className="header__nav-link" to="/login">
            <span className="header__login">Sign in</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationLogin;


