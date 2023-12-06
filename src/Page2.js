import React from 'react';
    import exampleImage from './Pictures/Renauld.jpg'; // Import your image file
    import exampleImage2 from './Pictures/Justinvil.jpg';
    import exampleImage3 from './Pictures/Lalancette.jpg';
import './Page2.css';

const Page2 = () => {

      return (
        <div className="image-container">
          <GridComponent />
            <ul>
            <h1>Coaches</h1>
            <img src={exampleImage} className='smaller-image' alt="Example" />
            <li>
                <div>
                    <h1>Mr. Renuald</h1>
                    <p>Mr. Renauld is a seasoned veteran of Frist Robotics</p>
                    <p>and has been helping teams compete for 18 years as a mentor</p>
                    <p>He is also an engineering teacher at St. Paul's School</p>
                    <p>He was also the founder of the FIRST robotics team “Ozram” while teaching at Hopkinton High School.</p>
                </div>
            </li>  
            <img src={exampleImage2} className='smaller-image2' alt="Example" />
            <li>
                <div>
                    <h1>Dr. Justinvil</h1>
                    <p>While relatively new, Dr. Justinvil has became an integral member of the 1512 team</p>
                    <p>Dr. Justinvil was a STEAM-Scholar in-Residence at a day school, Palm Beach Day Academy</p>
                    <p>and is very involved with an NGO, HaitiFirst inc.,</p>
                    <p>to promote education, technology, and health access In Haiti.</p>
                </div>
            </li> 
            <img src={exampleImage3} className='smaller-image3' alt="Example" />
            <div>
                    <h1>Mr. Lalancette</h1>
                    <p>While relatively new, Dr. Justinvil has became an integral member of the 1512 team</p>
                    <p>Dr. Justinvil was a STEAM-Scholar in-Residence at a day school, Palm Beach Day Academy</p>
                    <p>and is very involved with an NGO, HaitiFirst inc.,</p>
                    <p>to promote education, technology, and health access In Haiti.</p>
                </div>
            
            </ul>
        </div>
      );  
      
      
}
const GridComponent = () => {
  const gridItems = [
    {
      "name":"Dr. J",
      "age":"something"
    }
  ]; // Array to hold grid items

  return (
    <>
      <div className='grid-container'>
        {gridItems.forEach((person) => {
          return (
            <div className="grid-container">
              <p>{person.name}</p>
              <p>{person.age}</p>
            </div>  
          );
        })}
      </div>
    </>
  );
};

export default Page2;