import './Home.css';
import React from "react";

function HomePage() {
    console.log('Home component rendered');

    return (
        <div className="App">
             <div className={"cover-image-background"}></div>
            <h1>Welcome to Team 1512</h1>
            <p>We are the St. Paul's School First Robotics Team.</p>
            <p>We meet both as a class and an afternoon activity.</p>
        </div>
    );
}

export default HomePage;
