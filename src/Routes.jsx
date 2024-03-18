import Perfis from "./pages/Perfis";
import Repos from "./pages/Repos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Perfis />}></Route>
                <Route path="/repositorios" element={<Repos />}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;