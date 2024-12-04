import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import MembersPage from './members/MembersPage';
import Season2024Page from './season-2024/Season2024Page';
import Season2023Page from './season-2023/Season2023Page';
import ContactUsPage from './contact/ContactUsPage';
const App = () => {
  const [currentPage, setCurrentPage] = useState('team');

  const getPageIndex = (view) => {
    switch (view) {
      case 'team':
        return 0;
      case 'members':
        return 1;
      case 'season2':
        return 2;
      case 'season':
        return 3;
      case 'contact':
        return 4;
      default:
        return 0;
    }
  };

  const pageIndex = getPageIndex(currentPage);

  const scrollToPage = (view) => {
    setCurrentPage(view);
  };

  return (
    <>
      <Navbar scrollToPage={scrollToPage} />
      <div
        className="page-container"
        style={{ transform: `translateX(-${pageIndex * 20   }%)` }}
      >
        <div className="page">
          <Home />
        </div>
        <div className="page">
          <MembersPage />
        </div>
        <div className="page">
          <Season2024Page />
        </div>
        <div className="page">
          <Season2023Page />
        </div>
        <div className="page">
          <ContactUsPage />
        </div>
      </div>
    </>
  );
};

export default App;
