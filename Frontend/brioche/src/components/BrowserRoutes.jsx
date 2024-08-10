import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import AboutTab from "./About/AboutTab";
import Contacts from "./Contacts/Contacts";

function AppRouter() {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<AboutTab />} />
                <Route exact path="/contact" element={<Contacts />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;