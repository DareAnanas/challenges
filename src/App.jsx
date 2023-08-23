import { Routes, Route, Outlet, Link } from "react-router-dom";
import Navigation from './Components/Navigation/Navigation';
import Home from './Pages/Home/Home';
import Challenge1 from './Pages/Challenge1/Challenge1';
import Challenge2 from './Pages/Challenge2/Challenge2';
import Challenge3 from './Pages/Challenge3/Challenge3';
import Challenge4 from './Pages/Challenge4/Challenge4';
import Challenge5 from './Pages/Challenge5/Challenge5';
import Challenge6 from './Pages/Challenge6/Challenge6';
import Challenge7 from './Pages/Challenge7/Challenge7';

function App() {
    return (
    <>
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="challenge1" element={<Challenge1 />} />
                <Route path="challenge2" element={<Challenge2 />} />
                <Route path="challenge3" element={<Challenge3 />} />
                <Route path="challenge4" element={<Challenge4 />} />
                <Route path="challenge5" element={<Challenge5 />} />
                <Route path="challenge6" element={<Challenge6 />} />
                <Route path="challenge7" element={<Challenge7 />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    </>
    );
}

function NoMatch() {
    return (
        <h1>Error 404</h1>
    );
}

export default App;
