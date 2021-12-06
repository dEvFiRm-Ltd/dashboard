import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';

const App = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}>
                <Route index element={<Dashboard />} />
            </Route>
        </Routes>
    </BrowserRouter>
    )
};

export default App;
