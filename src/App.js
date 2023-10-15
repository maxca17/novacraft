import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Products from './products'; // Import the new Products component
import './App.css';


function App() {
    return (
        <Router>
            <div className="app-container">
                <Header />

                {/* Main content */}
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/products" element={<Products />} />
                    {/* Add more routes as needed */}
                </Routes>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
