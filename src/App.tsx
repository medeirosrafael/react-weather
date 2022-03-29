import BasicDetails from "./Components/BasicDetails";
import DailyEvolution from "./Components/DailyEvolution";
import Forecast from "./Components/Forecast";
import Header from "./Components/Header";
import SearchCity from "./Components/SearchCity";
import WeatherProvider from "./Contexts/WeatherContext";
import GlobalStyle from "./Styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <WeatherProvider>
          <SearchCity />
          <BasicDetails />
          <Forecast />
          <DailyEvolution />
        </WeatherProvider>
      </main>
    </>
  );
}

export default App;
