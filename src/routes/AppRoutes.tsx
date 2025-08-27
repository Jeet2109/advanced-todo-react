import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TodosPage from "../pages/TodosPage";
import AboutPage from "../pages/AboutPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/todos" element={<TodosPage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
    )
}