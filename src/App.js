import './App.css';
import Home from './home/Home'
import Members from './members/Members'
import Page2 from './Page2';
import {Component, createRef, useEffect, useState} from "react";
import TitleImage from './Pictures/TitlePageImage.jpg';
import Navbar from "./navbar/Navbar";


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
                                {/* Original resolution: 1800 x 1013 */}
                                
                                <img src={TitleImage} className='smaller-image' alt='TitleImage'/>
                                {/* <img src={TitleImage} width="1800" height="1013" /> */}

                                <h1>Welcome to Team 1512</h1>
                                <p>Test paragraph 1</p>
                                <p>Test paragraph 2</p>
                            </div>
                        </li>
                        <li>
                            <div className="Page" style={{background: "#BC3939"}}>
                                <Page2 />
                            </div>
                        </li>
                        <li>
                            <div className="Page" style={{background: "#BC3939"}}>
                                <div style={{paddingTop: 20}}>
                                    <h1>2023 Season</h1>
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
