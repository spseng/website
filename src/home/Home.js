import './Home.css';
import React from "react";

function HomePage() {
    console.log('Home component rendered');

    return (
        <div className="App">
            <div className="cover-image-background"></div>
            <h1>Welcome to Team 1512 - The Pelicans!</h1>
            <p>We are the St. Paul's School FIRST Robotics Team, also known as "The Big Red."</p>
            <p>Our mascot is the pelican, representing our team spirit and determination.</p>

            <div className="team-history">
                <h2>About Us</h2>
                <p>Team 1512 was founded in 2005 at St. Paul's School in Concord, New Hampshire. Since then, we have been passionately engaging in the world of robotics through competitions and team collaboration.</p>
            </div>

            <div className="achievements">
                <h2>Our Achievements</h2>
                <p>Last year, we reached the UNH District Finals and secured an impressive second place!</p>
            </div>

            <div className="events">
                <h2>Upcoming Events</h2>
                <ul>
                    <li><strong>NE District Granite State Event:</strong> February 28 - March 2, 2025, at Salem High School.</li>
                    <li><strong>NE District UVM Event:</strong> March 28 - March 30, 2025, at the University of Vermont.</li>
                </ul>
            </div>

            <div className="call-to-action">
                <h2>Join Us</h2>
                <p>If you're passionate about robotics, engineering, or teamwork, we'd love to have you! We meet both as a class and as an afternoon activity, offering hands-on opportunities to learn and grow.</p>
            </div>

            <div className="instagram-follow">
                <h2>Follow Us on Instagram!</h2>
                <p>Stay updated with our journey and achievements by following us:</p>
                <div className="instagram-row">
                    <a href="https://www.instagram.com/thebigredrobotics/" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
                            alt="Instagram Logo" 
                            className="instagram-logo"
                        />
                    </a>
                    <a href="https://www.instagram.com/thebigredrobotics/" target="_blank" rel="noopener noreferrer">
                        <button className="instagram-button">Follow @thebigredrobotics</button>
                    </a>
                </div>
            </div>

            <div className="more-info">
                <h2>Learn More</h2>
                <p>For additional details about our team and activities, visit our official website:</p>
                <a href="http://robotics.sps.edu/" target="_blank" rel="noopener noreferrer">
                    <button className="website-button">Visit Our Website</button>
                </a>
            </div>

            <div style={{ padding: "0.4%" }}>
            </div>
        </div>
    );
}

export default HomePage;
