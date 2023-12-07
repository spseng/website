import './Members.css';
import React from "react";

const MembersPage = () => {

    const coaches = [
        {
            "name":"Mr. Renuald",
            "description":"Mr. Renauld is a seasoned veteran of First Robotics and has been helping teams compete for 18 years as a mentor. He is also an engineering teacher at St. Paul's School. He was also the founder of the FIRST robotics team “Ozram” while teaching at Hopkinton High School.",
            "image":"/images/Renauld.jpg",
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
            "last":"Abrahamsen",
            "form":"VI",
            "hometown":"Rangeley, ME"
        },
        {
            "name":"Jack",
            "last":"Bocresion",
            "form":"VI",
            "hometown":"Brooklyn, NY"   
        },
        {
            "name":"Brandon",
            "last":"Montoya",
            "form":"VI",
            "hometown":"Somerset, NJ"
        },
        {
            "name":"Jack",
            "last":"Rubiralta",
            "form":"V",
            "hometown":"Barcelona, Spain"
        },{
            "name":"Junyi",
            "last":"Liu",
            "form":"IV",
            "hometown":"Beijing, China",
        },{
            "name":"Thomas",
            "last":"Armstrong",
            "form":"IV",
            "hometown":"Nashville, TN"
        },{
            "name":"Anna",
            "last":"Liu",
            "form":"V",
            "hometown":"Atlanta, GA"
        },
        {
            "name":"Ella",
            "last":"Kim",
            "form":"V",
            "hometown":"Hong Kong, Hong Kong"
        },
        {
            "name":"Jean",
            "last":"Gurali",
            "form":"V",
            "hometown":"Jersey City, NJ"
        },
        {
            "name":"Vicky",
            "last":"Zhang",
            "form":"V",
            "hometown":"Toronto, ON, Canada"
        },
        {
            "name":"Ella",
            "last":"Kim",
            "form":"V",
            "hometown":"Hong Kong, HK"
        },
        {
            "name":"Ella",
            "last":"Kim",
            "form":"V",
            "hometown":"Hong Kong, HK",
            
            "name":"Xingguo",
            "last":"Ding",
            "form":"Spirit Animal",
            "hometown":"'Global Citizen'"
        },
    ]


    return (
        <div>

            

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
                    <th> Name</th>
                    <th> Form</th>
                    <th> Hometown</th>
                </tr>
            </tbody>  

            <tbody>
                {students.sort((a, b) => {
                    if (a.form == b.form) {
                        return a.name.localeCompare(b.name);
                    }else {
                        return !(a.form.localeCompare(b.form));
                    }
                }).map((student) => {
                    return (
                        <tr>
                            <td>{student.name + " " + student.last}</td>
                            <td>{student.form}</td>
                            <td>{student.hometown}</td>
                            </tr>
                    );
                })}
                </tbody>  
            </table>
        </div>
    )
}

export default MembersPage;