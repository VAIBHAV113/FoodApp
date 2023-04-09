import "./App.css";
import Header from "./component/Layout/header";
import Meals from "./component/meals/meals";
function App() {
  return (
    <div className="App">
      <Header />
      <Meals />
    </div>
  );
}

export default App;
