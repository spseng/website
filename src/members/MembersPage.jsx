import './Members.css';
import React from "react";
import {students, coaches} from "./MembersList"

const MembersPage = () => {

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
                                        🎖️ <div className="tooltip-hover-message">Team Captain</div>
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
