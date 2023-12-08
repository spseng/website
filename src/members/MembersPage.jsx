import './Members.css';
import React from "react";

const MembersPage = () => {

    const coaches = [
        {
            "name":"Mr. Renuald",
            "description":"Mr. Renauld is a seasoned veteran of First Robotics and has been helping teams compete for 18 years as a mentor. He is also an engineering teacher at St. Paul's School. He was also the founder of the FIRST robotics team “Ozram” while teaching at Hopkinton High School.",
            "image":"images/members/Renauld.jpg",
        },
        {
            "name": "Dr. Justinvil",
            "description": "While relatively new, Dr. Justinvil has became an integral member of the 1512 team. Dr. Justinvil was a STEAM-Scholar in-Residence at a day school, Palm Beach Day Academy, and is very involved with an NGO, HaitiFirst inc., to promote education, technology, and health access In Haiti.",
            "image": "images/members/Justinvil.jpg"
        },
        {
            "name": "Mr. Lalancette",
            "description": "Mr. Lalancette is a new member of the team and is a math teacher at St. Paul's School. He has been helping the team with the programming of the robot and has been a great help to the team.",
            "image": "images/members/Lalancette.jpg",
        }
    ];

    const students = [
        {
            "name":"Henry",
            "last":"Abrahamsen",
            "form":"VI",
            "hometown":"Rangeley, ME",
            "teamCaptain":true,
            "club":true,
            "class":true,
        },
        {
            "name":"Jack",
            "last":"Bocresion",
            "form":"VI",
            "hometown":"Brooklyn, NY",
            "teamCaptain":true,
            "driver":true,
            "club":true,
            "class":false,
        },
        {
            "name":"Tyler",
            "last":"Wang",
            "form":"V",
            "hometown":"Los Angeles, CA",
            "teamCaptain":false,
            "driver":true,
            "club":false,
            "class":true,
        },
        {
            "name":"Brandon",
            "last":"Montoya",
            "form":"VI",
            "hometown":"Somerset, NJ",
            "club":true,
            "class":false,
        },
        {
            "name":"Jack",
            "last":"Rubiralta",
            "form":"V",
            "hometown":"Barcelona, Spain",
            "club":true,
            "class":false,
        },{
            "name":"Junyi",
            "last":"Liu",
            "form":"IV",
            "hometown":"Beijing, China",
            "club":true,
            "class":false,
        },{
            "name":"Thomas",
            "last":"Armstrong",
            "form":"IV",
            "hometown":"Nashville, TN",
            "club":true,
            "class":false,
        },{
            "name":"Anna",
            "last":"Liu",
            "form":"V",
            "hometown":"Atlanta, GA",
            "club":true,
            "class":false,
        },
        {
            "name":"Ella",
            "last":"Kim",
            "form":"V",
            "hometown":"Hong Kong, Hong Kong",
            "club":true,
            "class":false,
        },
        {
            "name":"Jean",
            "last":"Gurali",
            "form":"V",
            "hometown":"Jersey City, NJ",
            "club":true,
            "class":false,
        },
        {
            "name":"Vicky",
            "last":"Zhang",
            "form":"V",
            "hometown":"Toronto, ON, Canada",
            "club":true,
            "class":false,
        },
        {
            "name":"Ella",
            "last":"Kim",
            "form":"V",
            "hometown":"Hong Kong, HK",
            "club":true,
            "class":false,
        },
        {
            "name": "Ella",
            "last": "Kim",
            "form": "V",
            "hometown": "Hong Kong, HK",
            "club":true,
            "class":false,
        },
        {
            "name":"Xingguo",
            "last":"Ding",
            "form":"Spirit Animal",
            "hometown":"'Global Citizen'",
            "club":true,
            "class":false,
        },
    ]

    return (
        <div className={'App'} id={"members"}>
            <h1>Coaches</h1>
            <div className="members-list-container">
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
         <table className='students-table'>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Form</th>
                    <th>Hometown</th>
                    <th>Class</th>
                    <th>Club</th>
                </tr>
            </tbody>

            <tbody>
                {students
                    .sort((a, b) => (a.form.localeCompare(b.form)))
                    .reverse()
                    .sort((a, b) => {
                    if (a.form === b.form) {
                        return a.last.localeCompare(b.last);
                    }else {
                        return !(a.form.localeCompare(b.form));
                    }
                }).map((student) => {
                    return (
                        <tr>
                            <td>
                                {(student.teamCaptain ? <>
                                    <div className='tooltip-hover' style={{paddingRight:3}}>
                                        ❖ <div className="tooltip-hover-message">Team Captain</div>
                                    </div>
                                </> : <span></span>)}
                                {(student.driver ? <>
                                    <div className='tooltip-hover' style={{paddingRight:3}}>
                                        🎮 <div className="tooltip-hover-message">Team Driver</div>
                                    </div>
                                </> : <span></span>)}
                                {student.name + " " + student.last}
                            </td>
                            <td>{student.form}</td>
                            <td>{student.hometown}</td>
                            <td>{student.class ? "✓" : ""}</td>
                            <td>{student.club ? "✓" : ""}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    )
}

export default MembersPage;
