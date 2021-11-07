import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" exact={true} component={<Home/>} />
                <Route path="/about" component={<About/>} />
                <Route path="/movie/:id" component={<Detail/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
