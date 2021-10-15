import "./styles.css";

import { Layout } from "./components/Layout";
import { ExercisesRoute } from "./exercises";

export default function App() {
  return (
    <Layout className="App">
      <ExercisesRoute />
    </Layout>
  );
}
