import './App.css';
import Home from './home/Home'
import {Component, createRef, useEffect, useState} from "react";
import Navbar from "./navbar/Navbar";
import MembersPage from "./members/MembersPage";
import React from "react";
import HomePage from "./home/Home";
import Season2023Page from "./season-2023/Season2023Page";
import ContactUsPage from "./contact/ContactUsPage";


const App = () => {
    const [activeView, setActiveView] = useState(0);

    const handleNavigation = (view) => {
        scrollToId(view);
        // setActiveView(view);
    };

    const scrollToId = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
    }

    // return (
    //     <>
    //         <Navbar scrollToPage={handleNavigation}/>
    //         {activeView === 0 && <Home />}
    //         {activeView === 1 && <MembersPage />}
    //         {activeView === 2 && <Season2023Page />}
    //         {activeView === 3 && <ContactUsPage />}
    //     </>
    // );

    return (
        <>
            <Navbar scrollToPage={handleNavigation}/>
            <div className={"cover-image-background"}>
                <div className={"cover-image-foreground"}>
                    <Home />
                    <MembersPage />
                    <Season2023Page />
                    <ContactUsPage />
                </div>
            </div>
        </>
    );
}

export default App;
