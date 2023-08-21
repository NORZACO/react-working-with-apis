import "../src/static/css/styles.css";
// import { UseFetchData } from "../src/Components/useFecth";
import News from "./Components/News";

function App() {
  // const { data } = UseFetchData({ url: "/data/messi.json" });
  // console.log("App rendering");

  // if (!data) return <h3> loading data ... </h3>;

  return (
    <>
      <div className="App">
        <News />
      </div>
    </>
  );
}

export default App;
