import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import Food from "./components/Food";
import Drinks from "./components/Drinks";
import Rice from "./components/Rice";
import Noodles from "./components/Noodles";
import Pasta from "./components/Pasta";
import Desserts from "./components/Desserts";

import Button from 'react-bootstrap/Button';
import Popup from 'reactjs-popup';
import Admin from "./components/Admin"
import LoginForm from "./components/Form"
import FoodChart from './components/FoodCharts';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function App() {
    return <BrowserRouter>
        <header className="p-3 bg-dark text-white">
            <div className="container">
                
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>

                    </ul>
                    <Dropdown>
                        <Dropdown.Toggle className="btn btn-outline-light me-2" variant="dark ">
                            FoodList
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="dark">
                            <Dropdown.Item href="/food" >Biriyani </Dropdown.Item>
                            <Dropdown.Item href="/pasta">Pasta</Dropdown.Item>
                            <Dropdown.Item href="/noodles">Noodles</Dropdown.Item>
                            <Dropdown.Item href="/desserts">Desserts</Dropdown.Item>
                            <Dropdown.Item href="/rice">Rice</Dropdown.Item>
                            <Dropdown.Item href="/drinks">Drinks</Dropdown.Item>
                            <Dropdown.Divider />
                        </Dropdown.Menu>
                    </Dropdown>

                    <div className="text-end">
                       
                        <Link to="/register" className="btn btn-outline-light me-2">Register</Link>
                        <Link to="/login" className="btn btn-outline-light me-2">Login</Link>

                    </div>

                </div>
            </div>
        </header>


        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<LoginForm />} />
            <Route path="/food" element={<Food />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/desserts" element={<Desserts />} />
            <Route path="/noodles" element={<Noodles />} />
            <Route path="/rice" element={<Rice />} />
            <Route path="/pasta" element={<Pasta />} />

        </Routes>


    </BrowserRouter>;
}

export default App;