import React from "react";
import "./SeasonPage.css";

const Season2023Page = () => {
    console.log('Season2023Page component rendered');

    return (
        <div className={'App'}>
            <h1>Past Seasons</h1>
            <br/>
            <div className={"season-image-container"}>
                <img className={"season-image"} src={"images/season-2023/eventImage1.jpg"} alt={"2023 Season 1"}/>
                <img className={"season-image"} src={"images/season-2023/eventImage2.jpg"} alt={"2023 Season 2"}/>
                <img className={"season-image"} src={"images/season-2023/eventImage3.jpg"} alt={"2023 Season 3"}/>
            </div>
        </div>
    );
}

export default Season2023Page;
