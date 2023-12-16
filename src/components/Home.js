import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import FoodChart from "./FoodCharts"

export const Home = () => {
   
    const [navigate, setNavigate] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get('');
                // Process the data if needed
            } catch (e) {
                console.error('Error fetching data:', e);
                setNavigate(true);
            }
        };

        fetchData(); // Call the asynchronous function

    }, []); 

    return (
        <>
            <div className="p-3 bg-white text-center text-primary " >
                <h3><i>Welcome to Food Token Generator</i></h3> 
            </div>

            <header className="p-3 bg-white text-red">
                <div className="container">
                    <div className="text-end">
                        <h3>Click to generate.</h3>
                        <Link to="/food" className="btn btn-outline-dark me-5">Biriyani</Link>
                    </div>
                </div>
            </header>

            <Card>
                <Card.Body>
                    <Card.Text>
                    </Card.Text>
                    <Card.Img variant="top" src="https://i0.wp.com/foodntravel.in/wp-content/uploads/2023/05/Chennai-Biriyani-Center-in-Kochi-Part-1.jpg?fit=1280%2C720&ssl=1" />
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <FoodChart/>
                </Card.Body>
            </Card>
        </>
    );
}
