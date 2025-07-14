import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Navbal from "./Navbal.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cartas from "./Cartas.jsx";
import Footer from "./Footer.jsx";
//create your first component
const Home = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbal />
            <div className="container flex-grow-1">
                <Jumbotron />
                <Cartas />
            </div>
            <Footer />
        </div>
    );
};

export default Home;