import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  useParams,
  Link,
} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ModalExample } from './pages/ModalExample';
import { QueryStringRouter } from './components/QueryStringRouter';

/**
 * /
 * /profile
 * /profile/settings
 * /profile/favorites
 * /products
 * /product/:id
 *
 * */

const ProductPage = () => {
  const { id } = useParams<any>();
  console.log(id);
  return (
    <div>
      <h1>product/${id}</h1>
      <NavLink
        activeStyle={{
          color: 'red',
        }}
        exact
        to="/products"
      >
        products
      </NavLink>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/">
        <App />
      </Route>

      <Route
        path="/profile"
        render={() => {
          return (
            <div>
              <h1>profile</h1>
              <ul>
                <li>
                  <NavLink
                    activeStyle={{
                      color: 'red',
                    }}
                    exact
                    to="/"
                  >
                    main
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeStyle={{
                      color: 'red',
                    }}
                    exact
                    to="/profile"
                  >
                    profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeStyle={{
                      color: 'red',
                    }}
                    exact
                    to="/profile/settings"
                  >
                    settings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeStyle={{
                      color: 'red',
                    }}
                    exact
                    to="/profile/favorites"
                  >
                    favorites
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeStyle={{
                      color: 'red',
                    }}
                    exact
                    to="/profile/modal"
                  >
                    /profile/modal
                  </NavLink>
                </li>
              </ul>
              <Switch>
                <Route
                  path="/profile/settings"
                  render={() => {
                    return <div>/profile/settings</div>;
                  }}
                />
                <Route
                  path="/profile/favorites"
                  render={() => {
                    return <div>/profile/favorites</div>;
                  }}
                />
                <Route
                  path="/profile/favorites"
                  render={() => {
                    return <div>/profile/favorites</div>;
                  }}
                />
                <Route path="/profile/modal" component={ModalExample} />
              </Switch>
            </div>
          );
        }}
      />

      <Route path="/product/:id" component={ProductPage} />

      <Route
        path="/products"
        render={() => {
          return (
            <div>
              <h1>products</h1>
              <NavLink
                activeStyle={{
                  color: 'red',
                }}
                exact
                to="/"
              >
                main
              </NavLink>

              {Array.from({
                length: 5,
              }).map((_, index) => (
                <Link to={`/chats/${index}`}>product {index}</Link>
              ))}
            </div>
          );
        }}
      />

      <QueryStringRouter modalType="modal1">
        <div>modal1</div>
      </QueryStringRouter>

      <QueryStringRouter modalType="modal2">
        <div>modal2</div>
      </QueryStringRouter>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
