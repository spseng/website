import {upcomingEvents} from "./UpcomingEvents";


const UpcomingSeasonPage = () => {
    return (
        <div className={'App'} id={"upcoming"}>
            <h1>Upcoming Season</h1>
            {upcomingEvents.map((event) => {
                return (
                    <div>
                        <h3>{event.name}</h3>
                        <p>{event.location}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default UpcomingSeasonPage;
