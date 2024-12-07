import './Members.css';
import React from "react";
import { students, coaches } from "./MembersList";

const MembersPage = () => {
    console.log('MembersPage component rendered');
 
    // Map captain types to symbols and tooltips
    const captainSymbols = {
        "Senior Captain": {
            symbol: "🤝", // Represents top leadership and achievement
            tooltip: "Senior Captain"
        },
        "Junior Captain": {
            symbol: "⚡", // Symbolizes energy, potential, and action
            tooltip: "Junior Captain"
        },
        "Sophomore Captain": {
            symbol: "📘", // Reflects learning, knowledge, and development
            tooltip: "Sophomore Captain"
        },
        "King Captain": {
            symbol: "👑", // Maintains the royal theme for King Krenkal
            tooltip: "King Captain"
        },
        "School President": {
            symbol: "🐼", // Maintains the royal theme for King Krenkal
            tooltip: "School President"
        },
        "Class Captain": {
            symbol: "📘", // Maintains the royal theme for King Krenkal
            tooltip: "Class Captain"
        }
    };
    

    return (
        <div className={'App'}>
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
            <div className='student-list-container'>
            <table className='students-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Form</th>
                        <th>Hometown</th>
                        <th>Class</th>
                        <th>Club</th>
                    </tr>
                </thead>

                <tbody>
                    {students
                        .sort((a, b) => b.form.localeCompare(a.form))
                        .sort((a, b) => {
                            if (a.form === b.form) {
                                return a.last.localeCompare(b.last);
                            } else {
                                return b.form.localeCompare(a.form);
                            }
                        })
                        .map((student) => {
                            return (
                                <tr key={student.name + student.last}>
                                    <td>
                                        {student.captainType && (
                                            <div className='tooltip-hover' style={{ paddingRight: 3, display: 'inline-block' }}>
                                                {captainSymbols[student.captainType].symbol}
                                                <div className="tooltip-hover-message">
                                                    {captainSymbols[student.captainType].tooltip}
                                                </div>
                                            </div>
                                        )}
                                        {student.driver && (
                                            <div className='tooltip-hover' style={{ paddingRight: 3, display: 'inline-block' }}>
                                                🎮
                                                <div className="tooltip-hover-message">Team Driver</div>
                                            </div>
                                        )}
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
        </div>
    )
}

export default MembersPage;
