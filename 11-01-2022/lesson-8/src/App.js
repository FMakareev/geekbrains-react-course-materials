import "./styles.css";

import { Layout } from "./components/Layout";
import { ExercisesRoute, navigation } from "./pages";

export default function App() {
  return (
    <Layout navigation={navigation} className="App">
      <ExercisesRoute />
    </Layout>
  );
}
