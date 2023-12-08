import React from "react";
import "./SeasonPage.css";

const Season2023Page = () => {
    return (
        <div className={'App'} id={"season"}>
            <h1>2023 Season</h1>
            <br/>
            <div className={"season-image-container"}>
                <img className={"season-image"} src="images/season-2023/eventImage1.jpg" alt={"2023 Season Image 1"}/>
                <img className={"season-image"} src="images/season-2023/eventImage2.jpg" alt={"2023 Season Image 2"}/>
                <img className={"season-image"} src="images/season-2023/eventImage3.jpg" alt={"2023 Season Image 3"}/>
            </div>
        </div>
    );
}

export default Season2023Page;
