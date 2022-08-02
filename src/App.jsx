import { Header } from "./components/Header";
import { Searcher } from "./components/Searcher";
import { TrendingPreview } from "./components/TrendingPreview";
import { CategoriesContainer } from "./components/CategoriesContainer";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log(apiKey);
  return (
    <div>
      <Header />
      <Searcher />
      <TrendingPreview />
      <CategoriesContainer />
      <footer>Hecho con ♥ por @arturomauricio</footer>
    </div>
  );
}

export default App;
