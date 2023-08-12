import { Routes, Route, Outlet, Link } from "react-router-dom";
import Navigation from './Components/Navigation/Navigation';
import Challenge1 from './Pages/Challenge1/Challenge1';
import Challenge2 from './Pages/Challenge2/Challenge2';
import Challenge3 from './Pages/Challenge3/Challenge3';
import Challenge4 from './Pages/Challenge4/Challenge4';

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
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    </>
    );
}

function Home() {
    return (
        <h1>This is main page</h1>
    );
}

function NoMatch() {
    return (
        <h1>Error 404</h1>
    );
}

export default App;
