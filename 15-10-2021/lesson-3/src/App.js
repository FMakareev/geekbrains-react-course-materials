import "./styles.css";
import { CssBaseline } from "@material-ui/core";

import { Homework } from "./pages/Homework";
import { Reconciliation } from "./pages/Reconciliation";
import { Material } from "./pages/ForTeacher/Material";
import { RefExample } from "./pages/ForTeacher/Ref";

export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Material />
    </div>
  );
}
