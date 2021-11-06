import { Switch, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { getCombineReducerPath, getExamplePath } from "./navigation";
import { Example } from "./routes/Example";
import { CombineReducer } from "./routes/CombineReducer";

const navigation = [
  {
    path: getCombineReducerPath(),
    title: "CombineReducer"
  },
  {
    path: getExamplePath(),
    title: "Example"
  }
];

export default function App() {
  return (
    <Layout navigation={navigation}>
      <Switch>
        <Route component={Example} path={getExamplePath()} />
        <Route component={CombineReducer} path={getCombineReducerPath()} />
      </Switch>
    </Layout>
  );
}
