import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MainComponent from "./ContentData";
import MyNavbar from "./Navbar";
import Search from "./Search";


function App(){
    return (
        <div>
            <Header />
            <MyNavbar />
            <h1 className="lastNews">Τελευταία Νέα</h1>
            <MainComponent />
            <Footer />
        </div>
    );
}

export default App;