import BasicDetails from "./Components/BasicDetails";
import DailyEvolution from "./Components/DailyEvolution";
import Forecast from "./Components/Forecast";
import Header from "./Components/Header";
import SearchCity from "./Components/SearchCity";
import GlobalStyle from "./Styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <SearchCity />
        <BasicDetails />
        <Forecast />
        <DailyEvolution />
      </main>
    </>
  );
}

export default App;
