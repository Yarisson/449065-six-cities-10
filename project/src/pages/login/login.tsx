import { useAppSelector } from '../../hooks';
import {useState, FormEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {AuthData} from '../../types/authData';
import { loginAction } from '../../store/api-actions';
import { State } from '../../types/state';
import {AppRoute} from '../../const';
import EmptyHeader from '../../components/header/emptyHeader';

const citySelector = (state: State) => state.city;

function Login(): JSX.Element {
  const city = useAppSelector(citySelector);
  // const loginRef = useRef<HTMLInputElement | null>(null);
  // const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChangeLogin = (evt: FormEvent<HTMLInputElement>) => {
    setLogin((evt.target as HTMLInputElement).value);
  };

  const handleChangePassword = (evt: FormEvent<HTMLInputElement>) => {
    setPassword((evt.target as HTMLInputElement).value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (login !== null && password !== null) {
      onSubmit({
        login: login,
        password: password,
      });
    }
  };

  const dispatch = useAppDispatch();
  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  // const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
  //   evt.preventDefault();

  //   if (loginRef.current !== null && passwordRef.current !== null) {
  //     onSubmit({
  //       login: loginRef.current.value,
  //       password: passwordRef.current.value,
  //     });
  //   }
  // };

  return (
    <div className="page page--gray page--login">
      <EmptyHeader/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  // ref={loginRef}
                  value={password}
                  onChange={handleChangePassword}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required={false}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  // ref={passwordRef}
                  value={login}
                  onChange={handleChangeLogin}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required={false}
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                onClick={() => navigate(AppRoute.Main)}
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={'/'}><span>{city.name}</span></Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
