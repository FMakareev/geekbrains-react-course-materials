import React from 'react';
import { SimpleForm } from './container/SimpleForm';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ul>
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
            to="/products"
          >
            products
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
      </ul>

      <SimpleForm
        render={(props: any) => {
          console.log(props);
          return (
            <div>
              <input
                value={props.getFieldValue('foo')}
                name="foo"
                type="text"
                onChange={(event) => {
                  props.setFieldValue('foo', event.target.value);
                }}
              />
              <input
                value={props.getFieldValue('foo1')}
                name="foo1"
                type="text"
                onChange={(event) => {
                  props.setFieldValue('foo1', event.target.value);
                }}
              />
              <input
                value={props.getFieldValue('foo2')}
                name="foo2"
                type="text"
                onChange={(event) => {
                  props.setFieldValue('foo2', event.target.value);
                }}
              />
              <input
                value={props.getFieldValue('foo3')}
                name="foo3"
                type="text"
                onChange={(event) => {
                  props.setFieldValue('foo3', event.target.value);
                }}
              />
              <button type="button" onClick={props.resetForm}>
                resetForm
              </button>
            </div>
          );
        }}
      />
    </div>
  );
}

export default App;
