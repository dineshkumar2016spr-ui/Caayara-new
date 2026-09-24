import React from 'react';
import Header from './header';
import Footer from './footer';
import './styles/colors.css';
import './styles/global.css';
import './styles/pages.css';

const PageTemplate = ({ children }) => {
    return (
        <div className="page-template">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default PageTemplate;