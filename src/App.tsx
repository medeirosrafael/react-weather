import BasicDetails from "./Components/BasicDetails";
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
      </main>
    </>
  );
}

export default App;
