import './Home.css';
import React from "react";

function HomePage() {
    console.log('Home component rendered');

    return (
        <div className="App">
            <div className="cover-image-background"></div>
            <h1>Welcome to Team 1512 - The Pelicans!</h1>
            <p>We are the St. Paul's School First Robotics Team.</p>
            <p>Our mascot is the pelican, representing our team spirit and determination.</p>

            <div className="achievements">
                <h2>Our Achievements</h2>
                <p>Last year, we reached the UNH Finals and secured an impressive second place!</p>
            </div>

            <div className="events">
                <h2>Upcoming Events</h2>
                <ul>
                    <li><strong>NE District Granite State Event:</strong> Salem High School</li>
                    <li><strong>NE District UVM Event:</strong> University of Vermont</li>
                </ul>
            </div>

            <div className="call-to-action">
                <h2>Join Us</h2>
                <p>We meet both as a class and an afternoon activity. If you're passionate about robotics, engineering, or teamwork, we'd love to have you!</p>
            </div>
        </div>
    );
}

export default HomePage;