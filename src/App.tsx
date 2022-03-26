import BasicDetails from "./Components/BasicDetails";
import Forecast from "./Components/BasicDetails/Components/Forecast";
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
        <BasicDetails />
      </main>
    </>
  );
}

export default App;
