import {PureComponentExample} from './PureComponentExample';
import {FormTestExample} from "./FormTestExample";
import {ReduxTestExample} from "./ReduxTestExample";

export const routerConfig = [
  {
    name: 'PureComponentExample',
    component: PureComponentExample,
    path: '/pure-component-example',
    exact: true,
  },
  {
    name: 'FormTestExample',
    component: FormTestExample,
    path: '/form-test-example',
    exact: true,
  },
  {
    name: 'ReduxTestExample',
    component: ReduxTestExample,
    path: '/redux-test-example',
    exact: true,
  },
]