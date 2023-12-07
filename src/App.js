import './App.css';
import Home from './home/Home'
import {Component, createRef, useEffect, useState} from "react";
import Navbar from "./navbar/Navbar";
import MembersPage from "./members/MembersPage";
import React from "react";


class App extends Component {
    constructor(props) {
        super(props);
        this.pageRef = createRef();
    }

    smoothScroll = (n) => {
        this.pageRef.current.scroll({left: n * window.outerWidth, behavior: "smooth"})
    }

    scrollToPage(n) {
        this.smoothScroll(n);
    }

    render() {
        return (
            <>
                <Navbar/>
                <div className="App">
                    <ul id={"Pages"} ref={this.pageRef}>
                        <li>
                            <div className="Page" style={{background: "#BC3939"}}>


                                <img src={"images/.jpg"}/>
                                {/* <img src={TitleImage} width="1800" height="1013" /> */}
                                /website/public
                                <h1>Welcome to Team 1512</h1>
                                <p>Test paragraph 1</p>
                                <p>Test paragraph 2</p>
                            </div>
                        </li>
                        <li>
                            <div className="Page" style={{background: "#BC3939"}}>
                                <MembersPage />
                            </div>
                        </li>
                        <li>
                            <div className="Page" style={{background: "#BC3939"}}>
                                <div style={{paddingTop: 20}}>
                                    <h1>2023 Season</h1>
                                    <br/>
                                    <img src="images/2023Season2.jpg" width={"100%"}/>
                                    <br/>
                                    <img src="images/2023Season3.jpg" width={"70%"}/>
                                    <br/>
                                    <img src="images/2023Season1.jpg" width={"70%"}/>
                                    <br/>
                                </div>
                            </div>
                        </li>
                        <li>

                            <div className="Page" style={{background: "#BC3939"}}>
                                <div style={{paddingTop: 40}}>
                                    <h1>Address</h1>
                                    St. Paul's School, 325 Pleasant Street, Concord NH 03301
                                    <br/>
                                    <h1>Email Us</h1>
                                    Mr. Renauld's Email: wrenauld@sps.edu
                                    <br/>
                                    Dr. Justinvil's Email: ljustinvil@sps.edu
                                    <br/>
                                    Mr. Lalancette's Email: slalancette@sps.edu
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                </>
        );
    }
}

export default App;
