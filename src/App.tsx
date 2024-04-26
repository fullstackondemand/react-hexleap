import { ThemeContextProvider } from "./features";
import { Home } from "./pages";

export default function App() {

  return (
    <ThemeContextProvider>
      <Home />
    </ThemeContextProvider>
  )
}
