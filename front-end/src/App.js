import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Forms from './Components/Form';
import Home from './Components/Home';
import List from './Components/List';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />}>
                    <Route path="form" element={<Forms />} />
                    <Route path="list" element={<List />} />
                    <Route index element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
