import { Link } from 'react-router-dom';
function NotFoundScreen () : JSX.Element {
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">404 Page Not Found</h1>
            <Link to="/" className="form__submit button">Go to main page</Link>
          </section>
        </div>
      </main>
    </div>
  );
}


export default NotFoundScreen;
