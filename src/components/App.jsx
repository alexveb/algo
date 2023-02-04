import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MainComponent from "./ContentData";
import MyNavbar from "./Navbar";


function App(){
    return (
        <div>
            <Header />
            <MyNavbar />
            <MainComponent />
            <Footer />
        </div>
    );
}

export default App;