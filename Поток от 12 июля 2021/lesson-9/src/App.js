import {Layout} from "./components/Layout";
import {Routes} from "./pages/Routes";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {initPostsTracking} from "./store/post/action";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initPostsTracking())
  }, [])

  return (
    <Layout className="App">
      <Routes/>
    </Layout>
  );
}

export default App;
