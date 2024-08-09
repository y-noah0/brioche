import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import AboutTab from "./About/AboutTab";

function AppRouter() {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<AboutTab />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;