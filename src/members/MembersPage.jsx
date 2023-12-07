import './Members.css';
// import exampleImage from "../../public/images/Renauld.jpg";
// import exampleImage2 from "../../public/images/Justinvil.jpg";
// import exampleImage3 from "../../public/images/Lalancette.jpg";
import React from "react";

const MembersPage = () => {

    const coaches = [
        {
            "name":"Mr. Renuald",
            "description":"Mr. Renauld is a seasoned veteran of First Robotics and has been helping teams compete for 18 years as a mentor. He is also an engineering teacher at St. Paul's School. He was also the founder of the FIRST robotics team “Ozram” while teaching at Hopkinton High School.",
            "image":"/images/Renauld.png",
        },
        {
            "name": "Dr. Justinvil",
            "description": "While relatively new, Dr. Justinvil has became an integral member of the 1512 team. Dr. Justinvil was a STEAM-Scholar in-Residence at a day school, Palm Beach Day Academy, and is very involved with an NGO, HaitiFirst inc., to promote education, technology, and health access In Haiti.",
            "image": "/images/Justinvil.jpg"
        },
        {
            "name": "Mr. Lalancette",
            "description": "Mr. Lalancette is a new member of the team and is a math teacher at St. Paul's School. He has been helping the team with the programming of the robot and has been a great help to the team.",
            "image": "/images/Lalancette.jpg",
        }
    ];

    const students = [
        {
            "name":"Henry",
            "form":"VI"
        }
    ]


    return (
        <div className="members-list-container">
            <h1>Coaches</h1>
            <div>
                {coaches.map((coach) => {
                    return (
                        <div className="members-card" key={coach.name}>
                            <img src={coach.image} className='members-image' alt={coach.name} />
                            <h3>{coach.name}</h3>
                            <p className={"description"}>{coach.description}</p>
                        </div>
                    );
                })}
            </div>

            <h1>Students</h1>

        </div>
    );
}

export default MembersPage;
