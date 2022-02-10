import "./styles.css";

import { Layout } from "./components";
import { ExercisesRoute } from "./exercises";

export default function App() {
  return (
    <Layout className="App">
      <ExercisesRoute />
    </Layout>
  );
}
