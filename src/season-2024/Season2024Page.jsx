import React from "react";
import "./SeasonPage.css";

const Season2024Page = () => {
    console.log('Season2024Page component rendered');

    return (
        <div className={'App'} >
            <h1>2024 Season</h1>
            <br/>
            <div className={"season-image-container"}>
                <img className={"season-image"} src={"images/season-2024/eventImage1.jpg"} alt={"2024 Season 1"}/>
                <img className={"season-image"} src={"images/season-2024/eventImage2.jpg"} alt={"2024 Season 2"}/>
                <img className={"season-image"} src={"images/season-2024/eventImage3.jpg"} alt={"2024 Season 3"}/>
            </div>
        </div>
    );
}

export default Season2024Page;
