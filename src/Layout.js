// Layout.js

import React from 'react';
import Header from './Header'; // Example header component
import Footer from './Footer'; // Example footer component

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="content">
        {children} {/* This will render the content of the individual pages */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
