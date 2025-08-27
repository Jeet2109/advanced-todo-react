import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
        <header className="flex justify-end mb-4">
          <ThemeToggle />
        </header>
        <AppRoutes />
      </div>

    </BrowserRouter>
  )
}

export default App
