import React from 'react';
import Header from "./header.jsx";
import Carousels from "./carousel";
import Footer from "./footer.jsx";
import Sign from "./signup";
function App(){
    return (
    <div>
        <Header />
        <Carousels></Carousels>
        <Footer />
    </div>
    );
}
export default App;