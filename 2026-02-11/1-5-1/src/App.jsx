import LanguageProvider from "./contexts/LanguageContext";
import Language from "./components/LanguageProvider";

function App() {
  return (
    <LanguageProvider>
      <Language />
    </LanguageProvider>
  );
}

export default App;
