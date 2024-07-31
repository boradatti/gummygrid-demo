import { ColorSchemeContextProvider } from './contexts/color-scheme';

function App() {
  return (
    <ColorSchemeContextProvider>
      <div>hello</div>
    </ColorSchemeContextProvider>
  );
}

export default App;
